import React, { useState } from 'react'
import questions from '../questions.json'
import results from '../results.json'
import { QuestionI } from '../types'
import { CSSTransition } from 'react-transition-group'

const questionsList = questions.questions
const resultsList = results.results

const Question = ({ currentQuestion, onClickNext, onChangeResult }: {currentQuestion: QuestionI, onClickNext: () => void, onChangeResult: () => void}) => {
    const [answer, setAnswer] = useState<number | null>(null)
    const [itemClass, setItemClass] = useState<string>('')
    const [isDisabled, setDisabled] = useState<boolean>(false)

    const [showAnswer, setShowAnswer] = useState<boolean>(false)
    const [showQuestion, setShowQuestion] = useState<boolean>(true)

    const isCorrectAnswer = (answer: string, index: number) => {
        setAnswer(index)
        setDisabled(true)
        setTimeout(()=> {
            setShowAnswer(true)
        }, 1000)
        setItemClass(answer === currentQuestion.correct
                             ? 'correct' 
                             : 'incorrect')
        if (answer === currentQuestion.correct) {
            onChangeResult()
        }
    }

    const handleNextClick = () => {
        onClickNext()
        setAnswer(null)
        setDisabled(false)
        setShowAnswer(false)
    }

    return (
        <>
            <h2 className="card__title">{currentQuestion.title}</h2>
            <ul className="vars">
                {currentQuestion.variants.map((item, index) => 
                    <li className={index === answer ? itemClass : ''}
                        onClick={() => !isDisabled && isCorrectAnswer(item, index)}
                        key={item}
                    >{item}</li>
                )}
            </ul>

            <CSSTransition in={showAnswer} timeout={600} classNames="show" unmountOnExit>
                <div>
                    <Answer text={currentQuestion.description.text} image={currentQuestion.description.image}/>
                    <button onClick={handleNextClick} className="primary-button">Далее</button>
                </div>
            </CSSTransition>
        </>
    )
}

const Answer = ({text, image}: {text: string, image: string}) => {

    return (
        <div>
            <div className="answer">
                <h2 className="card__title">Ответ:</h2>
                <p className="answer__text">{text}</p>
                <img src={image} alt={text} className="answer__img" />
            </div>
        </div>
    )
}

const Result = ({steps, result}: {steps: number, result: number}) => {
    return (
        <>
            <div className="result">
                <div className="result__numbers">{result}/{steps}</div>
                <h2 className="card__title result__title">Отличный результат!</h2>
                <p className="answer__text result__text">Обязательно приходите на наши тренировки. Ждем всех желающих!</p>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSdK_dIrmabClHA_wrPzDXsTIFzavpPqL_k1EnfpPjZQ2MwuGQ/viewform' className="primary-button">Записаться в секцию</a>
                <a href='https://www.instagram.com/boxmisis/' className="primary-button inst-button">
                    <span>Узнать больше</span>
                    <img src="inst.svg" alt="инстаграмм" />
                </a>
            </div>
        </>
    )
}


export default function Quiz() {
    const [step, setStep] = useState(0);
    const [result, setResult] = useState(0);
    const question = questionsList[step];

    const onClickNext = () => {
        setStep(step + 1)
    }

    const onChangeResult = () => {
        setResult(result + 1)
    }
    console.log(step, result, questionsList.length)

    return (
        <>
            <div className="quiz-container">
                <div className="card">
                    <div className="progress">
                        <div className="progressbar" style={{width: (step) * 100 / questionsList.length + 5 + '%'}}></div>
                    </div>

                    {step !== questionsList.length && 
                    <Question currentQuestion={question} 
                              onClickNext={onClickNext}
                              onChangeResult={onChangeResult}/>}

                    <CSSTransition in={step === questionsList.length} timeout={600} classNames="show" unmountOnExit>
                        <Result steps={questionsList.length} result={result}/>
                    </CSSTransition>
                </div>
            </div>
        </>
    )
}
