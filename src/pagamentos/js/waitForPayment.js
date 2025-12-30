export function waitForPayment(paymentId) {
  console.log("host:", window.location.host);
  console.log("hostname:", window.location.hostname);
  console.log("href:", window.location.href);
  console.log("pathname:", window.location.pathname);
  console.log("origin:", window.location.origin);
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
