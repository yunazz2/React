const express = require('express');
const path = require('path');
const { sequelize } = require('./models');      // ✅ 시퀄라이즈

// dotenv 라이브러리를 사용하여 환경 변수를 로드하는 부분
// 이 메소드를 호출하면 프로젝트 루트에 위치한 .env 파일의 환경 변수가 process.env 객체에 추가됩니다.
// dotenv.config();

// 👩‍💻 라우터 모듈 import
const todoRouter = require('./routes/todo');

const app = express();

// 포트 설정: 환경 변수에서 PORT를 가져오고, 없을 경우 기본값으로 3000 사용
app.set('port', process.env.PORT || 3000);

// ✅ 시퀄라이즈 싱크
// - 데이터베이스 테이블 생성 또는 동기화
sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

// 뷰 엔진 설정: Pug를 사용하도록 설정
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');


// 정적 파일 제공 미들웨어 설정: public 폴더를 정적 파일 제공 디렉토리로 설정
app.use('/', express.static(path.join(__dirname, 'client/todo-app/build')));

// JSON 파싱 미들웨어 설정
// - JSON 형식의 요청 본문을 파싱
// - URL 인코딩된 요청 본문을 파싱
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cookie-parser 미들웨어를 사용하여 쿠키를 파싱하는 부분

// Express 애플리케이션에 세션 미들웨어 설정
app.use(session({
  resave: false,                            // 세션 데이터가 변경되지 않으면 서버에 다시 저장하지 않음
  saveUninitialized: false,                 // 초기화되지 않은 세션을 저장소에 저장하지 않음
}));


// 👩‍💻 라우터 설정
app.use('/', todoRouter);

// 404 오류 처리 미들웨어
app.use((req, res, next) => {
  // 요청된 경로가 존재하지 않을 때 404 상태 코드와 'Not Found' 메시지를 응답으로 전송
  res.status(404).send('Not Found');
});

// 에러 처리 미들웨어
app.use((err, req, res, next) => {
  // 에러가 발생했을 때, 에러 메시지를 콘솔에 출력하고 500 상태 코드와 에러 메시지를 응답으로 전송
  console.error(err);
  res.status(500).send(err.message);
});

// Express 애플리케이션을 특정 포트에서 실행하는 부분
app.listen(app.get('port'), () => {
  // 애플리케이션이 실행되면 콘솔에 해당 포트에서 대기 중임을 출력
  console.log(app.get('port'), '번 포트에서 대기 중');
});