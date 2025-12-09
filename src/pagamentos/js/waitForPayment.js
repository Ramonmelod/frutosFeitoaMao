export function waitForPayment(paymentId) {
  const interval = setInterval(async () => {
    const res = await fetch(
      `https://api.frutosfeitoamao.com.br/payments/${paymentId}/status`,
      { cache: "no-store" }
    );

    const data = await res.json();

    if (data.status === "approved") {
      clearInterval(interval);
      window.location.href = "/src/pagamentos/pagamento-confirmado.html";
    }
  }, 3000);
}
