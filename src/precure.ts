import State from "./state";
import * as grace from "./cure-grace";
import * as fontaine from "./cure-fontaine";
import * as sparkle from "./cure-sparkle";

export class Precure {
  constructor(state: State) {
    this.state = state;
  }
  state: State;
  getName(): string {
    return this.state.getName();
  }
  transform(): void {
    this.state = this.state.startTransform();
  }
  skill(): string | void {
    return this.state.startSkill();
  }
  static createCureGrace(): Precure {
    return new Precure(new grace.Human());
  }
  static createCureFontaine(): Precure {
    return new Precure(new fontaine.Human());
  }
  static createCureSparkle(): Precure {
    return new Precure(new sparkle.Human());
  }
  static getPrecures(): Array<Precure> {
    let precures: Array<Precure> = [];
    precures.push(this.createCureGrace());
    precures.push(this.createCureFontaine());
    precures.push(this.createCureSparkle());
    return precures;
  }
}
