---
title: "[React] @triyanox/react-videoコンポーネント - カスタマイズ可能なビデオプレーヤー"
date: "2024-01-07"
thumbnail: "/images/react-video.jpg"
---

# 概要
Reactでの実装において、カスタマイズ可能なビデオプレーヤーを作成する為、 @triyanox/react-video  コンポーネントを使用しました。
その実装手順をチュートリアル形式で記述しました。

# 事前準備
pnpmパッケージを使用しています。インストールされていない場合はインストールしてください。
ちなみにnpmでインストールする際のコマンドは以下です。

```
npm install -g pnpm
```

# 手順
pnpmパッケージでプロジェクトを作成します。
ここでは、 react-video-sample という名前で作成

```sh
pnpm create react-app react-video-sample
```

VS Codeを起動。以降VS Code上にて操作します。
```sh
code .
```
以下、VS Codeでコードが生成されています。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/235774/0ca9c3fe-73d1-089f-7268-1580fb63bceb.png)

ターミナルにて以下コマンドを実行し、@triyanox/react-videoコンポーネントをインストール

```
cd react-video-sample
pnpm add @triyanox/react-video
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/235774/989ad7d6-f067-e562-039a-e5ab3cf6a86e.png)

```package.json``` にコンポーネントが追記されていることを確認
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/235774/64023653-fc74-cc01-5b79-bff904338f5b.png)

プロジェクト上に、任意のコンポーネントを作成します。
components/Page.jsを作成
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/235774/e74b2631-e654-7a7e-b8ae-f9b9d7c760fc.png)

Page.jsを以下コーディング

```react
import { Video } from "@triyanox/react-video";

export default function Page() {
  const videoProps = {
    src: [
      {
        src: "https://vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
        label: "SD",
      },
    ],
    title: "My Amazing Video",
    subtitle: "An insightful subtitle",
    onProgress: (currentTime) => console.log(`Current Time: ${currentTime}`),
    onDuration: (duration) => console.log(`Duration: ${duration}`),
    onEnded: () => console.log("Video Ended"),
    onPlay: () => console.log("Video Played"),
    onPause: () => console.log("Video Paused"),
    onLoad: () => console.log("Video Loaded"),
    onVolumeChange: (volume) => console.log(`Volume: ${volume}`),
    onPlaybackRateChange: (rate) => console.log(`Playback Rate: ${rate}`),
    className: "custom-video-class",
    autoPlay: true,
    loop: true,
    showControls: true,
    hideSliderThumb: false,
  };

  return <Video {...videoProps} />;
}

```

index.jsを以下修正

```react
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Page from "./components/Page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```
npm で起動

```sh
npm start
```

エラーが発生
```
[eslint] Plugin "react" was conflicted between "package.json » eslint-config-react-app » /home/user1/dev/react-video-sample/
webpack compiled with 1 error
```

npmとpnpm が共存している為のエラーと認識
node_modulesフォルダを一旦削除し、もう一度npm installを行なってみる

再度npm 起動

```
npm start
```

以下Videoコンポーネントが表示できる事を確認
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/235774/db2e7a1a-feb5-965f-887d-45b9c6b6a47d.png)

イベントに仕込んだ処理も実行できていることを確認
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/235774/2f5b25da-e786-0273-8506-2a1f13fa2b7f.png)


この様にreact-videoコンポーネントのオプションを指定してカスタマイズも可能となっていますので、手軽に実装出来ます。
オプションの詳細は[こちら](https://morioh.com/a/676b91cd94c8/react-customizable-video-player)を参照ください。


# 参考サイト
https://morioh.com/a/676b91cd94c8/react-customizable-video-player
https://terakoya.sejuku.net/question/detail/15054
