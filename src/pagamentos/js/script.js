import { waitForPayment } from "./waitForPayment.js";
const form = document.getElementById("pixForm");
const resultDiv = document.getElementById("pixResult");
const copyPaste = document.getElementById("pixCopyPaste");
const pixBtn = document.getElementById("pixBtn");
const spinner = document.getElementById("spinner");
const pixForm = document.getElementById("pixForm");
const verificationForm = document.getElementById("verificationForm");
const verifyBtn = document.getElementById("verifyBtn");
const wrongCodeAlert = document.getElementById("wrongCodeAlert");

form.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    spinner.style.display = "flex";
    const emailField = document.getElementById("email");
    const nameField = document.getElementById("name");

    const name = nameField.value;
    const email = emailField.value;

    // call /verify-email
    await fetch(
      'https://api.frutosfeitoamao.com.br/verify-email"', //"http://localhost:8080/verify-email"
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }), //put the name?????
      }
    );

    // Oculta o form inicial e mostra o form do código
    spinner.style.display = "none";
    pixForm.style.display = "none";
    verificationForm.style.display = "block";

    verificationForm.addEventListener("submit", async (e) => {
      verifyBtn.textContent = "enviando...";
      spinner.style.display = "flex";
      const codeField = document.getElementById("verificationCode");
      const code = codeField.value;
      console.log(`AQUI ESTÁ O CODE> ${code}`);

      e.preventDefault();

      const response = await fetch(
        "https://api.frutosfeitoamao.com.br/create-pix", //"http://localhost:8080/create-pix"
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, name, code }),
        }
      );
      nameField.value = "";
      emailField.value = "";

      //read the received json
      const data = await response.json();

      // when the code is not found in the api
      if (!response.ok) {
        spinner.style.display = "none";
        codeField.value = "";
        verifyBtn.textContent = "Validar";
        wrongCodeAlert.style.display = "block";
        return;
      }
      verifyBtn.textContent = "Gerando...";
      const paymentId = data.payment_id;
      console.log(data.payment_id);
      console.log(data.message);
      console.log(data);

      if (data) {
        spinner.style.display = "none";
        resultDiv.style.display = "block";
        copyPaste.textContent = "Código Copia e Cola: " + data.qr_code;

        // clean the previous QRCODE
        QRCode.innerHTML = "";

        // generate the new QRCODE
        new QRCode(document.getElementById("qrCodeCanvas"), {
          text: data.qr_code,
          width: 250,
          height: 250,
        });
        codeField.value = "";

        verifyBtn.style.display = "none";
        pixBtn.style.display = "none";
        waitForPayment(paymentId); // here is called the function tests if the payment was approved and if it is, it redirect to pagamentos/pagamento-confirmado.html
      }
      wrongCodeAlert.style.display = "none"; // in case the client has wrong the verification code it hides it in the end
    });
  } catch (error) {
    console.error("Erro ao enviar dados:", error);
    alert("Falha na conexão com o servidor.");
  }
});
