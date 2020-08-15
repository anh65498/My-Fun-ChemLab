import React, { Fragment, useEffect, useState } from "react";

import { Button } from "@material-ui/core";
const questions = require("./quiz.json");

const QuizPage = () => {
  //   const [shuffledQuestions, setShuffledQuestions] = useState([]);
  //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameStage, setGameStage] = useState("start");

  //   useEffect(() => {
  //     setShuffledQuestions(questions.sort(() => Math.random() - 0.5));
  //   });

  const startButton = document.getElementById("start-btn");
  const nextButton = document.getElementById("next-btn");
  const resultButton = document.getElementById("result-btn");
  const quitButton = document.getElementById("quit-btn");
  const questionContainerElement = document.getElementById(
    "question-container"
  );
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");

  let shuffledQuestions, currentQuestionIndex;
  var score = 0;

  startButton.addEventListener("click", startGame);

  function displayScore(score) {
    window.alert("Your score is: " + score);
    endGame();
  }

  function endGame() {
    resultButton.classList.add("hide");
    quitButton.innerText = "Quit";
    quitButton.classList.remove("hide");
  }

  function pageRedirect() {
    window.location.replace("../mainPage/index.html");
  }

  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
  });

  function startGame() {
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
  }

  function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }

  function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  }

  function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }

  function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (selectedButton.dataset.correct) {
      score = score + 1;
    }
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
      setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove("hide");
    } else {
      resultButton.innerText = "Get Results!";
      resultButton.classList.remove("hide");
    }
  }

  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add("correct");
    } else {
      element.classList.add("wrong");
    }
  }

  function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
  }

  return (
    <Fragment>
      <div className="body">
        <div className="container">
          <div id="question-container" className="hide">
            <div id="question">Question</div>
            <div id="answer-buttons" className="btn-grid">
              <button className="btn">Answer 1</button>
              <button className="btn">Answer 2</button>
              <button className="btn">Answer 3</button>
              <button className="btn">Answer 4</button>
            </div>
          </div>

          <div className="controls">
            <button
              id="start-btn"
              className="start-btn btn"
              onClick={startGame}
            >
              Start
            </button>
            <button id="next-btn" className="next-btn btn hide">
              Next
            </button>
            <button
              id="result-btn"
              className="result-btn btn hide"
              // onclick="displayScore(score)"
            >
              Get Results!
            </button>
            <button
              id="quit-btn"
              className="quit-btn btn hide"
              // onclick={pageRedirect}
            >
              Quit
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default QuizPage;
