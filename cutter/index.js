let str = prompt("sozni kiriting");
let son = +prompt("sonni kiriting");

function kesuvchi(str, son) {
  return str.substring(son);
}

console.log(kesuvchi(str, son));
