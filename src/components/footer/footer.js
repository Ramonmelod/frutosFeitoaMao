async function loadFooter() {
  try {
    const res = await fetch("/components/footer/footer.html");
    const html = await res.text();
    document.getElementById("footer-root").innerHTML = html;

    const year = new Date().getFullYear();
    const copyRightText = document.querySelector(".copyright");
    copyRightText.innerHTML = `© ${year} Frutos Feito à Mão`; // insert the current year in the copyright text
  } catch (error) {
    console.log(error);
    throw error;
  }
}

loadFooter();
