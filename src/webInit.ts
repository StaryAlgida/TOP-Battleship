function webInit() {
  const body = document.querySelector("body");
  const content = document.createElement("div");
  content.id = "content";
  content.innerHTML = `
    <header>
      <h1>Battleships</h1>
    </header>
    <section>
      <div id="name-entry">
        <h2>Enter your name</h2>
        <div id="input-error">
          <input type="text" id="player-name" required minlength="1">
          <span id="error"></span>
        </div>
        <button id="strat">Start</button>
      </div>
    
    </section>
    <footer></footer>`;
  if (body) {
    body.appendChild(content);
    return true;
  } else return false;
}

export { webInit };

// add later board during game

// <div id="menu">menu</div>
//       <div id="boards">
//         <span id="player1-name"></span>
//         <span id="player2-name"></span>
//         <div class="players-boards" id="player1"></div>
//         <div class="players-boards" id="player2"></div>
//       </div>
