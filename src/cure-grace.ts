import { HumanState, PrecureState } from "./state";

export class Human extends HumanState {
  getName(): string {
    return "花寺 のどか";
  }
  transform(): PrecureState {
    console.log("重なる二つの花！キュアグレース！");
    return new CureGrace();
  }
}

export class CureGrace extends PrecureState {
  getName(): string {
    return "キュアグレース";
  }
  transform(): HumanState {
    return new Human();
  }
  skill(): string {
    return "プリキュア！ヒーリング・フラワー!";
  }
}
