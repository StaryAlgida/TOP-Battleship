function webInit() {
  const body = document.querySelector("body");
  if (body) {
    body.innerHTML = `
    <header></header>
    <section></section>
    <footer></footer>`;
    return true;
  } else return false;
}

export default webInit;
