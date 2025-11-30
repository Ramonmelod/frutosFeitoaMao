export function waitForPayment(paymentId) {
  const interval = setInterval(async () => {
    const res = await fetch(
      `https://mercadopago-integration-three.vercel.app/payments/${paymentId}/status`
    );

    const data = await res.json();

    if (data.status === "approved") {
      clearInterval(interval);
      window.location.href = "/src/pagamentos/pagamento-confirmado.html";
    }
  }, 3000);
}
