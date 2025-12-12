async function loadHeader() {
  try {
    const response = await fetch("/components/header.html");
    const headerHtml = await response.text();
    document.body.insertAdjacentHTML("afterbegin", headerHtml);
  } catch (error) {
    console.error("Erro ao carregar o header:", error);
  }
}

loadHeader();
