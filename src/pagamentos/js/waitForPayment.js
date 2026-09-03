export function waitForPayment(paymentId) {
  const interval = setInterval(async () => {
    const res = await fetch(
      `https://api.frutosfeitoamao.com.br/payments/${paymentId}/status`,
      { cache: "no-store" }
    );

    const data = await res.json();

    if (data.status === "approved") {
      clearInterval(interval);

      const isLocal =
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname === "localhost";

      const path = isLocal
        ? "/src/pagamentos/pagamento-confirmado.html" // Remenber to change this implementation
        : "/pagamentos/pagamento-confirmado.html";

      window.location.href = path;
    }
  }, 3000);
}
