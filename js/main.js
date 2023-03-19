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
// On click event on start button to call to the function
document
  .getElementById("start_game_button")
  .addEventListener("click", getPlayersNames);

// GET PLAYER NAMES METHOD END
