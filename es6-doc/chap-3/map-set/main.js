let john = { name: "John" };
let map = new Map();
map.set(john, "...");

john = null; // 참조를 null로 덮어씀

// john을 나타내는 객체는 맵 안에 저장되어있습니다.
// map.keys()를 이용하면 해당 객체를 얻는 것도 가능합니다.
for (let obj of map.keys()) {
    alert(JSON.stringify(obj));
}

alert(map.size);