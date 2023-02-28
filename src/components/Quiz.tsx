import React from 'react'

const Card = () => {
    return (
        <>
        <div className="card">
            <div className="progress">
                <div className="progressbar" style={{width: 40 + '%'}}></div>
            </div>
            {false &&
            <>
                <h2 className="card__title">Сколько лет секции бокса МИСИС?</h2>
                <ul className="vars">
                    <li className='correct'>3 года</li>
                    <li className='incorrect'>5 лет</li>
                    <li>50 лет</li>
                    <li>67 лет</li>
                </ul>
            </>}s
            {true && 
            <>
                <h2 className="card__title">Сколько лет секции бокса МИСИС?</h2>
                <div className="answer">
                    <p className="answer__text">Секция бокса провела первую тренировку еще в 1975 году! </p>
                    <img src="https://res.cloudinary.com/buryattvoydrug/image/upload/v1630162373/EucjeIEXMAALLSd_yippzv.jpg" alt="" className="answer__img" />
                    <button className="primary-button">Далее</button>
                </div>
            </>}
            {false && 
            <div className="result">
                <div className="result__numbers">10/10</div>
                <h2 className="card__title result__title">Отличный результат!</h2>
                <p className="answer__text result__text">Обязательно приходите на наши тренировки. Ждем всех желающих!</p>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSdK_dIrmabClHA_wrPzDXsTIFzavpPqL_k1EnfpPjZQ2MwuGQ/viewform' className="primary-button">Записаться в секцию</a>
                <a href='https://www.instagram.com/boxmisis/' className="primary-button inst-button">
                    <span>Узнать больше</span> 
                    <img src="inst.svg" alt="инстаграмм" />
                </a>
            </div>}
        </div>
        </>
    )
}


export default function Quiz() {
  return (
    <>
    <div className="quiz-container">
        <Card/>
    </div>
    </>
  )
}
