const root = document.getElementById("root");

const renderIndex = () => {
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

const renderBoard = () => {
  return `
  <!--                              BEGIN PLAYERS NAMES INPUT                                        -->
    <div class="container" id="player_names_input_wrapper">
      <h1 id="player_names_title">Ingresa los nombres de los jugadores!</h1>
      <div class="input-group mb-3 players_input">
        <span class="input-group-text player_label">Jugador 1</span>
        <input
          type="text"
          class="form-control player_name_placeholder"
          placeholder="Ingresa tu nombre"
          id="player1_input"
        />
      </div>
      <div class="input-group mb-3 players_input">
        <span class="input-group-text player_label">Jugador 2</span>
        <input
          type="text"
          class="form-control player_name_placeholder"
          placeholder="Ingresa tu nombre"
          id="player2_input"
        />
      </div>
      <button type="button" class="btn btn-danger" id="start_game_button">
        Empezar juego!
      </button>
    </div>
    <!--                              END PLAYERS NAMES INPUT                                        -->

    <!--                           BEGIN BOARD AND GAME STRUCTURE                                    -->
    <div class="game_board_wrapper">
      <div class="players_board container">
        <div class="player_1" id="player1_board_name">Player 1</div>
        <div class="player_2" id="player2_board_name">Player 2</div>
      </div>
      <div class="container text-center">
        <div class="board">
          <div class="row">
            <div class="col-4 square" id="0"></div>
            <div class="col-4 square" id="1"></div>
            <div class="col-4 square" id="2"></div>
          </div>
          <div class="row">
            <div class="col-4 square" id="3"></div>
            <div class="col-4 square" id="4"></div>
            <div class="col-4 square" id="5"></div>
          </div>
          <div class="row">
            <div class="col-4 square" id="6"></div>
            <div class="col-4 square" id="7"></div>
            <div class="col-4 square" id="8"></div>
          </div>
        </div>
        <div class="status" id="status"></div>
        <button class="btn btn-danger btn-restart" id="restart">
          Reiniciar juego
        </button>
      </div>
    </div>

    <!--                           END BOARD AND GAME STRUCTURE                                    -->
  `;
};

// GET PLAYER NAMES METHOD BEGIN
// Function to get the player names and show the game board
const getPlayersNames = () => {
  let namePlayer1 = document.getElementById("player1_input").value;
  let namePlayer2 = document.getElementById("player2_input").value;

  let player1_board_name = document.getElementById("player1_board_name");
  let player2_board_name = document.getElementById("player2_board_name");

  let inputWrapper = document.getElementById("player_names_input_wrapper");

  player1_board_name.innerText = namePlayer1;

  player2_board_name.innerText = namePlayer2;

  inputWrapper.style.display = "none";
};
// // GET PLAYER NAMES METHOD END

// Principales

root.innerHTML = renderIndex();

const buttonPvP = document.getElementById("human-vs-human");
buttonPvP.addEventListener("click", () => {
  root.innerHTML = renderBoard();

  document
    .getElementById("start_game_button")
    .addEventListener("click", getPlayersNames);
});
