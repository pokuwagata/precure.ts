import { Precure } from "../src/precure";
import { expect } from "chai";
import "mocha";

describe("Precure", () => {
  it("プリキュアを全員取得する", () => {
    const precures: Array<Precure> = Precure.getPrecures();
    expect(precures.length).to.equal(3);

    const expectedNames: Array<string> = [
      "花寺 のどか",
      "沢泉 ちゆ",
      "平光 ひなた"
    ];
    precures.forEach((precure, i) => {
      expect(precure.getName()).to.equal(expectedNames[i]);
    });
  });
});
