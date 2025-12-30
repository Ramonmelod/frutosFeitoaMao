import { waitForPayment } from "./waitForPayment.js";

const resultDiv = document.getElementById("pixResult");
const pixBtn = document.getElementById("pixBtn");
const spinner = document.getElementById("spinner");
const pixForm = document.getElementById("pixForm");
const verificationForm = document.getElementById("verificationForm");
const verifyBtn = document.getElementById("verifyBtn");
const wrongCodeAlert = document.getElementById("wrongCodeAlert");
const wrongEmailAlert = document.getElementById("wrongEmailAlert");
const pixFormNamefield = document.getElementById("name");
const pixFormEmailfield = document.getElementById("email");
const pixCopyPasteBtn = document.getElementById("pixCopyPasteBtn");

const params = new URLSearchParams(window.location.search);
const productSlug = params.get("productSlug"); // get the product name

/* ------------------ state ------------------ */

let pixCode = "";

/* ------------------ COPY PIX BUTTON ------------------ */

pixCopyPasteBtn.style.display = "none";

pixCopyPasteBtn.addEventListener("click", async () => {
  if (!pixCode) return;

  try {
    await navigator.clipboard.writeText(pixCode);
    pixCopyPasteBtn.textContent = "Código copiado!";
    pixCopyPasteBtn.classList.remove("btn-outline-secondary");
    pixCopyPasteBtn.classList.add("btn-success");
    /* Google Analytics Event */

    if (typeof gtag === "function") {
      gtag("event", "copy_pix_code", {
        event_category: "payment",

        event_label: "pix_copy_paste",
      });
    }

    setTimeout(() => {
      pixCopyPasteBtn.textContent = "Copiar código PIX";
      pixCopyPasteBtn.classList.remove("btn-success");
      pixCopyPasteBtn.classList.add("btn-outline-secondary");
    }, 2500);
  } catch (error) {
    alert("Não foi possível copiar o código. Copie manualmente.");
  }
});

function fetchWithTimeout(url, options = {}, timeout = 15000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  return fetch(url, { ...options, signal: controller.signal }).finally(() =>
    clearTimeout(id)
  );
}

pixForm.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    spinner.style.display = "flex";

    const emailField = document.getElementById("email");
    const nameField = document.getElementById("name");

    const name = nameField.value;
    const email = emailField.value;

    // call /verify-email with timeout
    const response1 = await fetchWithTimeout(
      "http://localhost:8080/verify-email", //"https://api.frutosfeitoamao.com.br/verify-email", //
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      },
      12000
    );

    //read the received json
    const data = await response1.json();
    if (!response1.ok) {
      spinner.style.display = "none";
      pixFormNamefield.value = "";
      pixFormEmailfield.value = "";

      let errorMessage =
        "Ocorreu um erro desconhecido. Por favor, tente novamente mais tarde.";

      if (data && data.message) {
        errorMessage = data.message;
      } else if (response1.status === 400) {
        errorMessage =
          "O campo de e-mail está vazio. Por favor, informe um endereço de e-mail.";
      } else if (response1.status === 403) {
        errorMessage =
          "O endereço de e-mail informado não é válido. Por favor, verifique e tente novamente.";
      } else if (response1.status === 500) {
        errorMessage =
          "Houve um problema com nossos serviços. Por favor, tente novamente em alguns minutos.";
      }

      wrongEmailAlert.textContent = errorMessage;
      wrongEmailAlert.style.display = "block";
      return;
    }
    // hide initial form and show verification form
    pixForm.style.display = "none";
    spinner.style.display = "none";
    wrongEmailAlert.style.display = "none";
    verificationForm.style.display = "block";

    verificationForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      verifyBtn.textContent = "enviando...";
      spinner.style.display = "flex";

      const codeField = document.getElementById("verificationCode");
      const code = codeField.value;

      console.log(`AQUI ESTÁ O CODE> ${code}`);

      try {
        // call /create-pix with timeout
        const response2 = await fetchWithTimeout(
          "http://localhost:8080/create-pix", //"https://api.frutosfeitoamao.com.br/create-pix", //
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, name, code, productSlug }),
          },
          15000
        );

        nameField.value = "";
        emailField.value = "";

        //read the received json
        const data = await response2.json();

        if (!response2.ok) {
          spinner.style.display = "none";
          codeField.value = "";
          verifyBtn.textContent = "Validar";

          let errorMessage =
            "Houve um problema ao validar o código. Por favor, tente novamente.";

          if (data && data.message) {
            errorMessage = data.message;
          }
          // 2. Trata Status 400 (Falta email/código)
          else if (response2.status === 400) {
            errorMessage =
              "Campos obrigatórios ausentes. Por favor, preencha o código de verificação e tente novamente.";
          } else if (response2.status === 403) {
            errorMessage =
              "O código de verificação está incorreto ou expirou. Tente novamente ou solicite um novo e-mail.";
          } else if (response2.status === 500) {
            errorMessage =
              "Houve um erro interno ao gerar o PIX. Tente novamente em alguns minutos.";
          }

          wrongCodeAlert.textContent = errorMessage;
          wrongCodeAlert.style.display = "block";
          return;
        }
        verifyBtn.textContent = "Gerando...";
        const paymentId = data.payment_id;

        if (data) {
          spinner.style.display = "none";
          verificationForm.style.display = "none";
          resultDiv.style.display = "block";
          pixCopyPasteBtn.style.display = "inline-block";

          // clean previous QR code
          QRCode.innerHTML = "";
          pixCode = data.qr_code;

          new QRCode(document.getElementById("qrCodeCanvas"), {
            text: pixCode,
            width: 250,
            height: 250,
          });

          codeField.value = "";

          verifyBtn.style.display = "none";
          pixBtn.style.display = "none";

          waitForPayment(paymentId);
        }

        wrongCodeAlert.style.display = "none";
      } catch (error) {
        console.error("Erro na requisição PIX:", error);

        spinner.style.display = "none";
        verifyBtn.textContent = "Validar";
        codeField.value = "";

        wrongCodeAlert.textContent =
          "A conexão falhou ou demorou demais. Por favor, verifique sua conexão e tente novamente.";
        wrongCodeAlert.style.display = "block";
      } // <--- END OF THE INNER TRY-CATCH
    });
  } catch (error) {
    console.error("Erro ao enviar dados:", error);

    // TIMEOUT ou AbortError
    wrongEmailAlert.textContent =
      "A conexão demorou demais ou falhou. Por favor, tente novamente.";
    wrongEmailAlert.style.display = "block";
  } finally {
    spinner.style.display = "none";
    pixFormNamefield.value = "";
    pixFormEmailfield.value = "";
  }
});
