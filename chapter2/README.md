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

