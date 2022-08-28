# Javascript 정리

### **chapter1 : 데이터 타입**
  * 데이터에 관한 장으로, 자바스크리브가 데이터를 처리하는 과정을 살펴볼 수 있다. 
  * 변수 선언
  ````javascript
  var obj1 = {
      a: 1,
      b: 'bbb'
  };
  obj1.a = 2;
  ````
  * 실행결과
  ````javascript
  a:2. b: 'bbb'
  ````
  변수를 선언하면, 컴퓨터는 메모리의 빈 공간에 식별자를 저장하고, 자동으로 undefined를 할당한다. 이후 그 변수에 기본형 데이터를 할당하려 하면 별도의 공간에 데이터를 저장하     고, 그 공간의 주소를 변수의 값 영역에 할당한다. 
  
### **chapter2 : 실행 컨텍스트**
  * 실행 컨텍스트 : 실행할 코드에 제공할 환경 정보들을 모아놓은 객체
  * 예제
    
    ````javvascript
    var a = 1;
    function outer(){
     function inner(){
      console.log(a); // undefined
      var a = 3;
     }
     inner();
     console.log(a); // 1
    }
    outer();
    console.log(a); //1
    ````
    
  * 전역변수 : 전역 스코프에서 선언한 변수 -> 전역 공간에서 선언한 변수
  * 지역변수 : 함수 내부에서 선언한 변수
  
### **chpater3 : this**
  * 자바스크립트에서 this는 실행 컨텍스트가 생성될 때 함께 결정된다. -> 함수를 호출할 때 결정된다.
    * 전역공간에서의 this는 전역객체 ( 브라우저 : window, Node. js: global) 참조
    * 어떤 함수를 메서드로서 호출한 경우 this는 메서드 호출 주체(메서드명 앞의 객체) 참조
    * 어떤 함수를 함수로서 호출한 경우 this는 전역객체 참조 - 내부함수에서도 같다
    * 콜백 함수 내부에서의 this는 해당 콜백 함수의 제어권을 넘겨받은 함수가 정의한 바에 따르며, 정의하지 않은 경우 전역객체를 참조한다.
    * 생성자 함수에서의 this는 생성될 instance를 참조한다.
    * call.apply : this 를 명시적 지정하며 함수 또는 메서드를 호출한다.
    * bind 메서드는 this 및 함수에 넘길 인수를 일부 지정해 새로운 함수를 만든다.
    * 콜백 함수 반복 호출하는 내용의 일부 메서드는 별도의 인자로 this를 받는다.
  
### **chapter4 : 콜백 함수**
  * callback function은 다른 코드의 인자로 넘겨주는 함수 
    * 인자로 넘겨줌으로써 제어권도 그 제어권도 함께 위임
    * 제어권을 넘겨받은 코드가 가지는 제어권
      * 콜백 함수를 호출하는 시점 판단
      * 콜백 함수의 this가 바라보는 곳 정해짐 -> 그렇지 않은 경우 전역객체를 바라봄 /  사용자 임의로 this를 변경하고 싶은 경우 bind 메서드 활용
    
### **chapter5 : 클로저**
  * 클로저 : 어떤 함수에서 선언한 변수를 참조하는 내부함수를 외부로 전달할 때, 함수의 실행 컨텍스트가 종료된 후에도 해당 변수가 사라지지 않는 현상
  
### **chapter6 : 프로토타입**
  * 생성자 함수를 new 연산자와 함게 호출하면 Constructor에서 정의된 내용을 바탕으로 새로운 instance 생성   
    이 isntance에는 --proto--라는 Constructor의 prototype 프로퍼티를 참조하는 프로퍼티가 자동으로 부여   
    --proto--는 생략 가능한 속성, 따라서 instance는 Constructor.prototype의 메서드를 자신의 메서드처럼 호출 가능.
  ![img](https://user-images.githubusercontent.com/111478153/187056262-4439f4fc-570f-42c7-a9bc-649f52db0ff7.png)
  
### **chapter7 : 클래스** 
  * 클래스는 어떤 사물의 공통 속성을 모아 정의한 추상적인 개념.
    인스턴스는 클래스의 속성을 지니는 구체적인 사례
  * 클래스를 흉내내는 방법
    * SubClass.prototype에 SuperClass이 인스턴스 할당 -> 프로퍼티 모두 삭제
    * 빈 함수(Bridge)를 활용
    * Object.create를 이용
  * 세 방법 모두 Constructor 프로퍼티가 원래의 생성자 함수를 바라보도록 조정해야 한다.
 
