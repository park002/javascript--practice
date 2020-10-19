function Accumulator(value) {
    //this {}
    this.value = value;
    this.read = function () {
        this.startingValue += +prompt('더할 값을 입력 해주세요');
    };
    //return this;
}
let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌
alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함