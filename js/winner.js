const renderWinner = (playerWinner) => {
  return `<h1>${playerWinner}</h1>`;
};
const checkWinner = (player, mapC) => {
  const uiRenderWinner = () => {
    if (player == "X") {
      root.innerHTML = renderWinner(game.player1.name);
    } else {
      root.innerHTML = renderWinner(game.player2.name);
    }
  };
  if (mapC[0] == player && mapC[1] == player && mapC[2] == player) {
    uiRenderWinner();
  }
  if (mapC[3] == player && mapC[4] == player && mapC[5] == player) {
    uiRenderWinner();
  }
  if (mapC[6] == player && mapC[7] == player && mapC[8] == player) {
    uiRenderWinner();
  }
  if (mapC[0] == player && mapC[3] == player && mapC[6] == player) {
    uiRenderWinner();
  }
  if (mapC[1] == player && mapC[4] == player && mapC[7] == player) {
    uiRenderWinner();
  }
  if (mapC[2] == player && mapC[5] == player && mapC[8] == player) {
    uiRenderWinner();
  }
  if (mapC[0] == player && mapC[4] == player && mapC[8] == player) {
    uiRenderWinner();
  }
  if (mapC[2] == player && mapC[4] == player && mapC[6] == player) {
    uiRenderWinner();
  }
};
