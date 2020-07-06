function display(num) {
  document.getElementById("display").innerText += num;
}

function calculate() {
  let cal = document.getElementById("display").innerText;
  document.getElementById("history").innerText = cal;
  let calculated = eval(cal);
  document.getElementById("display").innerText = calculated;
}

function clearDisplay() {
  document.getElementById("display").innerText = "";
  document.getElementById("history").innerText = "";
}

function backspace() {
  let entry = document.getElementById("display").innerText;
  document.getElementById("display").innerText = entry.substr(
    0,
    entry.length - 1
  );
}

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 48:
      display(0);
      break;
    case 49:
      display(1);
      break;
    case 50:
      display(2);
      break;
    case 51:
      display(3);
      break;
    case 52:
      display(4);
      break;
    case 53:
      display(5);
      break;
    case 54:
      display(6);
      break;
    case 55:
      display(7);
      break;
    case 56:
      display(8);
      break;
    case 57:
      display(9);
      break;
  }
  switch (e.key) {
    case "Enter":
      calculate();
      break;
    case "=":
      calculate();
      break;
    case "+":
      display("+");
      break;
    case "-":
      display("-");
      break;
    case "x":
      display("*");
      break;
    case "*":
      display("*");
      break;
    case "/":
      display("/");
      break;
    case "Backspace":
      backspace();
      break;
  }
};

