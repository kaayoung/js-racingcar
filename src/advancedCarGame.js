import Car from "./Car.js";
import { readLineAsync } from "./utils/readLineAsync.js";

function checkCarName(names) {
  const CAR_NAME_MAX_LENGTH = 5;

  return names.every((name) => name.length <= CAR_NAME_MAX_LENGTH);
}

function makeCars(carNames) {
  return carNames.map((name) => new Car({ name }));
}

function winnersOf(cars) {
  const maxPosition = Math.max(...cars.map((c) => c.position));
  return cars.filter((c) => c.position === maxPosition).map((c) => c.name);
}

async function advancedCarGame() {
  try {
    const inputCarNames = await readLineAsync(
      "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분)."
    );
    const carNames = inputCarNames.split(",");

    if (!checkCarName(carNames)) return;

    const cars = makeCars(carNames);

    const inputGameCount = await readLineAsync("시도할 회수는 몇회인가요?");
    const tryGameCount = Number(inputGameCount);

    for (let i = 0; i < tryGameCount; i++) {
      cars.forEach((car) => {
        if (Math.floor(Math.random() * 10) >= 4) {
          car.moveForward();
        }

        console.log(`${car.name} : ${"-".repeat(car.position)} \n`);
      });
      console.log("\n");
    }

    const winners = winnersOf(cars);
    console.log(`${winners.join(" , ")} 가 최종 우승했습니다.`);
  } catch (error) {
    console.error(error);
  }
}

advancedCarGame();
