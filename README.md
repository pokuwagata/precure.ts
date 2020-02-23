# healin-good-precure-ts

[Healin' Good♥Precure](http://www.toei-anim.co.jp/tv/precure/)

Inspired by Acme::PrettyCure.

## Installation

`$ npm i healin-good-precure-ts`

## Examples

```javascript
> precures = precure.getPrecures();
[ Precure { state: Human {} },
  Precure { state: Human {} },
  Precure { state: Human {} } ]
> precures[0].getName();
'花寺 のどか'
> precures[0].transform();
スタート！プリキュア ・オペレーション
キュアタッチ!
重なる二つの花！キュアグレース！
undefined
> precures[0].getName();
'キュアグレース'
> precures[0].skill();
エレメントチャージ!
プリキュア！ヒーリング・フラワー!
お大事に！
'プリキュア！ヒーリング・フラワー!'
> precures[0].transform();
undefined
> precures[0].getName();
'花寺 のどか'
>

```

## License

MIT
