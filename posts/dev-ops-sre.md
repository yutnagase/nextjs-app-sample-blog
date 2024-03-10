---
title: "DevOpsの理念SREの実践についてエンジニアはどう捉えるべきか"
date: "2020-01-02"
thumbnail: "/images/devops-sre.jpg"
---

# はじめに
SREはDevOsの実践するにあたっての技術と理解しているが、その目的や理解して置くべき事についてエンジニア目線で論じてみる

# DevOpsとは
- デブオプスと読む
- 従来、開発部門はリリースするまでを役割と考えがちであり、運用部門は運用・保守のみを役割と考えがちである
    - 開発部門はリリース後の事は目をつむり勝ちである
        - 継続的に開発を行い、リリースを適宜実施したい
        - 新機能・新サービスを迅速にリリースし競合他社に打ち勝ちたい
    - 運用部門はサービスを停止したくないので、何も手を入れたくない傾向がある
        - 可用性、信頼性を保持したい
        - 一度機能するシステムでは何も変更したくない
        - リリースは控えたい
- 上記のように、開発部門と運用部門は対立的関係が発生しうる
- この対立的関係を解消するためには「迅速なリリース」と「可用性、信頼性」を満たす仕組みが求められる
- DevOpsとは開発部門と運用部門の対立を解消し各部門の要求を満たす事を目的とした考えである

# SREとは
- Site Reliability Engineering(サイト信頼性エンジニアリング)の略
- GoogleのVice President Engineeringを務めるBenjamin Treynor Slossが2004年に提唱したと言われる
- サイトの信頼性を高める方法論を定義している
- これは、DevOpsの活動と仕組みを持続させる為の理念を定義しているものと言える

# DevOpsとSREの関係性
``` class SRE implements interface DevOps ```
- クラスSREはインターフェースDevOpsを実装する
- Google公式サイトでは、この様にプログラミングになぞらえて表現されている
    - DevOpsはインターフェースであり、そのインターフェースを実現したものがクラスSREとなります
- 一般的な表現をするとDevOpsは理念で有り、SREはそれを実践する手法

# SREの指標/用語

## SLI(サービスレベル指標)
- Service Level Indicatorの略
- ユーザーが期待するサービス品質を測定するための指標で、通常はパフォーマンスや可用性といった側面を評価します
    - 例: ページ遷移した際にコンテンツが表示されるまでの時間で、ユーザーが許容できる表示時間が2秒の場合、
    - 一定期間(1日)のうち、成功したイベント数と全イベント数の比率が99%の場合、SLIは99%となる
## SLO(サービスレベル目標)
- Service Level Objectiveの略
- SLIが一定の期間で達成される目標のことであり、サービス提供者がサービス品質を維持するために設定する目標値
    - 例: SLOを1年間90%と設定した場合、サービス提供者は1年間のSLIが90%以上であることを目指す場合
    - SLOはサービス品質を保つための最低要件とも言える
## SLA（サービスレベル契約）
- Service Level Agreementの略
- サービス提供者と利用者との間で合意される契約
- サービス水準合意、サービス品質保証の意味合いで表現される
- SLOを達成できなかった場合に、ユーザーへ補償を約束する法的な契約

## toil(トイル)
- 労苦の意味
- SREにおいては、手作業や繰り返して行う単純作業、本来自動化できる作業を指す

## エラーバジェット(エラー予算)
- 一定期間中にエラーが許容される範囲を定義する事
- 例: 開発部門が新機能などリリース時に、ユーザーが許容できるエラー(サービス停止等)の許容時間をエラー予算として確保する事
- 16時間/年 のエラー予算を確保した場合、16時間エラーを発生した時点で、その年は新機能リリースは難しくなる

# どのようにDevOps, SREを捉えるべきか
- SREの実践方法/指標として、テスト自動化、エラー予算、指標(SLO, SLA, SLI, toil)が有るが、初期から全て完全に導入するのは難しいのではないか
- [公式サイト](https://sre.google/workbook/how-sre-relates/)でも触れているが、本格的な進歩を遂げるためには、実際に作業を行っている人々の議論、管理サポート、賛同が必要だと考える
- DevOpsは概念であり、受け入れられやすいので、DevOpsの理解をチーム内に提唱する事から始めるのが良いのでは
- また全てのプロジェクトで完全にSREを全て導入する事が可能とは限らないので、部分的導入から進めるのが良いと思う
- 開発エンジニア、運用エンジニアのサイロ化の解消に活かす
- サイロ化を是とする無理解の打破、開発／運用エンジニア同士がリスペクト・許容しあえる文化に活用する
- システム/サービスのライフサイクルをメンバー全員が意識する事で成長につなげていく

# 参考サイト
https://sre.google/sre-book/table-of-contents/
https://www.youtube.com/watch?v=ZcZtU_TiFEM
https://www.pagerduty.co.jp/blog/what-is-sre/
https://engineering.visional.inc/blog/_240/class_sre_implements_devops/
https://sreake.com/blog/sre-vs-devops/