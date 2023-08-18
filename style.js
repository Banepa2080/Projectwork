$(document).ready(function () {
  const formSteps = document.querySelectorAll(".form-step");
  const nextBtns = document.querySelectorAll(".btn-next");
  const progressSteps = document.querySelectorAll(".progress-step");
  const progress = document.querySelector(".progress");

  let formStepsNum = 0;

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();

      if (run(formStepsNum + 1)) {
        formSteps[formStepsNum].classList.remove("active");
        formStepsNum++;
        formSteps[formStepsNum].classList.add("active");
        updateProgressbar();
      }
    });
  });

  function updateProgressbar() {
    const progressWidth =
      ((formStepsNum + 1) / progressSteps.length) * 100 + "%";
    progress.style.width = progressWidth;
  }

  function run(stepIndex) {
    const currentStep = formSteps[stepIndex - 1];
    const inputs = currentStep.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (input.value.trim() === "") {
        $(input).css("background", "#ffdddd");
        return false;
      } else {
        $(input).css("background", "none");
      }
    }

    return true;
  }

  updateProgressbar();
});
