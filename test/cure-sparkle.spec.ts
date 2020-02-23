import { Precure } from "../src/precure";
import { expect } from "chai";
import "mocha";

describe("キュアスパークル", () => {
  const fontaine: Precure = Precure.createCureSparkle();

  it("変身前", () => {
    expect(fontaine.getName()).to.equal("平光 ひなた");
    expect(fontaine.skill()).to.equal(undefined);
  });

  it("変身後", () => {
    fontaine.transform();
    expect(fontaine.getName()).to.equal("キュアスパークル");
    expect(fontaine.skill()).to.equal("プリキュア！ヒーリング・ブロック!");
  });
});
