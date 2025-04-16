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
        b: "/* */",
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

const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.querySelector('button');
let score = 0;

let currentQuestion = 0;

loadQuiz();

function uncheck(){
     radioBtn.forEach(
          (radio) => radio.checked = false
     )
}

function loadQuiz(){

     uncheck();
     const currentQuizData = quizData[currentQuestion];

     questionEl.innerText = currentQuizData.question;

     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;

     
}

let ans = document.querySelector('li');

ans.addEventListener('click', 
     () => {
          
     }
)

submitBtn.addEventListener('click', 
     () => {

          currentQuestion++;

          radioBtn.forEach(
                    (radio) => {
                        // console.log(radio.checked ? true +"Radio Id: " + radio.id : "")

                         if(!radio.checked) return
                         else{ 
                               if(currentQuestion <= quizData.length){
                                        let quizNumber = document.getElementById('quizNumber');
                                        quizNumber.innerHTML = currentQuestion;

                                        if(radio.checked.id === currentQuizData.correct){
                                             score++
                                        }
                                   }
                                   else{
                                        console.log("Total Score: "  + score)
                                   }  
                              loadQuiz()
                         }
                    }
          )   
     }
)

