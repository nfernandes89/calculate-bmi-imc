let mainTitle = document.getElementById("first-title-js");
mainTitle.innerHTML = "Calculate your IMC";

function calculateIMC(event) {
  event.preventDefault();

  if (document.querySelectorAll(".imc-result").length > 0) {
    document.querySelector(".imc-result").remove();
  }

  let weightValue = document.querySelector(".weight-js").value;

  let heightValue = document.querySelector(".height-js").value;

  let imcResult = (weightValue / heightValue ** 2).toFixed(1);

  let resultImc = document.querySelector(".result-js");
  resultImc.innerHTML = imcResult;

  if (imcResult < 21) {
    resultImc.setAttribute("class", "result-js imc-green");
  } else if (imcResult >= 21 && imcResult < 26) {
    resultImc.setAttribute("class", "result-js imc-yellow");
  } else {
    resultImc.setAttribute("class", "result-js imc-red");
  }
}
