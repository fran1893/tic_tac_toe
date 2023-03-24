// Root variable for the objective on the index.html
const root = document.getElementById("root");

// Object to storage players data
const game = {
  player1: {
    name: null,
    mark: `<img src="./images/cross-image.png" alt="imagen-token-ganador" class="player1_token">`,
  },
  player2: {
    name: null,
    mark: `<img src="./images/circle-image.png" alt="imagen-token-ganador" class="player2_token">`,
  },
};

const uiIndex = () => {
  return `
  <div class="container welcome_wrapper">
      <h1 class="welcome_title">Tres en raya</h1>
      <h2 class="welcome_subtitle">
        Elige tu modo de juego y empieza a testear tus habilidades!
      </h2>
      <div class="welcome_image_wrapper">
        <img
          src="./images/welcome_image.png"
          alt="Game Zone image"
          class="welcome_image"
        />
      </div>

      <div class="row justify-content-center">
        <div class="col-md-4">
          <button class="btn btn-block btn-lg btn-game-mode" id="human-vs-human">
            Jugar contra otro jugador
          </button>
        </div>
        <div class="col-md-4">
          <button class="btn btn-block btn-lg btn-game-mode" id="human-vs-computer">
            Jugar contra la máquina
          </button>
        </div>
      </div>
    </div>
  `;
};

// Principales

const renderIndex = () => {
  root.innerHTML = uiIndex();
};

renderIndex();
