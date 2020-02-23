import { HumanState, PrecureState } from "./state";

export class Human extends HumanState {
  getName(): string {
    return "平光 ひなた";
  }
  transform(): PrecureState {
    console.log("溶け合う二つの光！キュアスパークル！");
    return new CureFontaine();
  }
}

export class CureFontaine extends PrecureState {
  getName(): string {
    return "キュアスパークル";
  }
  transform(): HumanState {
    return new Human();
  }
  skill(): string {
    return "プリキュア！ヒーリング・ブロック!";
  }
}
