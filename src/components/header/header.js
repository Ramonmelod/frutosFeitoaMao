import { initSearchBar } from "/js/searchBar.js";

async function loadHeader() {
  try {
    const response = await fetch("/components/header/header.html");
    const headerHtml = await response.text();
    document.getElementById("header-root").innerHTML = headerHtml;
    initSearchBar();
  } catch (error) {
    console.error("Erro ao carregar o header:", error);
  }
}

loadHeader();
