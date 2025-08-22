import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar2';

const GingerQuiz = () => {
    // Quiz questions and answers
    const questions = [
      {
        question: "What is the Sanskrit name for Ginger?",
        options: ["Shunthi", "Haridra", "Tulsi", "Kumari"],
        answer: "Shunthi"
      },
      {
        question: "Which dosha does Ginger help balance the most in Ayurveda?",
        options: ["Vata", "Kapha", "Pitta", "Tridoshic"],
        answer: "Vata"
      },
      {
        question: "Which system of the body benefits most from Ginger?",
        options: [
          "Respiratory System",
          "Digestive System",
          "Nervous System",
          "Cardiovascular System"
        ],
        answer: "Digestive System"
      },
      {
        question: "Which of the following is a well-known effect of Ginger?",
        options: [
          "Relieving nausea",
          "Promoting hair growth",
          "Boosting eyesight",
          "Improving joint flexibility"
        ],
        answer: "Relieving nausea"
      }
    ];
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
  
    const handleAnswerOptionClick = (selectedOption) => {
      if (selectedOption === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    };
  
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-r from-slate-800 to-slate-950 text-white py-12">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <h1 className="text-4xl font-bold text-center text-customColor mb-8 mt-16">
              Ginger in Ayurveda Quiz
            </h1>
  
            <div className="quiz-section bg-slate-700 p-8 rounded-lg shadow-lg text-center">
              {showScore ? (
                <div className="text-2xl">
                  You scored {score} out of {questions.length}
                </div>
              ) : (
                <>
                  <div className="text-xl mb-4">
                    {questions[currentQuestion].question}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {questions[currentQuestion].options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleAnswerOptionClick(option)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default GingerQuiz;