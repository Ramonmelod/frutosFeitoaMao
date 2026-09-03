export function waitForPayment(paymentId) {
  const POLL_INTERVAL = 3000;
  const MAX_ATTEMPTS = 60; // 60 x 3s = 3 minutes max
  let attempts = 0;

  const interval = setInterval(async () => {
    attempts++;

    if (attempts >= MAX_ATTEMPTS) {
      clearInterval(interval);
      console.warn("waitForPayment: limite de tentativas atingido");
      const alertEl = document.getElementById("wrongCodeAlert");
      if (alertEl) {
        alertEl.textContent =
          "Tempo limite atingido aguardando o pagamento. Se você já pagou, aguarde alguns instantes e recarregue a página.";
        alertEl.style.display = "block";
      }
      return;
    }

    try {
      const res = await fetch(
        `https://api.frutosfeitoamao.com.br/payments/${paymentId}/status`,
        { cache: "no-store" },
      );

      if (!res.ok) {
        console.warn(`waitForPayment: resposta não-OK (${res.status})`);
        return;
      }

      const data = await res.json();

      if (data.status === "approved") {
        clearInterval(interval);
        window.location.href = "/pagamentos/pagamento-confirmado.html";
      }
    } catch (error) {
      console.error("waitForPayment: erro ao verificar status:", error);
    }
  }, POLL_INTERVAL);
}
