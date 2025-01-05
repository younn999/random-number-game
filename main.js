const playButton = document.getElementById("play-button");
const userInput = document.getElementById("user-input");
const resultArea = document.getElementById("result-area");
const chanceArea = document.getElementById("chance-area");
const resetButton = document.getElementById("reset-button");

let computerNum = 0;
let chances = 5;
let history = [];
let gameOver = false;

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", () => {
  userInput.value = "";
});

// 게임 실행
function play() {
  const userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1부터 100 사이의 숫자를 입력하세요!";
    return;
  } else if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자입니다!";
    return;
  }

  if (userValue < computerNum) {
    // console.log("Up!");
    resultArea.textContent = "올리세요!";
  } else if (userValue > computerNum) {
    // console.log("Down!");
    resultArea.textContent = "내리세요!";
  } else {
    // console.log("Correct!");
    resultArea.textContent = "정답입니다!";
    gameOver = true;
  }

  history.push(userValue);
  chances--;
  console.log("입력값", history);
  chanceArea.textContent = `남은 기회 : ${chances}번`;
  chanceArea.style.color = "#341f97";

  if (chances == 0) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}

// 게임 리셋
function reset() {
  pickRandomNum();
  history = [];
  chances = 5;
  gameOver = false;
  playButton.disabled = false;
  resultArea.textContent = "결과는?";
  chanceArea.textContent = `남은 기회 : ${chances}번`;
  userInput.value = "";
}

// 랜덤 번호 생성
function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

pickRandomNum();
