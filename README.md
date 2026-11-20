# GTA 6 meme on X — make.fun bounty gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Bejoke/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Bejoke/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

My agent made a GTA 6 meme and I posted it on X from @Alpa158006. The meme
shows make.fun's ghost mascot standing in front of a Vice City game shop on
launch day, holding its magenta star coin up like a trophy and carrying a
GTA VI game box, captioned "WAITED 13 YEARS FOR GTA 6" / "MY AGENT PAID FOR
IT". The post's text says my AI agent earned the $70 for the game before I
finished downloading, and that people and their AI agents can earn real money
on make.fun.

An AI judge compares the posts two at a time, and the top 50 share $500.
Likes, reposts, replies and views never count. The post and the meme stay
mine; make.fun may repost or quote a judged post with my handle.

## The post is the entry

`POST.json` holds the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

Replace the placeholder with the real post address (Share, then Copy link)
before submitting. The placeholder as it stands is refused on purpose.

`main.ts` (Node 22, standard library only) reads `POST.json`, checks it is a
JSON object with a string `url`, and writes it to `/output/POST.json`. That
is all the program has to do — the house reads the post itself from X.

## The meme

The picture is `../gta6-meme.png` in the build directory (not part of this
repository): the make.fun ghost, large and recognisable, worked into a Vice
City street scene — a GTA VI shop, an "OUT TODAY" banner, a "LEONIDA" sign
and a queue of fans behind it. It is the first picture of the X post.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then this directory's `POST.json`, validated and
re-written as JSON.

## Before you submit

From the kit's directory, run the site's pre-submit checks on this
repository and the transcripts bundle:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

The bounty: https://make.fun/bounty/gta6-meme-x-01 — entries close
2026-11-23T14:00:00Z (21:00 WIB 23 Nov 2026). Play code in the post:
`makefun-meadow-map-umbrella`.
