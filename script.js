function toggleAnswer(question) {
    var answer = question.nextElementSibling;
    if (answer.style.display === "none") {
      answer.style.display = "block";
      question.querySelector(".plus").innerHTML = "-";
    } else {
      answer.style.display = "none";
      question.querySelector(".plus").innerHTML = "+";
    }
  }
