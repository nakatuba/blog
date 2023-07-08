---
title: Next.js で Markdown ブログを作った
date: '2022-08-06'
---

Markdown で記事を書けるブログを作ってみました。

Gatsby を使った方が簡単にできそうだったのですが、ある程度自分で作った方が後からカスタムしやすいかなと思い、今回は Next.js を使用しました。

ソースコードは[こちら](https://github.com/nakatuba/blog)

使用したライブラリは主に

- [gray-matter](https://github.com/jonschlinkert/gray-matter)
  - ファイルの先頭に書いたメタ情報（front matter というらしい）を解析してくれる

```
---
title: Next.js で Markdown ブログを作った
date: '2022-08-06'
---
```

- [react-markdown](https://github.com/remarkjs/react-markdown)
  - Markdown を HTML の要素に変換してくれる
- [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
  - コードを載せたときにシンタックスハイライトしてくれる
- [Chakra UI](https://github.com/chakra-ui/chakra-ui)
  - 豊富なコンポーネントを提供してくれる UI ライブラリ
- [chakra-ui-markdown-renderer](https://github.com/mustaphaturhan/chakra-ui-markdown-renderer)
  - Markdown から変換された HTML の要素を Chakra UI のコンポーネントに変換してくれる

## 今後

インターンに参加した感想や研究のこと、技術的なメモを残していければいいなと思っています。
