import { useState, useEffect } from 'react';
import './styles/quiz.css';

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const API_KEY = "wUV4ThzKQ0eIcxxDm5eEfMN7EaEGBNjfdexpQonc";

    useEffect(() => {
        fetch(`https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&limit=10&category=Linux&difficulty=easy`)
            .then((res) => res.json())
            .then((data) => {
                setQuestions(data);
            })
            .catch((error) => {
                console.error("Error fetching questions:", error);
            });
    }, []);

    const handleNextQuestion = () => {
        setSelectedOption(null);
        setIsCorrect(null);
        setCurrentQuestion((prev) => prev + 1);
    };

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    if (currentQuestion >= questions.length) {
        return <div>Quiz Finished!</div>;
    }

    const questionData = questions[currentQuestion];

    // Extract answers
    const answers = questionData.answers;
    const correctAnswers = questionData.correct_answers;

    // Convert answer object into an array and filter out null values
    const allOptions = Object.entries(answers)
        .filter(([key, value]) => value !== null)
        .map(([key, value]) => ({
            text: value,
            isCorrect: correctAnswers[key + "_correct"] === "true",
        }));

    // Shuffle options
    allOptions.sort(() => Math.random() - 0.5);

    const handleOptionClick = (option) => {
        if (selectedOption === null) {
            setSelectedOption(option);
            setIsCorrect(option.isCorrect);
        }
    };

    return (
        <div className='quiz'>
            <div className="quiz-container">
                <h2 className="question" dangerouslySetInnerHTML={{ __html: questionData.question }}></h2>
                <ul className="options-list">
                    {allOptions.map((option, index) => (
                        <li
                            className={`option ${selectedOption ? (option.isCorrect ? "correct" : selectedOption.text === option.text ? "incorrect" : "") : ""}`}
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            dangerouslySetInnerHTML={{ __html: option.text }}
                        >
                        </li>
                    ))}
                </ul>

                {selectedOption && (
                    <button className='next-button' onClick={handleNextQuestion}>
                        {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                    </button>
                )}
            </div>
        </div>
    );
}

export default Quiz;
