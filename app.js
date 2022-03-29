// Quiz questions Array
const questions = [
  {
    question: "In what state is Elephant Falls located? ",
    a: "Mizoram",
    b: "Orissa",
    c: "Manipur",
    d: "Meghalaya",
    correct: "d",
  },

  {
    question:
      " India is a federal union comprising twenty-eight states and how many union territories? ",
    a: "6",
    b: "7",
    c: "8",
    d: "9",
    correct: "c",
  },

  {
    question: " Which of the following is the capital of Arunachal Pradesh?",
    a: "Itanagar",
    b: "Dispur",
    c: "Imphal",
    d: "Panaji",
    correct: "a",
  },

  {
    question: " What is the state flower of Haryana?",
    a: "Not declared",
    b: "Lotus",
    c: "Rhododendron",
    d: "Golden Shower",
    correct: "b",
  },
  {
    question: " Which of the following states is not located in the North?",
    a: " Himachal Pradesh",
    b: "Jammu and Kashmir",
    c: "Haryana",
    d: "Jharkhand",
    correct: "d",
  },
];

// HTML Element Selections

const questionEl = document.querySelector(".question");
const opt_a = document.querySelector(".a");
const opt_b = document.querySelector(".b");
const opt_c = document.querySelector(".c");
const opt_d = document.querySelector(".d");
const submitBtn = document.querySelector(".submit");
const allAnswersElements = document.querySelectorAll(".answer");
const quizBox = document.querySelector(".quiz__box");

let currentQuestion = 0;
let score = 0; // Initial Score

// Rendring question to page.
const showQuestions = function () {
  const currentData = questions[currentQuestion];
  questionEl.textContent = currentData.question;
  opt_a.textContent = currentData.a;
  opt_b.textContent = currentData.b;
  opt_c.textContent = currentData.c;
  opt_d.textContent = currentData.d;
};
// Calling this function to render first question to page.
showQuestions();

const getSelectedAnswer = function () {
  let answer;
  allAnswersElements.forEach((ans) => {
    if (ans.checked) {
      answer = ans.id;
    }
    ans.checked = false;
  });

  return answer;
};

const calcScore = (answer) =>
  answer === questions[currentQuestion].correct && score++;

const showResults = () => {
  alert("you have finished answering all the quesions.");
  const html = ` 
  
    <div class="result">
        <h3>✌️ Quiz Finished 🥳</h3>
        <p>Your score🎯 is: <span> ${score}/${questions.length}</span></p>
        <button onclick="location.reload()">Take Quiz Again</button>
    </div>
    `;
  quizBox.insertAdjacentHTML("beforeend", html);
};

submitBtn.addEventListener("click", function () {
  const answer = getSelectedAnswer();
  calcScore(answer);

  if (currentQuestion < questions.length) {
    if (answer) {
      currentQuestion++;
      showQuestions();
    } else alert(" ⚠️ Choose a option ⚠️");
  } else {
    showResults();
  }
});
