---
title: '추상클래스 & 인터페이스'
date: '2023-12-23'
tags: ['Java', 'BE']
---

`추상화를 오버라이드한다`는 것은 `추상 클래스나 인터페이스에 선언된 추상 메소드에 대해 구체적인 구현을 제공`하는 것을 의미합니다. 이 과정은 객체 지향 프로그래밍에서 중요한 부분 중 하나입니다.

### 추상 클래스와 인터페이스

- **추상 클래스**: 하나 이상의 추상 메소드(구현이 정의되지 않은 메소드)를 포함할 수 있는 클래스입니다. 추상 클래스는 인스턴스화될 수 없으며, 추상 클래스를 상속받는 하위 클래스는 모든 추상 메소드를 구현해야 합니다.
    
- **인터페이스**: 모든 메소드가 추상 메소드인 특수한 유형의 클래스입니다. 인터페이스는 메소드의 시그니처만을 정의하며, 이를 구현하는 클래스에서 구체적인 로직을 제공합니다.
    

### 오버라이딩(Overriding)

오버라이딩은 하위 클래스 또는 인터페이스를 구현하는 클래스에서 상위 클래스 또는 인터페이스의 메소드를 재정의하는 과정입니다. 오버라이드된 메소드는 상위 클래스 또는 인터페이스의 메소드 시그니처를 그대로 사용하지만, 내부 로직을 하위 클래스에 맞게 변경합니다.

### `@Override` 어노테이션

- Java와 같은 언어에서 `@Override` 어노테이션은 메소드가 상위 클래스의 메소드를 오버라이딩한다는 것을 명시적으로 나타냅니다.
- 이 어노테이션은 컴파일러에게 오버라이딩의 의도를 알려줍니다. 만약 상위 클래스에서 해당 메소드가 존재하지 않거나 시그니처가 일치하지 않으면, 컴파일러가 오류를 발생시킵니다.
- `@Override` 어노테이션은 오류를 방지하고 코드의 명확성을 향상시키는 데 도움을 줍니다.

### 예시

Java에서 추상 클래스와 오버라이딩의 예시는 다음과 같습니다:

```Java
abstract class Animal {
    abstract void makeSound();
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Bark");
    }
}
```


이 예제에서 `Animal`은 추상 클래스이며, `makeSound`는 추상 메소드입니다. `Dog` 클래스는 `Animal`을 상속받고 `makeSound` 메소드를 오버라이딩하여 구체적인 구현을 제공합니다.