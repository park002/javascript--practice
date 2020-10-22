//이상한 api 로 응답받은 데이터가 있다고 가정하고  그 데이터를 array 로 만들어야 하는 상황이라면 그떄 쓰자
//병맛같은 array 를 조작할 경우!
const days = () => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sund'];
const [a, b, c] = days();
console.log(a);
