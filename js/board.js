// HTML TEMPLATE FOR THE BOARD AND INPUT PLAYER NAMES
const uiBoard = () => {
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

// GET PLAYERS NAMES
const getPlayerNames = () => {
  // Get name values
  let namePlayer1 = document.getElementById("player1_input").value;
  let namePlayer2 = document.getElementById("player2_input").value;

  // Storage values on game object
  game.player1.name = namePlayer1;
  game.player2.name = namePlayer2;
};

// RENDER PLAYER NAMES FUNCTION
const renderPlayersNames = () => {
  // Call to get player names function
  getPlayerNames();
  //  Get objectives to render names on the board
  let player1_board_name = document.getElementById("player1_board_name");
  let player2_board_name = document.getElementById("player2_board_name");
  // Get objective for the container of the name input window
  let inputWrapper = document.getElementById("player_names_input_wrapper");
  // Render names on the board
  player1_board_name.innerText = game.player1.name;
  player2_board_name.innerText = game.player2.name;
  // Hide name input window to show the board
  inputWrapper.style.display = "none";
};

// RENDER BOARD FUNCTION
const renderBoard = () => {
  const buttonPvP = document.getElementById("human-vs-human");
  buttonPvP.addEventListener("click", () => {
    root.innerHTML = uiBoard();

    document
      .getElementById("start_game_button")
      .addEventListener("click", renderPlayersNames);
  });
};

// CALL TO RENDER BOARD FUNCTION
renderBoard();
