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
  document.querySelector(".result-js").appendChild(".imc-green");
  document.querySelector(".result-js").appendChild(".imc-yellow");
  document.querySelector(".result-js").appendChild(".imc-red");

  if (imc < 21) {
    imcResult.setAttribute("class", "result-js imc-green");
  } else if (imc >= 21 && imcResult < 26) {
    imcResult.setAttribute("class", "result-js imc-yellow");
  } else {
    imcResult.setAttribute("class", "result-js imc-red");
  }
}
