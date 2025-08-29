import readline from "readline";

function readLineAsync(query) {
  return new Promise((resolve, reject) => {
    if (arguments.length !== 1) {
      reject(new Error("arguments must be 1"));
    }

    if (typeof query !== "string") {
      reject(new Error("query must be string"));
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(query, (input) => {
      rl.close();
      resolve(input);
    });
  });
}

function checkCarName(names) {
  let isInputValueCorrect = true;
  for (let name of names) {
    if (name.length > 5) {
      isInputValueCorrect = false;
      break;
    }
  }
  return isInputValueCorrect;
}

function moveForwardOneTime(carName, position) {
  console.log(`${carName} : ${"-".repeat(position)} \n`);
}

export async function playCarGame() {
  const input = await readLineAsync("자동차 이름을 입력하세요 > ");

  const carNames = input.split(",");

  if (!checkCarName(carNames)) return;

  const GAME_COUNT = 5;

  console.log("실행 결과");

  for (let i = 1; i <= GAME_COUNT; i++) {
    for (let car of carNames) {
      moveForwardOneTime(car, i);
    }
  }

  console.log("경주를 완료했습니다.");
}

playCarGame();
