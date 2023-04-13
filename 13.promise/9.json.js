// JSON: JavaScript Object Notificatio
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stringify(object) : JSON
// parse(JSON):object

const sunny = {
  name: '수연',
  age: 20,
  eat: () => {
    console.log(eat);
  },
};

//직렬화 Serializing : 객체를 문자열로 변환
const json = JSON.stringify(sunny);
console.log(sunny);
console.log(json);

// 역직렬화 Deserializing : 문자열 데이트를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj);
