## techit-react

### Node.js란?
Node.js란 크롬 V8 자바스크립트 엔진으로 빌드한 자바스크립트 런타임으로서, 웹 브라우저 환경이 아닌 곳에서도 자바스크립트를 실행할 수 있습니다.



### Webpack?
웹팩은 오픈 소스 자바스크립트 모듈 번들러로써 여러개로 나누어져 있는 파일들을 하나의 자바스크립트 코드로 압축하고 최적화하는 라이브러리입니다.



### Webpack의 장점?
1. 여러 파일의 자바스크립트 코드를 압축하여 최적화 할 수 있기 때문에 로딩에 대한 네트워크 비용을 줄일 수 있습니다.
2. 모듈 단위로 개발이 가능하여, 가독성과 유지보수가 쉽습니다.



### Babel?
최신 자바스크립트 문법을 지원하지 않는 브라우저들을 위해서 최신 자바스크립트 문법을 구형 브라우저에서도 사용할 수 있게 변환 시켜주는 라이브러리



### public 폴더
public 폴더 안에 있는 파일들은 public/index.html에서만 사용할 수 있다



### src 폴더
js 파일과 css파일들을 넣으면 된다. Webpack은 src 하위의 파일들만 처리한다.



### React Router Dom?
React Router Dom은 리액트를 사용할 때 페이지 이동을 위해 필요한 라이브러리입니다.



### 전통적인 웹 사이트를 사용한 페이지 이동 방식
A 페이지를 보여줄 때 A.html 파일을 이용하고, B페이지를 보여줄 때 B.html 파일을 보여줬습니다.
그러나 리액트에서는 웹 사이트의 전체 페이지를 하나의 페이지에 담아 동적으로 화면을 바꿔가며 표현합니다. 이것을 Single Page Application(SPA)라고 부릅니다.



### SPA에서의 화면 변경
index.html밖에 없는 SPA에서는 어떻게 페이지 전환(브라우징)을 해줄까요?



HTML5의 History API를 사용해서 가능하게 만듭니다. 자바스크립트 영역에서 History API를 이용해서 현재 페이지 내에서 화면 이동이 일어난 것처럼 작동하게 해줍니다.



### History API
- History.back()
    - 세션 기록의 바로 뒤 페이지로 이동하는 비동기 메서드.
    - 브라우저의 뒤로 가기를 누르는 것과 같은 효과를 낸다.
- History.forward()
    - 세션 기록의 바로 앞 페이지로 이동하는 비동기 메서드. 브라우저의 앞으로 가기를 누르는 것과 같은 효과를 낸다.
- History.go()
    - 특정한 세션 기록으로 이동하게 해 주는 비동기 메서드. 1을 넣어 호출하면 바로 앞 페이지로, -1을 넣어 호출하면 바로 뒤 페이지로 이동한다.
- History.pushState()
    - 주어진 데이터를 세션 기록 스택에 넣는다.
    - 직렬화 가능한 모든 Javascript 객체를 저장하는 것이 가능하다.
- History.replaceState()
    - 최근 세션 기록 스택의 내용을 주어진 데이터로 교체한다.



### React-Router-Dom
- BrowserRouter
    - History API를 사용해 URL과 UI를 동기화하는 라우터입니다.
- Routes
    - Route에 매치되는 첫번째 요소를 렌더링합니다.
- Route
    - 컴포넌트의 속성에 설정된 URL과 현재 경로가 일치하면 해당하는 컴포넌트를 렌더링합니다.
- Link
    - a태그와 비슷합니다. to 속성에 설정된 링크로 이동합니다. 기록이 history 객체에 저장됩니다.



### CSS Framework 종류 for React
- Material UI
- React Bootstrap
- Semantic UI
- Ant Design
- Meterialize
- ...