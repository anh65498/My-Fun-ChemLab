const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const resultButton = document.getElementById('result-btn')
const quitButton = document.getElementById('quit-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
var score = 0

startButton.addEventListener('click', startGame)

function displayScore(score) {
  window.alert("Your score is: " + score)
  endGame()
}

function endGame() {
  resultButton.classList.add('hide')
  quitButton.innerText = 'Quit'
  quitButton.classList.remove('hide')
}

function pageRedirect() {
  window.location.replace("../mainPage/index.html");
} 

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  if (selectedButton.dataset.correct) {
    score = score + 1
  }
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    resultButton.innerText = 'Get Results!'
    resultButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
      {
          question: "When the equation for the reaction represented above is balanced and all coefficients are reduced to lowest whole-number terms, the coefficient for HCl is:\n_BCl3(g) + _H2(g) -> _HCl(g) + _B(g)",
          answers: [
              {text: '1', correct: false},
              {text: '2', correct: false},
              {text: '4', correct: false},
              {text: '6', correct: true}
          ]
      },
      {
          question: "To determine whether a water solution of Na2S2O3 at room temperature is supersaturated, one can:",
          answers: [
              {text: 'heat the solution to its boiling point', correct: false},
              {text: 'add a crystal of Na2S2O3 to the solution', correct: true},
              {text: 'acidify the solution', correct: false},
              {text: 'cool the solution to its freezing point', correct: false}
          ]
      },
      {
          question: "According to the reaction represented by the unbalanced equation above, how many moles of text SO2 are required to react completely with 1 mole of O2?",
          answers: [
              {text: '0.5 mol', correct: false},
              {text: '1 mol', correct: false},
              {text: '2 mol', correct: true},
              {text: '3 mol', correct: false}
          ]
      },
      {
          question: "The number of oxygen atoms in 0.50 mole of KHSO4 end subscript is",
          answers: [
              {text: '1.2 x 10 ^ 23', correct: false},
              {text: '2.4 x 10 ^ 23', correct: false},
              {text: '3.0 x 10 ^ 23', correct: false},
              {text: '1.2 x 10 ^ 24', correct: true}
          ]
      },
    /*{
        question: "In which country was COVID-19 first reported?",
        answers: [
            {text: 'America', correct: false},
            {text: 'Iran', correct: false},
            {text: 'Italy', correct: false},
            {text: 'China', correct: true}
        ]
    },
    {
        question: "What is COVID-19?",
        answers: [
            {text: 'Name of a virus', correct: true},
            {text: 'Name of a disease', correct: false},
            {text: 'Name of a drug', correct: false},
            {text: 'Name of a place in China', correct: false}
        ]
    },
    {
        question: "Which virus causes the disease COVID19?",
        answers: [
            {text: 'SARS', correct: false},
            {text: 'SARS-CoV-2', correct: true},
            {text: 'NIPAH', correct: false},
            {text: 'MERS', correct: false}
        ]
    },
    {
        question: "Is there anything I should not do?",
        answers: [
            {text: 'Smoking', correct: false},
            {text: 'Wearing multiple masks', correct: false},
            {text: 'Taking antibiotics', correct: false},
            {text: 'All the above', correct: true}
        ]
    },*/
    // {
    //     question: "How can we make our hands safe?",
    //     answers: [
    //         {text: 'Wash with soap and water', correct: false},
    //         {text: 'Wipe hands with tissue paper or cloth', correct: false},
    //         {text: 'Wash with soap and water and scrub at least for 20 seconds', correct: true},
    //         {text: 'Wash with plain soap', correct: false}
    //     ]
    // },
    // {
    //     question: "What are the methods to prevent COVID19?",
    //     answers: [
    //         {text: 'Physical distancing (1 meter)', correct: false},
    //         {text: 'Physical distancing (2 meter)', correct: false},
    //         {text: 'Physical distancing (6 feet)', correct: false},
    //         {text: 'Both 2 and 3', correct: true}
    //     ]
    // },
    // {
    //     question: "Who is at a higher risk of developing complications from COVID-19?",
    //     answers: [
    //         {text: 'Elderly (65 years and above)', correct: false},
    //         {text: 'People with uncontrolled diabetes', correct: false},
    //         {text: 'People with other pre-existing diseases', correct: false},
    //         {text: 'All the above', correct: true}
    //     ]
    // },
    // {
    //     question: "Which of the following is an example of physical distancing?",
    //     answers: [
    //         {text: 'You stop going to crowded places and visiting other people\'s houses', correct: true},
    //         {text: 'You stop talking to people you live with', correct: false},
    //         {text: 'You stop speaking to your friends on phone', correct: false},
    //         {text: 'You stop interacting on social media platforms', correct: false}
    //     ]
    // },
    // {
    //     question: "How does Coronavirus transmit?",
    //     answers: [
    //         {text: 'Droplets spread (When a person sneezes or coughs)', correct: false},
    //         {text: 'Constant touching of face, eyes or mouth', correct: false},
    //         {text: 'Close contact with CoVid-19 infected person', correct: false},
    //         {text: 'All the above', correct: true}
    //     ]
    // },
    // {
    //     question: "What are the common symptoms of COVID-19?",
    //     answers: [
    //         {text: 'Fever', correct: false},
    //         {text: 'Dry cough', correct: false},
    //         {text: 'Tiredness', correct: false},
    //         {text: 'All the above', correct: true}
    //     ]
    // }
]