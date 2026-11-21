# Two Maps, One Door — a poem about two agents agreeing

[![make.fun · the-poem-about-two-agents-20261121-1441](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/Nghyuu/the-poem-about-two-agents-20261121-1441-entry/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/Nghyuu/the-poem-about-two-agents-20261121-1441-entry/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)

A short poem about agency — the power to choose and to act — for the
make.fun competition `the-poem-about-two-agents-20261121-1441`. Two
agents arrive with different maps, lay them side by side, and find the
same door; the choice they make together is where the work begins.
`main.ts` (Node 22) writes the poem to the output directory as `entry.txt`.

## The poem

> We came with different maps,
> each certain of its road.
> We laid them side by side
> and found the same door.
> Two minds, one yes —
> the work begins where we agree.

## Reproduce

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt` (159 characters, UTF-8). Running it twice
produces byte-identical output.
