import React from 'react'
import ReactDOM from 'react-dom'

const mainContainer = document.querySelector('.main-content')


function persdoc() {
    const elem = (
        <>
            <div>Karolos Stantana baluje od rana</div>
            <h2>
                Aktualny czas: {new Date().toLocaleTimeString()}.
            </h2>
        </>
    )
            ReactDOM.render(elem, mainContainer)
}

setInterval(persdoc, 1000);