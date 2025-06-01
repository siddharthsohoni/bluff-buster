  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Streak: {streak}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {questions[currentQuestionIndex].question}
          </h2>
          <div className="space-y-4">
            {questions[currentQuestionIndex].statements.map((statement, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-4 text-left bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                {statement}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  ); 