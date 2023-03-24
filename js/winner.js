const renderWinner = (playerWinner) => {
  return `<h1>${playerWinner}</h1>`;
};

const renderDraw = () => {
  return `<h2 id="draw_title">Ha terminado en EMPATE!! Puedes reiniciar el juego con el boton si quieres</h2>`;
};




// CHECK WINNER/DRAW FUNCTIONALITY
const checkWinner = (player, mapC) => {
  const uiRenderWinner = () => {
    if (player == "X") {
      root.innerHTML = renderWinner(game.player1.name);
    } else if (player == "O") {
      root.innerHTML = renderWinner(game.player2.name);
    }
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
    const uiTurnP2 = document.getElementById("TurnoP2");

    uiDrawStatus.innerHTML = renderDraw();
    uiTurnP1.style.display = "none";
    uiTurnP2.style.display = "none";

    restartButton.addEventListener("click", () => {
      renderIndex();
      renderBoard();
    });
  }
};
