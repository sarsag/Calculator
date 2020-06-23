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
 document.getElementById("display").innerText = entry.substr(0, (entry.length - 1));
 
}
