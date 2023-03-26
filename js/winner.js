const renderWinner = (playerWinner, playerWinner_mark) => {
  return `
  <div class="container winner-wrapper">
      <h1 class="winner-title">¡Tenemos un ganador!</h1>
      <div class="card">
        <div class="card-body winner-body-wrapper">
          <h2 class="h2-winner">El ganador es:</h2>
          <h1 class="winner-name">${playerWinner}</h1>
          ${playerWinner_mark}
          <h2 class="h2-winner">Felicidades, ${playerWinner}. Has ganado el juego. Gracias por participar.</h2>
          <button id="restartWinner" type="button" class="btn btn-primary btn-restart-winner">Reiniciar Juego</button>
        </div>
      </div>
    </div>
  `;
};

const renderDraw = () => {
  return `<h2 id="draw_title">Ha terminado en EMPATE!! Puedes reiniciar el juego con el boton si quieres</h2>`;
};

// CHECK WINNER/DRAW FUNCTIONALITY
const checkWinner = (player, mapC) => {
  const uiRenderWinner = () => {
    if (player == "X") {
      root.innerHTML = renderWinner(game.player1.name, game.player1.mark);
    } else if (player == "O") {
      root.innerHTML = renderWinner(game.player2.name, game.player2.mark);
    }
    const restartWinner = document.getElementById("restartWinner");
    restartWinner.addEventListener("click",()=>{
      renderIndex();
      renderBoard();
    })
  };

  if (mapC[0] == player && mapC[1] == player && mapC[2] == player) {
    uiRenderWinner();
  } else if (mapC[3] == player && mapC[4] == player && mapC[5] == player) {
    uiRenderWinner();
  } else if (mapC[6] == player && mapC[7] == player && mapC[8] == player) {
    uiRenderWinner();
  } else if (mapC[0] == player && mapC[3] == player && mapC[6] == player) {
    uiRenderWinner();
  } else if (mapC[1] == player && mapC[4] == player && mapC[7] == player) {
    uiRenderWinner();
  } else if (mapC[2] == player && mapC[5] == player && mapC[8] == player) {
    uiRenderWinner();
  } else if (mapC[0] == player && mapC[4] == player && mapC[8] == player) {
    uiRenderWinner();
  } else if (mapC[2] == player && mapC[4] == player && mapC[6] == player) {
    uiRenderWinner();
  } else if (
    mapC[0] != undefined &&
    mapC[1] != undefined &&
    mapC[2] != undefined &&
    mapC[3] != undefined &&
    mapC[4] != undefined &&
    mapC[5] != undefined &&
    mapC[6] != undefined &&
    mapC[7] != undefined &&
    mapC[8] != undefined
  ) {
    const uiDrawStatus = document.getElementById("status");
    const restartButton = document.getElementById("restart");
    const uiTurnP1 = document.getElementById("turnoP1");
    const uiTurnP2 = document.getElementById("turnoP2");

    uiDrawStatus.innerHTML = renderDraw();
    uiTurnP1.style.display = "none";
    uiTurnP2.style.display = "none";

    restartButton.addEventListener("click", () => {
      renderIndex();
      renderBoard();
    });
  }
};
