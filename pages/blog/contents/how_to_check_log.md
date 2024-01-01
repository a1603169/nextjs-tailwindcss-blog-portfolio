---
title: '깃 로그 확인하는 법'
subtitle: '파일 하나의 변경 이력을 한번에 확인해야 할 때가 가끔 있다. 물론 GUI 도구들이 워낙 잘 되어 있어서 쉽게 파악이 가능한 부분이지만 콘솔에서 필요할 때 다음의 명령어를 활용할 수 있다.'
date: '2023-12-24'
tags: [General, Git]
---


<span class="blogLink">[git log -p 파일 하나의 변경 이력을 한번에 보기](https://edykim.com/ko/post/git-log-p-view-a-single-change-history-of-a-file/)</span>

이것을 참조하였습니다. 최근에 프로젝트에서 코드 한 줄이 없어갖고, 일주일동안 정신없이 파일별 코드 내역을 뒤져 보았던 경험이 있네요.

파일 하나의 변경 이력을 한번에 확인해야 할 때가 가끔 있다. 물론 GUI 도구들이 워낙 잘 되어 있어서 쉽게 파악이 가능한 부분이지만 콘솔에서 필요할 때 다음의 명령어를 활용할 수 있다.

`git log`는 다양한 기능을 가지고 있는데 단순히 커밋 로그만 보여주는 것 외에도 포맷을 달리 하거나 diff를 같이 보여준다거나 하는 기능이 있다. 여기서는 단일 파일을 확인하는 방법을 위주로 살펴보려 한다.

다음 명령어는 해당 파일이 커밋된 기록을 한번에 확인할 수 있다.

### 특정 파일의 모든 커밋된 기록 확인

```bash
$ git log <filename>
```

이 목록을 diff의 결과처럼 라인별 변경 사항을 확인하고 싶다면 `-p` 플래그를 사용할 수 있다.

### 라인별 변경 사항 확인법

```bash
$ git log -p <filename>
```

내용이 너무 많으면 `-<숫자>` 플래그로 출력 수를 정할 수 있다.

### 출력 수 조절법

```bash
$ git log -p -5 <filename>
```

특정 키워드의 변경을 확인하고 싶다면 `grep`을 활용할 수 있다. `grep`은 `\|`를 넣어 OR 색인이 가능하다. 다음은 2011070102 라는 텍스트와 함께 커밋 해시, 커밋한 사용자, 일자를 출력하는 예다.

### 특정 키워드의 변경 법

```bash
$ git log -p <filename> | grep '2011070102\|commit \|Author:\|Date:'
```

1.7.2 이후에서는 `--word-diff`라는 플래그가 추가되었는데 플래그 이름처럼 행마다의 diff가 아니라 **단어 기준의 diff를 출력**해준다. (문서를 리포지터리에서 관리한다면 정말 유용하다.) 물론 `git diff`에서도 사용 가능한 플래그다.

```bash
$ git log -p --word-diff <filename>
```