### **chpater3 : this**
  * 자바스크립트에서 this는 실행 컨텍스트가 생성될 때 함께 결정 -> 함수를 호출할 때 결정
    * 전역공간에서의 this는 전역객체 ( 브라우저 : window, Node. js: global) 참조
    * 어떤 함수를 메서드로서 호출한 경우 this는 메서드 호출 주체(메서드명 앞의 객체) 참조
    * 어떤 함수를 함수로서 호출한 경우 this는 전역객체 참조 - 내부함수에서도 같다
    * 콜백 함수 내부에서의 this는 해당 콜백 함수의 제어권을 넘겨받은 함수가 정의한 바에 따르며, 정의하지 않은 경우 전역객체를 참조
    * 생성자 함수에서의 this는 생성될 instance를 참조
    * call.apply : this 를 명시적 지정하며 함수 또는 메서드를 호출
    * bind 메서드는 this 및 함수에 넘길 인수를 일부 지정해 새로운 함수를 만든다.
    * 콜백 함수 반복 호출하는 내용의 일부 메서드는 별도의 인자로 this를 받는다.
