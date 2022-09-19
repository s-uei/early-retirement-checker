import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Container from "../components/Container";
import { marked } from "marked";

const articleHtml = marked.parse(`
**実は新規大卒就職者の3年以内離職率は3割を超えています**。

[新規学卒就職者の離職状況を公表します - 厚生労働省](https://www.mhlw.go.jp/stf/houdou/0000177553_00004.html)

私は3割という数字を非常に大きなものに感じました。
クラスに**80人**の学生がいるとすれば、その内**24人**は3年以内に職を変えていることになります。

3年以内離職率は昔からこんなに高かったのでしょうか？

![大卒者の3年以内離職率の推移](/img/retire_timeline.png)

大卒者の3年以内離職率の推移**を見てみると、平成7年以降ではほぼ3割以上をキープしています。

平成21年のみ3割を下回っています。実は平成21年は**リーマンショック**の影響が大きく景気に現れた年でした。
社会情勢への不安から離職を躊躇した人が多かったのかもしれません。**新型コロナ**による影響も同様に見られて今年は久しぶりに低下したみたいです。

反対に離職率が36.5と2番目に高い値になっている平成12年は、いわゆる**就職氷河期**でした。大卒者の有効求人倍率が初めて1を下回った年でもあります。

このように見ると単に離職といっても色々あるので**離職率が高い低いによって一喜一憂する必要はありません**。

自分の就職先の離職状況を知り、３年以内離職というリスクに対して**リスクマネジメント**を行うことが大切だと思います。
`);

function ColumnPage() {
  return (
    <>
      <Head>
        <title>コラム</title>
      </Head>
      <Hero>
        <h1 className="text-xl">新規大卒就職者の3年以内離職率は約3割？</h1>
        <span>2022-09-19</span>
      </Hero>
      <Container>
        <article
          className="markdown py-8"
          dangerouslySetInnerHTML={{ __html: articleHtml }}
        ></article>
      </Container>
    </>
  );
}

export default ColumnPage;
