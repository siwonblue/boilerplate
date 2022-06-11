# 패키지 설치

```bash
$npm i express morgan sequelize sequelize-cli mysql2 
$npm i nodemon -D
```

- express : 서버
- morgan : 메타 데이터 알려줌
- sequelize : ORM
- sequelize-cli : ORM 명령어 사용
- mysql2 : mysql 드라이버
- nodemon : 서버 자동 재실행

# sequelize 프로젝트 시작

```bash
$npx sequelize init
```
명령어 치고 나면 자동으로 파일 생성

├── config  
├── migrations  
├── models  
├── seeders  
├── app.js  


config : json 파일  => js 로 바꾸고 환경 변수 사용  
models : 모델 연결 설정


## models 파일 설정

- models 설정하고 index에서 다 모은 다음에 express 서버로 넘겨주는 과정
- models/index.js
- models/[modelName.js]

## 모델 생성

```bash
$npx sequelize db:create

Sequelize CLI [Node: 16.13.1, CLI: 6.4.1, ORM: 6.20.1]

Loaded configuration file "config/config.json".
Using environment "development".
Database database_development created.
```


## app.js 연결

```js
// sequelize 연결하는 코드
sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });
```

## 실행

```bash
$node app.js

3065 번 포트에서 대기 중
Executing (default): SELECT 1+1 AS result
데이터베이스 연결 성공
```



# 모델 설정

자세한 설명
https://sequelize.org/docs/v6/core-concepts/model-basics/

기본꼴은 다음과 같음
- init({},{}) 두 개의 객체에
컬럼 정의하고 옵션 넣어주면 됨
- static associate(db) 은 참조하는 모델 설정

```js
const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
    { }, { }
      );
  }

  static associate(db) {
   
  }
};
```