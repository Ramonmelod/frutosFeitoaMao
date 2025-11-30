import { waitForPayment } from "./waitForPayment.js";
const form = document.getElementById("pixForm");
const resultDiv = document.getElementById("pixResult");
const copyPaste = document.getElementById("pixCopyPaste");
const pixBtn = document.getElementById("pixBtn");
const spinner = document.getElementById("spinner");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const emailField = document.getElementById("email");
  const nameField = document.getElementById("name");

  const name = nameField.value;
  const email = emailField.value;

  try {
    pixBtn.disabled = true;
    pixBtn.textContent = "Gerando...";
    spinner.style.display = "flex";
    pixBtn.style.display = "none";
    const response = await fetch(
      "https://mercadopago-integration-three.vercel.app/create-pix",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      }
    );
    nameField.value = "";
    emailField.value = "";

    const data = await response.json();
    const paymentId = data.payment_id;
    console.log(data.payment_id);
    console.log(data.message);
    console.log(data.qr_code);

    if (true) {
      resultDiv.style.display = "block";
      copyPaste.textContent = "Código Copia e Cola: " + data.qr_code;

      // Limpa o QRCode anterior
      QRCode.innerHTML = "";

      // Gera o novo QRCode
      new QRCode(document.getElementById("qrCodeCanvas"), {
        text: data.qr_code,
        width: 250,
        height: 250,
      });
      spinner.style.display = "none";
      pixBtn.style.display = "none";
    }
    waitForPayment(paymentId); // here is called the function tests if the payment was approved and if it is, it redirect to pagamentos/pagamento-confirmado.html
  } catch (error) {
    console.error("Erro ao enviar dados:", error);
    alert("Falha na conexão com o servidor.");
  }
});
