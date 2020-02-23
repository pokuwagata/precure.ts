import { HumanState, PrecureState } from "./state";

export class Human extends HumanState {
  getName(): string {
    return "沢泉 ちゆ";
  }
  transform(): PrecureState {
    console.log("交わる二つの流れ！キュアフォンテーヌ！");
    return new CureFontaine();
  }
}

export class CureFontaine extends PrecureState {
  getName(): string {
    return "キュアフォンテーヌ";
  }
  transform(): HumanState {
    return new Human();
  }
  skill(): string {
    return "プリキュア！ヒーリング・ストリーム!";
  }
}
