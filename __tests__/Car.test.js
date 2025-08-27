import Car from "../src/Car";

describe("자동차 클래스 테스트", () => {
  test("자동차는 이름을 상태로 가질 수 있다.", () => {
    const car = new Car({ name: "car1" });

    expect(car.name).toBe("car1");
  });

  test("자동차는 위치 값을 가진다", () => {
    const car = new Car({ name: "car2", position: 10 });

    expect(car.position).toBe(10);
  });

  test("자동차는 위치 값 초기 상태는 0이다.", () => {
    const car = new Car({ name: "car3" });

    expect(car.position).toBe(0);
  });

  test("자동차는 전진할 수 있으며 한 번에 1만큼 전진한다. ", () => {
    const car = new Car({ name: "car4", position: 3 });

    car.moveForward();

    expect(car.position).toBe(4);
  });

  test("자동차는 두번 전진하면 2만큼 (한번에 1만큼씩 두번) 전진하게 된다 ", () => {
    const car = new Car({ name: "car5", position: 3 });

    car.moveForward();
    car.moveForward();

    expect(car.position).toBe(5);
  });
});
