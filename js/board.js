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
           <div class = "player1_box">
             <div class="player_1" id="player1_board_name">Player 1</div>
             <div id="turnoP1">Es tu turno...</div>
            </div>
            <div class = "player2_box">
              <div class="player_2" id="player2_board_name">Player 2</div>
              <div id="turnoP2"></div>
            </div>
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
  playersObj.player1.name = namePlayer1;
  playersObj.player2.name = namePlayer2;
};

// RENDER PLAYER NAMES FUNCTION
const renderPlayersNames = () => {
  getPlayerNames();

  const player1_board_name = document.getElementById("player1_board_name");
  const player2_board_name = document.getElementById("player2_board_name");
  const inputWrapper = document.getElementById("player_names_input_wrapper");

  player1_board_name.innerText = playersObj.player1.name;
  player2_board_name.innerText = playersObj.player2.name;

  // Hide name input window to show the board
  inputWrapper.style.display = "none";
};

// GAME FUNCTIONALITY
const gameFunction = () => {
  const uiBoxes = document.querySelectorAll(".square");
  const mapBoxes = [];
  let turno1 = false;

  const manageClick = (divCasilla) => {
    const uiTurno1 = document.getElementById("turnoP1");
    const uiTurno2 = document.getElementById("turnoP2");
    const player1_board_name = document.getElementById("player1_board_name");
    const player2_board_name = document.getElementById("player2_board_name");

    if (divCasilla.innerHTML == "") {
      if (turno1) {
        divCasilla.innerHTML = playersObj.player2.mark;
        uiTurno1.innerHTML = "Es tu turno...";
        uiTurno2.innerHTML = " ";
        mapBoxes[divCasilla.id] = "O";
        player1_board_name.style.background = "linear-gradient(to bottom, #5544c7 5%, #5cbf2a 100%)";
        player2_board_name.style.background = "linear-gradient(to bottom, #44c767 5%, #5cbf2a 100%)";
      } else {
        divCasilla.innerHTML = playersObj.player1.mark;
        uiTurno2.innerHTML = "Es tu turno..";
        uiTurno1.innerHTML = " ";
        mapBoxes[divCasilla.id] = "X";
        player2_board_name.style.background = "linear-gradient(to bottom, #5544c7 5%, #5cbf2a 100%)";
        player1_board_name.style.background = "linear-gradient(to bottom, #44c767 5%, #5cbf2a 100%)";
      }
      turno1 = !turno1;
      checkWinner(mapBoxes[divCasilla.id], mapBoxes);
    }
  };

  for (let i = 0; i < uiBoxes.length; i++) {
    uiBoxes[i].addEventListener("click", (event) => {
      const boxTarget = event.target;
      manageClick(boxTarget);
    });
  }
};

// RENDER BOARD FUNCTION
const renderBoard = () => {
  const buttonPvP = document.getElementById("human-vs-human");
  buttonPvP.addEventListener("click", () => {
    root.innerHTML = uiBoard();

    document
      .getElementById("start_game_button")
      .addEventListener("click", renderPlayersNames);

    gameFunction();
  });
};

// CALL TO RENDER BOARD FUNCTION
renderBoard();
