function calculateIMC(event) {
  event.preventDefault();

  if (document.querySelectorAll(".imc-result").length > 0) {
    document.querySelector(".imc-result").remove();
  }

  let weightValue = document.querySelector(".weight-js").value;

  let heightValue = document.querySelector(".height-js").value;

  let imc = (weightValue / heightValue ** 2).toFixed(1);

  let imcResult = document.querySelector(".result-js");
  imcResult.innerHTML = imc;

  if (imc < 20) {
    document.querySelector(".img-green").setAttribute("src", "light-green.png");
    imcResult.setAttribute("class", "result-js");
  } else if (imc >= 20 && imc <= 25) {
    document
      .querySelector(".img-yellow")
      .setAttribute("src", "light-yellow.png");
    imcResult.setAttribute("class", "result-js");
  } else if (imc > 25) {
    document.querySelector(".img-red").setAttribute("src", "light-red.png");
    imcResult.setAttribute("class", "result-js");
  }
}
