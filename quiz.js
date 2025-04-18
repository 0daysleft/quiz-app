const quizData = [
    {
        question: "What year was JavaScript invented?",
        a: "1990",
        b: "1995",
        c: "2000",
        d: "1985",
        correct: 'b'
    },
    {
        question: "Who created JavaScript?",
        a: "Dennis Ritchie",
        b: "Brendan Eich",
        c: "Guido van Rossum",
        d: "James Gosling",
        correct: 'b'
    },
    {
        question: "Which company first developed JavaScript?",
        a: "Microsoft",
        b: "Google",
        c: "Netscape",
        d: "Sun Microsystems",
        correct: 'c'
    },
    {
        question: "What does DOM stand for?",
        a: "Document Object Model",
        b: "Data Object Management",
        c: "Digital Ordinance Model",
        d: "Desktop Object Management",
        correct: 'a'
    },
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        a: "let",
        b: "var",
        c: "const",
        d: "static",
        correct: 'c'
    },
    {
        question: "Which of the following is a JavaScript data type?",
        a: "Float",
        b: "Double",
        c: "String",
        d: "Character",
        correct: 'c'
    },
    {
        question: "What is the result of '2' + 2 in JavaScript?",
        a: "4",
        b: "22",
        c: "undefined",
        d: "NaN",
        correct: 'b'
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        a: "//",
        b: "/* */ /*",
        c: "#",
        d: "--",
        correct: 'a'
    },
    {
        question: "Which array method removes the last element from an array?",
        a: "shift()",
        b: "unshift()",
        c: "pop()",
        d: "push()",
        correct: 'c'
    },
    {
        question: "Which method can convert a JSON string to a JavaScript object?",
        a: "JSON.stringify()",
        b: "JSON.parse()",
        c: "parseJSON()",
        d: "JSON.toObject()",
        correct: 'b'
    },
    {
        question: "Which operator checks for both value and type?",
        a: "==",
        b: "=",
        c: "===",
        d: "!==",
        correct: 'c'
    },
    {
        question: "Which function is used to delay execution in JavaScript?",
        a: "setInterval()",
        b: "wait()",
        c: "pause()",
        d: "setTimeout()",
        correct: 'd'
    },
    {
        question: "What does 'NaN' stand for?",
        a: "No assigned number",
        b: "Not a Number",
        c: "Not an Integer",
        d: "Null and None",
        correct: 'b'
    },
    {
        question: "Which keyword is used to handle exceptions in JavaScript?",
        a: "error",
        b: "catch",
        c: "exception",
        d: "handle",
        correct: 'b'
    },
    {
        question: "Which method adds an element to the beginning of an array?",
        a: "push()",
        b: "shift()",
        c: "unshift()",
        d: "prepend()",
        correct: 'c'
    },
    {
        question: "What is the output of typeof null in JavaScript?",
        a: "object",
        b: "null",
        c: "undefined",
        d: "NaN",
        correct: 'a'
    },
    {
        question: "Which scope does `let` belong to?",
        a: "Global",
        b: "Function",
        c: "Block",
        d: "Object",
        correct: 'c'
    },
    {
        question: "Which method is used to find an element in an array?",
        a: "locate()",
        b: "find()",
        c: "search()",
        d: "query()",
        correct: 'b'
    },
    {
        question: "Which of the following is not a primitive data type?",
        a: "String",
        b: "Boolean",
        c: "Object",
        d: "Number",
        correct: 'c'
    },
    {
        question: "Which keyword is used to create a class in JavaScript?",
        a: "function",
        b: "struct",
        c: "class",
        d: "object",
        correct: 'c'
    }

];

const radioBtn = document.querySelectorAll('input');
const scoreContainer = document.getElementsByClassName('score-container')[0];
const quizContainer = document.getElementsByClassName('quiz-container')[0];
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.querySelector('.quiz-button');
let quizNumber = document.getElementById('quizNumber');
let score = 0;

let currentQuestion = 0;
let currentQuizData = undefined;

function uncheck(){
     radioBtn.forEach(
          (radio) => radio.checked = false
     )
}


document.getElementsByClassName('start-quiz-note')[0].onclick = function (){
     quizContainer.style.display = "inline"
     document.getElementsByClassName('start-quiz-note')[0].style.display = "none";
     quizNumber.innerHTML = ((currentQuestion + 1) + '/' + quizData.length);
     loadQuiz();
}


function loadQuiz(){
     currentQuizData = quizData[currentQuestion];

     if (currentQuestion >= quizData.length) {
        showResults();
        return;
     }

     uncheck();

     questionEl.innerText = currentQuizData.question;

     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener('click', 
     () => {
     const selected = [...radioBtn].find(radio => radio.checked);
     if (!selected) return;

     if (selected.id === currentQuizData.correct) {
          score++;
     }

     currentQuestion++;
     quizNumber.innerHTML = ((currentQuestion + 1) + '/' + quizData.length);
     loadQuiz();
     }        
)

function showResults(){
          let congrats = document.getElementsByClassName("congrats")[0];
          let overalPeopelpPrcentage = document.getElementsByClassName("people-percentage")[0];
          let userScore = document.getElementsByClassName("actual-score")[0]
          let totalscore = (score * (100 / quizData.length));

          if(totalscore >= '90'){
               congrats.textContent = "Super Excellent"
               overalPeopelpPrcentage.textContent = '92.5%'
          }
          else if(totalscore >= '80'){
               congrats.textContent = "Excellent"
               overalPeopelpPrcentage.textContent = '84%'
          }
          else if(totalscore >= '70'){
               congrats.textContent = "Very Good"
               overalPeopelpPrcentage.textContent = '73.20%'
          }
          else if(totalscore >= '55'){
               congrats.textContent = "Good Job"
               overalPeopelpPrcentage.textContent = '58.43%'
          }
          else if(totalscore >= '40'){
               congrats.textContent = "Better Than Poor"
               overalPeopelpPrcentage.textContent = '34%'
          }
          else if(totalscore >= '30'){
               congrats.textContent = "Poor"
               overalPeopelpPrcentage.textContent = '21.32%'
          }
          else if(totalscore >= '0'){
               congrats.textContent = "Very Poor"
               overalPeopelpPrcentage.textContent = '4.2%'
          }

          quizContainer.style.display = "none"
          scoreContainer.style.display = "flex"
          userScore.innerHTML = totalscore;
}

document.getElementsByClassName("restart")[0].addEventListener('click', () => {
     window.location.reload();
})
