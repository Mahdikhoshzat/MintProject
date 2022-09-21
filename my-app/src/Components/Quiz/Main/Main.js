import React, { useState } from "react";
import "./Main.css"
import Question from "../Question/Question";
import Answer from "../answer/answer";

const allQuestions = [
    "1: Lorem ipsum dolor sit, amet consectetur?",
    "2: adipisicing elit. Deleniti nostrum nemo perspiciatis?",
    "3: Harum, praesentium. Delectus nostrum molestias adipisci?",
    "4: ipsum itaque ex maxime aliquam minima fugiat officia voluptas ut?",
    "5: odit architecto non impedit officiis reiciendis?",
    "6: Consectetur quo recusandae tempore vel iure ratione quod totam?",
    "7: Voluptates id suscipit fuga aliquid quam nam, expedita debitis maxime ad impedit?",
    "8: et molestiae blanditiis, ut dolor sunt provident, dolores dignissimos?",
    "9: obcaecati commodi. Modi atque nisi voluptates maiores dolor?",
    "10: expedita odit ut reiciendis nam omnis ea?"
]
const allAnswers = [
    [
        {
            Content: "apple",
            Value: false
        },
        {
            Content: "banana",
            Value: false
        },
        {
            Content: "orange",
            Value: true
        },
        {
            Content: "pineApple",
            Value: false
        },
    ], [
        {
            Content: "lion",
            Value: false
        },
        {
            Content: "cheetah",
            Value: true
        },
        {
            Content: "horse",
            Value: false
        },
        {
            Content: "chicken",
            Value: false
        },
    ], [
        {
            Content: "micro",
            Value: false
        },
        {
            Content: "nana",
            Value: false
        },
        {
            Content: "range",
            Value: true
        },
        {
            Content: "jac",
            Value: false
        },
    ], [
        {
            Content: "ple",
            Value: false
        },
        {
            Content: "ronald",
            Value: false
        },
        {
            Content: "hitler",
            Value: false
        },
        {
            Content: "bmw",
            Value: true
        },
    ], [
        {
            Content: "apple",
            Value: true
        },
        {
            Content: "banana",
            Value: false
        },
        {
            Content: "orange",
            Value: false
        },
        {
            Content: "pineApple",
            Value: false
        },
    ], [
        {
            Content: "cherry",
            Value: false
        },
        {
            Content: "AUX",
            Value: true
        },
        {
            Content: "USB",
            Value: false
        },
        {
            Content: "ALL above",
            Value: false
        },
    ], [
        {
            Content: "paris",
            Value: false
        },
        {
            Content: "new york",
            Value: false
        },
        {
            Content: "ottava",
            Value: true
        },
        {
            Content: "copenhag",
            Value: false
        },
    ], [
        {
            Content: "apple",
            Value: false
        },
        {
            Content: "banana",
            Value: false
        },
        {
            Content: "orange",
            Value: false
        },
        {
            Content: "pineApple",
            Value: true
        },
    ], [
        {
            Content: "lion",
            Value: true
        },
        {
            Content: "cheetah",
            Value: false
        },
        {
            Content: "horse",
            Value: false
        },
        {
            Content: "chicken",
            Value: false
        },
    ], [
        {
            Content: "school",
            Value: false
        },
        {
            Content: "univ",
            Value: false
        },
        {
            Content: "college",
            Value: false
        },
        {
            Content: "all above",
            Value: true
        },
    ],

]

let counter = 0
let score = 0
let finisher = false
export default function Main() {
    const [myQuestion, setMyQuestion] = useState(allQuestions[counter])
    const [myAnswer, setMyAnswer] = useState(allAnswers[counter])
    function nextQuestion(index) {
        if (index < 10) {
            setMyQuestion(allQuestions[index])
            setMyAnswer(allAnswers[index])
        }
        else {
            finisher = true
            setMyQuestion([])
            setMyAnswer([])
        }
    }

    function checker(isCorrect) {
        if (isCorrect) {
            score += 10
        }
        counter++;


        nextQuestion(counter)
    }

    let answers = myAnswer.map((item) => (
        <li key={Math.random()}><Answer
            checkAnswer={checker}
            content={item.Content}
            value={item.Value}
        /></li>
    ))

    let ourTest = null;
    if (finisher) {
        ourTest = <div>
            <h1>Test finished</h1>
            <h2>You got {score} in Test</h2>
        </div>

    }
    else {
        ourTest = <>
            <h1>Your Score: {score}/100</h1>
            <div className="question-quiz">
                <Question
                    text={myQuestion}
                />
            </div>
            <div className="answer-quiz">
                <ul>
                    {answers}
                </ul>
            </div>
        </>
    }

    return (
        <section className="main-quiz">
            {ourTest}
        </section>
    )
}