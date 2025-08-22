import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar2';
const MoringaQuiz = () => {
    // Quiz questions and answers
    const questions = [
      {
        question: "What is the Sanskrit name for Moringa?",
        options: ["Shigru", "Haritaki", "Tulsi", "Amalaki"],
        answer: "Shigru"
      },
      {
        question: "Which dosha does Moringa help balance?",
        options: ["Vata", "Kapha", "Pitta", "Tridoshic"],
        answer: "Kapha"
      },
      {
        question: "Which nutrient is Moringa especially rich in?",
        options: [
          "Vitamin C",
          "Iron",
          "Vitamin D",
          "Zinc"
        ],
        answer: "Iron"
      },
      {
        question: "Which of the following is a well-known benefit of Moringa?",
        options: [
          "Supports immune function",
          "Improves digestion",
          "Boosts memory",
          "Helps in hair growth"
        ],
        answer: "Supports immune function"
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
              Moringa in Ayurveda Quiz
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
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
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
  
  export default MoringaQuiz;