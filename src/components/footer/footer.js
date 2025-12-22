async function loadFooter() {
  try {
    const res = await fetch("/components/footer/footer.html");
    const html = await res.text();
    document.getElementById("footer-root").innerHTML = html;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

loadFooter();
