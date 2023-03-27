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
const checkWinner = (playerMark, mapC) => {
  const uiRenderWinner = () => {
    if (playerMark == "X") {
      root.innerHTML = renderWinner(playersObj.player1.name, playersObj.player1.mark);
    } else if (playerMark == "O") {
      root.innerHTML = renderWinner(playersObj.player2.name, playersObj.player2.mark);
    }
    const restartWinner = document.getElementById("restartWinner");
    restartWinner.addEventListener("click", () => {
      renderIndex();
      renderBoard();
    });
  };

  if (mapC[0] == playerMark && mapC[1] == playerMark && mapC[2] == playerMark) {
    uiRenderWinner();
  } else if (
    mapC[3] == playerMark &&
    mapC[4] == playerMark &&
    mapC[5] == playerMark
  ) {
    uiRenderWinner();
  } else if (
    mapC[6] == playerMark &&
    mapC[7] == playerMark &&
    mapC[8] == playerMark
  ) {
    uiRenderWinner();
  } else if (
    mapC[0] == playerMark &&
    mapC[3] == playerMark &&
    mapC[6] == playerMark
  ) {
    uiRenderWinner();
  } else if (
    mapC[1] == playerMark &&
    mapC[4] == playerMark &&
    mapC[7] == playerMark
  ) {
    uiRenderWinner();
  } else if (
    mapC[2] == playerMark &&
    mapC[5] == playerMark &&
    mapC[8] == playerMark
  ) {
    uiRenderWinner();
  } else if (
    mapC[0] == playerMark &&
    mapC[4] == playerMark &&
    mapC[8] == playerMark
  ) {
    uiRenderWinner();
  } else if (
    mapC[2] == playerMark &&
    mapC[4] == playerMark &&
    mapC[6] == playerMark
  ) {
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
