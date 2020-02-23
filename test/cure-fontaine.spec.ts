import { Precure } from "../src/precure";
import { expect } from "chai";
import "mocha";

describe("キュアフォンテーヌ", () => {
  const fontaine: Precure = Precure.createCureFontaine();

  it("変身前", () => {
    expect(fontaine.getName()).to.equal("沢泉 ちゆ");
    expect(fontaine.skill()).to.equal(undefined);
  });

  it("変身後", () => {
    fontaine.transform();
    expect(fontaine.getName()).to.equal("キュアフォンテーヌ");
    expect(fontaine.skill()).to.equal("プリキュア！ヒーリング・ストリーム!");
  });
});
