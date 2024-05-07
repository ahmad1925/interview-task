let answer = "6 people per one sheep";

let correctAnswers = document.querySelectorAll(".allbtn");

correctAnswers.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === answer) {
      alert("Correct!");
      btn.style.backgroundColor = "green";
    } else {
      alert("wrong!");
      btn.style.backgroundColor = "red";
    }
  });
});

let inputAnswer = "switzerland";

let inputData = document.getElementById("inputField");

function getValue() {
  let value = inputData.value;
  console.log(value);
  if (value === inputAnswer) {
    alert("your answer is correct");
    inputData.style.backgroundColor = "green";
  } else {
    alert("your anser is incorrect");
    inputData.style.backgroundColor = "red";
  }
}
