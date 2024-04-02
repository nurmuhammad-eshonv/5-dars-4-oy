let a = +prompt("1-sonni kiriting");
let b = +prompt("2-sonni kiriting");
let misol = prompt("+,-,*,/ dan birini kiriting");


function result(a, b, misol) {
  switch (misol) {
    case "+":
      alert(`${a} + ${b} = ${a + b}`);
      break;
    case "-":
      alert(`${a} - ${b} = ${a - b}`);
      break;
    case "*":
      alert(`${a} * ${b} = ${a * b}`);
      break;
    case "/":
      alert(`${a} / ${b} = ${a / b}`);
      break;
    default:
      alert("qaytaddan kiriting");
  }
}
result(a, b, misol);

