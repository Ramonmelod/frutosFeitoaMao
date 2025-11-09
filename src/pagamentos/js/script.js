const form = document.getElementById("pixForm");
const resultDiv = document.getElementById("pixResult");
const copyPaste = document.getElementById("pixCopyPaste");
///const QRCode = document.getElementById("qrCodeCanvas");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;

  try {
    const response = await fetch("http://localhost:8080/create-pix", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name }),
    });

    const data = await response.json();
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
    }
  } catch (error) {
    console.error("Erro ao enviar dados:", error);
    alert("Falha na conexão com o servidor.");
  }
});
