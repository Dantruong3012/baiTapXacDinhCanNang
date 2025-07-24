function check() {
  let yourWeight = Number(document.getElementById("d").value);
  let yourHeight = Number(document.getElementById("f").value);
  let BMI = yourWeight / (yourHeight * 2);
  if (BMI < 18.5) {
    document.getElementById("k").innerHTML = "Result: Under-Weight";
  } else if (BMI < 25) {
    document.getElementById("k").innerHTML = "Result: Normal";
  } else if (BMI < 30) {
    document.getElementById("k").innerHTML = "Result: Over-Weight";
  } else {
    document.getElementById("k").innerHTML = "Result: Obese";
  }
}
