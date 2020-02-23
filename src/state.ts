export default abstract class State {
  abstract getName(): string;
  abstract startTransform(): State;
  abstract transform(): State;
  abstract startSkill(): string | void;
}

export abstract class HumanState extends State {
  startTransform(): State {
    console.log("スタート！プリキュア ・オペレーション");
    console.log("キュアタッチ!");
    return this.transform();
  }
  startSkill(): void{}
}

export abstract class PrecureState extends State {
  abstract skill(): string;
  startTransform(): State {
    return this.transform();
  }
  startSkill(): string {
    const skill = this.skill();
    console.log("エレメントチャージ!");
    console.log(skill);
    console.log("お大事に！");
    return skill;
  }
}
