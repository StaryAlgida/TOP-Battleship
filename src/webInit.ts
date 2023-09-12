function webInit() {
  const body = document.querySelector("body");
  const content = document.createElement("div");
  content.id = "content";
  content.innerHTML = `
    <header>
      <h1>Battleships</h1>
    </header>
    <section>
      <div id="menu">menu</div>
      <div id="boards">
        <div class="players-boards" id="player1"></div>
        <div class="players-boards" id="player2"></div>
      </div>
    </section>
    <footer></footer>`;
  if (body) {
    body.appendChild(content);
    return true;
  } else return false;
}

function fieldRender(board: string) {
  const playerBoadr = document.getElementById(board);
  if (playerBoadr) {
    for (let index = 0; index < 100; index++) {
      playerBoadr.appendChild(generateField());
    }
  }
}

function generateField() {
  const field = document.createElement("div");
  field.classList.add("field");
  return field;
}

export { webInit, fieldRender };
