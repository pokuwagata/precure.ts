import { Precure } from "../src/precure";
import { expect } from "chai";
import "mocha";

describe("キュアグレース", () => {
  const grace: Precure = Precure.createCureGrace();

  it("変身前", () => {
    expect(grace.getName()).to.equal("花寺 のどか");
    expect(grace.skill()).to.equal(undefined);
  });

  it("変身後", () => {
    grace.transform();
    expect(grace.getName()).to.equal("キュアグレース");
    expect(grace.skill()).to.equal("プリキュア！ヒーリング・フラワー!");
  });
});
