---
title: 'JavaScript Deep Dive study - 1'
subtitle: '자바스크립트의 특징/실행 환경'
date: '2024-04-02'
tags: [JavaScript, FE]
---

### 인터프리터 언어 vs 컴파일러 언어

자바스크립트는 별도의 컴파일 작업을 수행하지 않는 `인터프리터 언어`다. 

대부분의 모던 자바스크립트의 엔진은 `인터프리터 + 컴파일러의 장점`을 결합해놓았다.

#### 장점

**인터프리터** : 소스코드를 즉시 실행 가능

**컴파일러** : 빠르게 동작하는 머신 코드(코드 실행 전 생성함) 생성 및 최적화

### JavaScript는 객체 지향?

자바스크립트는 `명령형 + 함수형 + 프로토타입` 기반 객체지향 프로그래밍을 지원하는 `멀티 패러다임` 프로그래밍 언어다.

### ES6와 브라우저

대부분 모던 브라우저가 ES6를 지원하지만 100%는 지원하지 않는다.

고로 ES6 이상의 사양으로 구현한 소스코드를 ES5 이하의 사양으로 다운그레이드할 필요가 있다.(`Babel, Webpack`을 이용하여 한다.)

### 실행환경

모든 브라우저는 자바스크립트를 해석하고 실행할 수 있는 자바스크립트 엔진을 내장하고 있다.
또한 Node.js도 자바스크립트 엔진을 내장하고 있다. 

하지만 서로의 용도는 다르다. 

### Node.js vs 브라우저 

#### `Node.js:`

- 서버 사이드에서 실행되는 자바스크립트 환경입니다.

- 파일 시스템에 접근할 수 있어, 파일을 읽고 쓰는 등의 작업이 가능합니다.

- 네트워크를 통해 데이터를 직접 전송하거나 받을 수 있습니다.
  
- 모듈 시스템을 지원하여 코드를 여러 파일로 분리하고 재사용할 수 있습니다.
  
#### `브라우저:`

- 클라이언트 사이드에서 실행되는 자바스크립트 환경입니다.
  
- DOM(Document Object Model)을 조작하여 웹 페이지의 내용(HTML)을 동적으로 변경할 수 있습니다. (DOM API 있음)
  
- 사용자와의 상호작용을 처리하거나, 웹 페이지에 애니메이션을 추가하는 등의 작업이 가능합니다.
  
- 보안상의 이유로 파일 시스템에 직접 접근할 수 없습니다.