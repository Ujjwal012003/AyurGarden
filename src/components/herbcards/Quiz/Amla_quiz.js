import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar2';
import amla from '../images/amla.png';

function AmlaQuiz() {
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  // Quiz logic
  const questions = [
    {
      question: "What is Amla also known as in Ayurveda?",
      options: ["Indian Gooseberry", "Bitter Melon", "Holy Basil", "Neem"],
      answer: "Indian Gooseberry"
    },
    {
      question: "Which of the following is a primary benefit of Amla?",
      options: [
        "Helps in weight loss",
        "Improves digestion",
        "Enhances memory",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "Which dosha does Amla primarily pacify?",
      options: ["Vata", "Pitta", "Kapha", "All three"],
      answer: "Pitta"
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
          <h1 className="text-4xl font-bold text-center text-customColor mb-8 mt-16">Amla in Ayurveda</h1>

          {/* Quiz Section */}
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
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
}

export default AmlaQuiz;
