import './App.css';
import React from 'react';
import cat from '../src/assets/images/cat-1.jpg'
import cat2x from '../src/assets/images/cat@2x.png'
import cat3x from '../src/assets/images/cat@3x.png'
import cat2 from '../src/assets/images/cat-2.jpg'


function App() {
    return (
        <div className="App">
            <p>Hello, Retina &#128075;</p>

            {/*<div className={'bg'}></div>*/}
            {/*<img src={cat} alt="cat" srcSet={`${cat2x} 2x, ${cat3x} 3x`} />*/}

            <picture>
                <source srcSet={`${cat2} 1x, ${cat2x} 2x, ${cat3x} 3x`}/>
                {/*<source media="(min-width: 1024px)" srcSet={`${cat2x} 1024px, ${cat} 680px`}/>*/}
                <img src={cat} alt="cat"/>
            </picture>

            <figure>

                <img src={cat} alt="cat" srcSet={`${cat2x} 2x, ${cat3x} 3x`} />
                <figcaption>"Nice cat"</figcaption>
            </figure>

        </div>
    );
}

export default App;