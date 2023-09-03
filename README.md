간편 기능 모듈
======================

> 제작자가 일일이 하기 귀찮아서 만든 모듈.

> 대충 만들었으니 쓸 사람만 쓰셈

> # 기본 설정

기본 코드를 작성해봅시다.

#### tools.js 는 ./msgbot/global_modules/ 에

```javascript
const tools = require('tools');
```

> #  사용 방법

```javascript
tools.id52(6);

//6개의 길이의 랜덤 아이디 생성

tools.jead('game/data.json');

//sdcard 는 기본 root 위치 처리

//또한 JSON.parse() 가 되어 불러옴

tools.jrite('game/data.json', data);

//sdcard 는 기본 root 위치 처리

//또한 JSON.stringify() 가 되어 저장함

tools.rank('game/user/', 50, '원', 'join', 'money', 'bank', 'coinv');

//sdcard 는 기본 root 위치 처리

//sdcard/game/user/ 위치에 있는 모든 파일을 불러옴
//50위까지 score 가 높은 순서대로 정렬
//score 표시 단위는 원
//유저 파일 저장은 작동할때마다 되게 해야됨
//유저 데이터에 name 이라는 함수에 이름 저장 필요
//가입 했는지 확인을 join 으로 하며 만약 가입해야만 데이터 파일이 저장되면 그냥 join 값을 0이 아닌걸로 저장시키면 됨
//score 를 유저 데이터의 money 와 bank, coinv 값의 합산으로 함. 구지 3개 다 쓸 필요는 없고 아래와 같이 해도 됨

tools.rank('game/user/', 50, '원', 'join', 'money', 'bank');

//혹은

tools.rank('game/user/', 50, '원', 'join', 'money');

//return 되어 나오는 값은 아래와 같음

/*
1위 테스트 : 10원

2위 테스트용 : 9원

3위 테스트용 계 : 8원

4위 테스트용 계정 : 7원

*/

// 이렇게 값이 나온 이유는 테스트용 유저 파일이 4개만 있어서

tools.random(15);

//작동 시 15% 로 true 가 나오며 아니면 false 를 송출

tools.rv();

//0.000000000000001 ~ 100 까지 랜덤하게 송출함

```
