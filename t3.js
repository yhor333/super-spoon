"use strict";
const json = JSON.stringify([
    {
        id: 1,
        question: "What is your marital status?",
        answers: [
            {
                answer: "Single",
                answerId: 2.1,
            },
            {
                answer: "Married",
                answerId: 2.2,
            },
        ],
    },
    {
        id: 2.1,
        question: "Are you planning on getting married next year?",
        answers: [
            {
                answer: "Yes",
                answerId: 3.1,
            },
            {
                answer: "No",
                answerId: 3.2,
            },
        ],
    },
    {
        id: 2.2,
        question: "How long have you been married?",
        answers: [
            {
                answer: "Less than a year",
                answerId: null,
            },
            {
                answer: "More than a year",
                answerId: 3.3,
            },
        ],
    },
    {
        id: 3.1,
        question: "Have you already known date When you are planning on getting married?",
        answers: [
            {
                answer: "Yes",
                answerId: null,
            },
            {
                answer: "No",
                answerId: null,
            },
        ],
    },
    {
        id: 3.2,
        question: "You already have a soul mate",
        answers: [
            {
                answer: "Yes",
                answerId: null,
            },
            {
                answer: "No",
                answerId: null,
            },
        ],
    },
    {
        id: 3.3,
        question: "Have you celebrated your one year anniversary?",
        answers: [
            {
                answer: "Yes",
                answerId: null,
            },
            {
                answer: "No",
                answerId: null,
            },
        ],
    },
]);
const question = document.getElementById("question");
const questionWrapped = document.getElementById("question-wrapped");
const questionButton = document.getElementById("question_button");
function drawQuestions(json) {
    const res = [];
    const arr = JSON.parse(json);
    drawInputs(arr, 0, 0, res);
    if (questionButton !== null) {
        questionButton.onclick = () => {
            var _a;
            let radio = document.querySelectorAll("input");
            removeAllChildNodes(questionWrapped);
            for (let r of radio) {
                if (r.checked && question !== null) {
                    let data = +r.value;
                    const currentQuestion = question.textContent || question.innerText;
                    const currentAnswer = (_a = r.parentNode) === null || _a === void 0 ? void 0 : _a.textContent;
                    res.push({ question: currentQuestion, answer: currentAnswer });
                    drawInputs(arr, data, 0, res);
                    break;
                }
            }
        };
    }
}
function drawInputs(arr, value, i, res) {
    if (value !== 0) {
        for (let y = 1; y < arr.length; y++) {
            if (arr[y].id === value) {
                i = y;
            }
        }
    }
    if (i !== null && typeof arr[i].question === "string" && question !== null) {
        question.innerHTML = arr[i].question;
        if (question.innerHTML === "What is your marital status?" && res.length > 0) {
            question.innerHTML = 'Questions is over';
            return JSON.stringify(res);
        }
        for (let answer of arr[i].answers) {
            if (questionWrapped !== null) {
                let label = document.createElement("label");
                label.innerHTML = answer.answer;
                let input = document.createElement("input");
                input.type = "radio";
                input.name = arr[i].id;
                input.value = answer.answerId;
                label.appendChild(input);
                questionWrapped.appendChild(label);
            }
        }
    }
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
drawQuestions(json);
