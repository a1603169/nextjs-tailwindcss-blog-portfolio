---
title: 'RxJS 기초개념 및 Angular에서의 RxJS란'
subtitle: 'RxJS (Reactive Extensions for JavaScript)는 비동기 및 이벤트 기반 프로그래밍을 위한 JavaScript 라이브러리입니다. RxJS는 데이터 스트림과 변화를 관리하는 강력한 방법을 제공하며, 특히 복잡한 비동기 코드를 쉽게 구성하고, 다룰 수 있도록 도와줍니다.'
date: '2023-12-22'
tags: ['JavaScript', 'Angular','FE']
---

RxJS (Reactive Extensions for JavaScript)는 비동기 및 이벤트 기반 프로그래밍을 위한 JavaScript 라이브러리입니다. RxJS는 데이터 스트림과 변화를 관리하는 강력한 방법을 제공하며, 특히 복잡한 비동기 코드를 쉽게 구성하고, 다룰 수 있도록 도와줍니다.


### RxJS의 핵심 개념

1. **Observable**: 데이터의 스트림을 나타냅니다. Observable은 시간이 지남에 따라 여러 값을 방출할 수 있습니다.

2. **Observer**: Observable에서 전달되는 값들을 수신하는 역할을 합니다. `next`, `error`, `complete`와 같은 메서드를 가지고 있습니다.

3. **Subscription**: Observable을 구독하고, 데이터 스트림을 받기 시작합니다. 또한 구독을 취소하여 데이터 스트림의 수신을 중단할 수 있습니다.

4. **Operators**: 데이터 스트림을 변환하거나 조작하는 순수 함수입니다. `map`, `filter`, `concat`, `merge` 등과 같은 다양한 연산자를 제공합니다.

5. **Subject**: 여러 Observer에게 동시에 데이터를 방송할 수 있는 특별한 형태의 Observable입니다.

### RxJS의 사용 사례

- **비동기 이벤트 처리**: 사용자 입력, HTTP 요청, 웹소켓과 같은 비동기 이벤트를 처리합니다.
- **타임라인 기반의 데이터 스트림**: 시간에 따라 변화하는 데이터를 다루는 경우 (예: 주식 가격, 게임의 상태).
- **복잡한 데이터 변환 및 조합**: 여러 데이터 소스를 결합하거나, 변환하는 복잡한 로직을 구현할 때 사용합니다.
- **상태 관리**: 여러 컴포넌트나 서비스 간의 상태를 관리하는 데 유용합니다.

### Angular에서의 RxJS

Angular는 RxJS를 광범위하게 사용합니다. 특히, HTTP 클라이언트 라이브러리에서 HTTP 응답을 Observable로 반환하고, 컴포넌트와 서비스 간의 상호작용을 위해 Subject와 BehaviorSubject를 사용합니다.

RxJS는 복잡한 비동기 작업을 쉽게 처리할 수 있게 해주지만, 그 사용법을 익히고 이해하는 데 시간이 필요할 수 있습니다. 그러나 일단 익숙해지면, 애플리케이션의 데이터 흐름을 더 효율적으로 관리할 수 있게 됩니다.