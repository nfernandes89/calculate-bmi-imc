function calculateIMC(event) {
  event.preventDefault();

  if (document.querySelectorAll(".imc-result").length > 0) {
    document.querySelector(".imc-result").remove();
  }

  let weightValue = document.querySelector(".weight-js").value;

  let heightValue = document.querySelector(".height-js").value;

  let imc = (weightValue / heightValue ** 2).toFixed(1);

  let imcResult = document.querySelector(".result-js");

  if (imc < 18.5) {
    document
      .querySelector(".img-attention")
      .setAttribute("src", "attention.png");
    imcResult.setAttribute("class", "result-js");
    imcResult.innerHTML = imc + ": Underweight";
  } else if (imc > 18.5 && imc <= 24.9) {
    document.querySelector(".img-green").setAttribute("src", "light-green.png");
    imcResult.setAttribute("class", "result-js");
    imcResult.innerHTML = imc + ": Normal weight";
  } else if (imc > 25 && imc <= 29.9) {
    document
      .querySelector(".img-yellow")
      .setAttribute("src", "light-yellow.png");
    imcResult.setAttribute("class", "result-js");
    imcResult.innerHTML = imc + ": Overweight";
  } else if (imc > 30) {
    document.querySelector(".img-red").setAttribute("src", "light-red.png");
    imcResult.setAttribute("class", "result-js");
    imcResult.innerHTML = imc + ": Obesity";
  }
}
