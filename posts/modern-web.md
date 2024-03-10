---
title: "モダンWebの特徴"
date: "2023-10-15"
thumbnail: "/images/modern-web.jpg"
---

# 概要
- モダンWebとは「バックエンド処理に比重を置いた従来のWeb技術」と一線を画すWeb技術である。
- 機能としては以下挙げられる
    - SPAを利用した高速データ表示機能
    - Service Worker(Webブラウザ内臓)を利用したオフライン表示機能
    - Webストレージ、URLパラメータ等を利用した前回表示画面の復元機能
    - Intersection Observer API等を利用した無限スクロール機能
    - PWA（Progressive Web Apps）の特徴であるネイティブアプリライクなWebアプリ構築
- デザイン面では以下挙げられる
    - レスポンシブデザイン
    - UXデザイン
- はっきりとした定義が有る訳ではないので、上記が全てではない。
- 従来型Webと区別する際に使う対義語と捉えるのが適切と考える

# 機能例
## SPAを利用した高速データ表示機能
- 従来型Webにおいてはユーザーがフロントエンドで操作の度、バックエンドにリクエストを行い画面データを作成しフロントエンドに画面データをレスポンスとして返し、画面表示する仕組みである。
- モダンWebにおいては、極力フロントエンド側で画面データを作成して表示することにより高速データ表示を可能としている。
- 以下の仕組みを持つ事で、高速可能なページ表示を可能としている
    - SPA、UXページデザインにより、1ページ辺り必要最小限のデータを取得する仕組み
    - 画面表示後も、バックグラウンド通信で事前予測したデータをバックエンドから先読み取得する仕組み

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/235774/b3af86d9-fd6b-9420-db1b-5fe7cc28a8eb.png)
[Webサイト SPAとMPAの違い](https://www.azusuki.com/spa-mpa/)

## Service Worker(Webブラウザ内臓)を利用したオフライン表示機能
- ネットワーク切断されたオフライン状態でもオンライン時と同様にページ表示、ページ移動、ボタン操作が可能な機能である。
- 以下の仕組みにより、オフライン表示が可能となる
    - Webサイト接続時にWebサイトのデータをローカルにダウンロード（遅延ダウンロード）
    - オフライン時にService WorkerがWebサーバーの代替となりユーザーのリクエスト処理の応答を担う
    - オンライン切替わり時にインターネット上Webサーバーにユーザーから受け取っていたリクエスト処理を渡す

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/235774/29d3fc7e-a7dd-b6ad-31f9-be3bd9ff1365.png)
[Medium](https://medium.com/sessionstack-blog/how-javascript-works-service-workers-their-life-cycle-and-use-cases-52b19ad98b58)

## Webストレージ、URLパラメータ等を利用した前回表示画面の復元機能
- 従来型Webでは、Web入力画面で途中まで入力したが、ブラウザを閉じた場合に途中入力データは失われることがデフォルトである。（Webアプリ機能で「一時保存」ボタン等を明示的に実装している例は除く）
- モダンWebにおいては、途中までの入力データ、URLパラメータ等をWebストレージに保存しておく事で再度ログイン時に前回表示画面を復元することが可能となる

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/235774/1d893b7c-2aab-4591-41a9-e76a6a85d8f8.png)
[ブラウザでストレージ？ Web Storageを使いこなそう](https://atmarkit.itmedia.co.jp/ait/articles/1108/12/news093.html)

## Intersection Observer API等を利用した無限スクロール機能
- 従来型Webにおいては、大量データの一覧表示はページング処理で実現することが多い
- モダンWebにおいては、Google 画像検索ページのように、ページ末尾にスクロールすると自動的に次ページを検索表示する仕組みを持っている
- 無限スクロール機能により、スムーズに検索結果を表示することが可能となる
- 仕組みとしては、バックグラウンド通信と分割ダウンロードを組み合わせて実現している
- 無限スクロール機能については、フッターが見えない等のデメリットも有るので、Webサイトの特徴を考えて、適切に検討する必要が有ると考える

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/235774/afd2d7c2-d272-1150-6b8b-c83f5df70f2a.png)

# まとめ
- モダンWebについては明示的に定義されているものではない
- 従来型Webに無い機能を提供することによりUXを向上させる事が出来る
    - 従来より素晴らしい体験をユーザーに提供出来る
- モダンWebを実現するにはjQueryの様なレガシーなフレームワークでは難しいのではないか
- 3大フレームワーク(React, Angular, Vue.js)、HTML5、ES6(2015)以降の知識と幅広くフロントエンド周りを抑えておくことが必要ではないかと考える

# 参考サイト
https://wakka-inc.com/blog/1937/
https://kinsta.com/jp/blog/web-application-architecture/
https://qiita.com/hrkt/items/71c951082c6d90c7cd78
https://laboradian.com/create-offline-site-using-sw/


