---
title: '자바스크립트는 클래스 기반 객체지향 언어일까'
subtitle: 'JavaScript는 초기에는 클래스 기반 객체지향 언어가 아니었고, 프로토타입 기반 객체지향 언어로 시작했습니다. 
그러나 ECMAScript 2015(ES6)부터 JavaScript에 클래스(class) 문법이 도입되었습니다.'
date: '2023-12-22'
tags: ['JavaScript', 'FE']
---

<span class="blogLink">[클래스 기반 객체지향 언어와 프로토타입 기반 객체지향 언어(기본 개념 및 차이점)](differences_btw_class_oop_prototype_oop)</span>

JavaScript는 초기에는 클래스 기반 객체지향 언어가 아니었고, 프로토타입 기반 객체지향 언어로 시작했습니다. 
그러나 ECMAScript 2015(ES6)부터 JavaScript에 클래스(class) 문법이 도입되었습니다. 이 클래스 문법은 프로토타입 기반 언어에서 클래스와 비슷한 구문을 사용할 수 있도록 만든 것이지만, 여전히 JavaScript의 내부 메커니즘은 프로토타입 기반으로 유지됩니다.

JavaScript의 class 문법을 사용하면 객체 지향적인 코드를 작성할 수 있지만, 이 클래스는 사실 함수로 구현된 것이며, JavaScript의 프로토타입 기반 시스템 위에 구축되었습니다. 클래스 문법을 사용하더라도 JavaScript는 프로토타입을 사용하여 상속 및 객체 생성을 처리합니다. 클래스의 인스턴스를 만들 때 내부적으로 프로토타입 체인을 사용하여 메소드 및 프로퍼티를 상속하게 됩니다.

즉, JavaScript는 클래스 문법을 제공하지만, 그 내부적인 구조는 여전히 프로토타입 기반입니다. 그래서 JavaScript를 "클래스 기반" 언어라고 보는 사람과 "프로토타입 기반" 언어라고 보는 사람 사이에 혼란이 있을 수 있습니다. 이것은 JavaScript의 유연성과 독특한 특성 중 하나로 볼 수 있습니다.


