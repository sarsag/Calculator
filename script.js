function display(num) {
  document.getElementById("display").innerText += num;
}

function clearDisplay() {
  document.getElementById("display").innerText = "";
}

function calculate() {
  let cal = document.getElementById("display").innerText;
  document.getElementById("history").innerText = cal;
  let calculated = eval(cal);
  document.getElementById("display").innerText = calculated;

}