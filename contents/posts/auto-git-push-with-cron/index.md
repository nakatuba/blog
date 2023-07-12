---
title: cron で 1 時間ごとに自動で git push する
date: '2023-05-13'
---

現在の設定を確認

```shell
crontab -l
```

現在の設定を削除

```shell
crontab -r
```

現在の設定を編集

```shell
crontab -e
```

1 時間ごとに自動で git push する

```
0 * * * * export LANG=ja_JP.UTF-8 && git add -A && git diff --staged --quiet || (git commit -m "$(date +"%Y-%m-%d %H:%M:%S")" && git push) >/dev/null 2>&1
```

### 参考

- https://www.server-memo.net/tips/crontab.html
- https://orebibou.com/ja/home/201412/20141225_001/
- https://superuser.com/questions/564829/git-push-to-github-via-cron-on-mac
- https://www.cyberciti.biz/faq/disable-the-mail-alert-by-crontab-command/
