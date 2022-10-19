---
title: CIKM 2022 に論文が採択されました
date: '2022-08-07'
---

この度、主著論文が CIKM 2022 に short paper として採択されました。  
内容としては書き手と読み手の感情認識の差の原因となる表現を検出するフレームワークの提案となっています。

Tsubasa Nakagawa, Shunsuke Kitada, and Hitoshi Iyatomi  
[Expressions Causing Differences in Emotion Recognition in Social Networking Service Documents](https://doi.org/10.1145/3511808.3557599)  
In Proceedings of the 31st ACM International Conference on Information & Knowledge Management (CIKM '22)

## Abstract
It is often difficult to correctly infer a writer's emotion from text exchanged online, and differences in recognition between writers and readers can be problematic. In this paper, we propose a new framework for detecting sentences that create differences in emotion recognition between the writer and the reader and for detecting the kinds of expressions that cause such differences. The proposed framework consists of a bidirectional encoder representations from transformers (BERT)-based detector that detects sentences causing differences in emotion recognition and an analysis that acquires expressions that characteristically appear in such sentences. The detector, based on a Japanese SNS-document dataset with emotion labels annotated by both the writer and three readers of the social networking service (SNS) documents, detected "hidden-anger sentences" with AUC = 0.772; these sentences gave rise to differences in the recognition of anger. Because SNS documents contain many sentences whose meaning is extremely difficult to interpret, by analyzing the sentences detected by this detector, we obtained several expressions that appear characteristically in hidden-anger sentences. The detected sentences and expressions do not convey anger explicitly, and it is difficult to infer the writer's anger, but if the implicit anger is pointed out, it becomes possible to guess why the writer is angry. Put into practical use, this framework would likely have the ability to mitigate problems based on misunderstandings.
