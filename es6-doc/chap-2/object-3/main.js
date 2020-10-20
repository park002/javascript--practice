let user = { // 서드파티 코드에서 가져온 객체
    name: "John"
};
let id = Symbol("id");
user[id] = 1;
alert(user[id]); // 심볼을 키로 사용해 데이터에 접근할 수 있습니다.
user['id']=12312123132;
console.log(user);