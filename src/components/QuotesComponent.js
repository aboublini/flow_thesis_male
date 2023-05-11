// import React from 'react';
// import './QuotesComponentStyle.css'
//
// const QuotesComponent = () => {
//     // Quotes that will be appearing
//     const quotes = [
//         {
//             id: 1,
//             text: "Everything you can imagine is real.",
//             who: "Pablo Picasso"
//         },
//         {
//             id: 2,
//             text: "Don’t let yesterday take up too much of today.",
//             who: "Will Rogers"
//         },
//         {
//             id: 3,
//             text: "Strive not to be a success, but rather to be of value.",
//             who: "Albert Einstein"
//         },
//         {
//             id: 4,
//             text: "The way to get started is to quit talking and begin doing.",
//             who: "Walt Disney"
//         },
//         {
//             id: 5,
//             text: "When you change your thoughts, remember to also change your world.",
//             who: "Norman Vincent Peale"
//         },
//         {
//             id: 6,
//             text: "To know how much there is to know is the beginning of learning to live.",
//             who: "Dorothy West"
//         },
//     ];
//
//     // Render quotes randomly
//     const randomNum = Math.floor(Math.random() * 6) + 1;
//     let quoteText;
//     let quoteWriter;
//
//     for (let element of quotes) {
//         if (randomNum === element.id) {
//             quoteText = element.text;
//             quoteWriter = element.who;
//         }
//     }
//
//     return (
//         <div className="quotes">
//             <p className="quote-title">Quote we love:</p>
//             <br/>
//             <p className="quote-text">“{quoteText}”</p>
//             <br/>
//             <p className="quote-who">- {quoteWriter}</p>
//         </div>
//     );
// };
//
// export default QuotesComponent;


import React, { useEffect } from 'react';
import './QuotesComponentStyle.css';
//RxDoubleArrowRight
import { RxDoubleArrowRight } from "react-icons/rx";


const QuotesComponent = () => {
    // Quotes that will be appearing

        const quotes = [
        {
            id: 1,
            text: "Everything you can imagine is real.",
            who: "Pablo Picasso"
        },
        {
            id: 2,
            text: "Don’t let yesterday take up too much of today.",
            who: "Will Rogers"
        },
        {
            id: 3,
            text: "Strive not to be a success, but rather to be of value.",
            who: "Albert Einstein"
        },
        {
            id: 4,
            text: "The way to get started is to quit talking and begin doing.",
            who: "Walt Disney"
        },
        {
            id: 5,
            text: "When you change your thoughts, remember to also change your world.",
            who: "Norman Vincent Peale"
        },
        {
            id: 6,
            text: "To know how much there is to know is the beginning of learning to live.",
            who: "Dorothy West"
        },
    ];

    // Render quotes randomly
    const randomNum = Math.floor(Math.random() * 6) + 1;
    let quoteText;
    let quoteWriter;

    for (let element of quotes) {
        if (randomNum === element.id) {
            quoteText = element.text;
            quoteWriter = element.who;
        }
    }

    useEffect(() => {
        const quotesContainer = document.querySelector('.quotes');
        const quoteText = document.querySelector('.quote-text');
        const quoteWho = document.querySelector('.quote-who');

        const showQuotes = () => {
            if (window.scrollY >= quotesContainer.offsetTop - window.innerHeight / 2) {
                quoteText.classList.add('show');
                quoteWho.classList.add('show');
            }
        };

        window.addEventListener('scroll', showQuotes);

        return () => window.removeEventListener('scroll', showQuotes);
    }, []);

    return (
        <div className="quotes">
            <div className="q-right">
                <p className="quote-text">“{quoteText}”</p>
                <br />
                <p className="quote-who">- {quoteWriter}</p>
            </div>

            <div className="q-left">
                <div className="info1">
                    <h2><RxDoubleArrowRight size={20} style={{color: '#fff', marginRight: '1rem'}}/> WHAT'S NEW?</h2><br/>
                    <p>
                        Now, flow gives you the ability to change the font family of your notes.
                        Choose the font that suits you best among three very impressive font families:
                        the classic Arial, the dynamic Fjalla One and the minimalist Commissioner.
                        Always remember: Quality notes inspire curiosity and encourage reading!
                    </p>
                </div>
                <div className="info2">
                    <h2><RxDoubleArrowRight size={20} style={{color: '#fff', marginRight: '1rem'}}/> LATEST UPDATE</h2><br/>
                    <p>
                        The latest upgrade of flow focuses on improving the quality of the user interface
                        and enhancing the visual part. The FAQs and ABOUT pages from the previous version
                        have been merged into the HELP page, and a new line chart has been added to the
                        budget manager, so you can always keep track of your expenses!
                    </p>
                </div>
            </div>

        </div>
    );
};

export default QuotesComponent;