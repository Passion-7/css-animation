import './App.css';
import styled from "styled-components";

function App() {
    return (
        <div>
            <header className="header">
                <div className="header-logo">
                    <svg id="logo" width="41" height="22" viewBox="0 0 41 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.7857 18.6786C33.739 18.6552 33.6903 18.6252 33.6399 18.5889C31.7025 17.4062 27.6816 15.275 25.9746 15.5536C24.9235 17.4362 23.9189 19.5535 23.2857 21C18.4456 18.9651 7.21239 12.1163 1 1L39.268 6.25659C39.5365 6.25356 39.7837 6.28434 40 6.35714L39.268 6.25659C37.6925 6.27436 35.3842 7.45629 34.2857 8.14286C35.2571 10.2857 34.3571 16.0595 33.7857 18.6786Z" fill="white"/>
                        <path d="M1 1L40 6.35714C38.5143 5.85714 35.5714 7.33929 34.2857 8.14286M1 1L29.3571 11.3571M1 1L34.2857 8.14286M1 1C7.21239 12.1163 18.4456 18.9651 23.2857 21C23.9189 19.5535 24.9235 17.4362 25.9746 15.5536M29.3571 11.3571C30.3571 13.5595 32.6429 18.1071 33.7857 18.6786M29.3571 11.3571C28.5217 11.4345 27.2158 13.3304 25.9746 15.5536M33.7857 18.6786C34.3571 16.0595 35.2571 10.2857 34.2857 8.14286M33.7857 18.6786C31.9116 17.5179 27.7257 15.2679 25.9746 15.5536" stroke="#FF8989"/>
                    </svg>
                    <span className="header-letter">Letter</span>
                </div>
                <nav>
                    <ul className="menu">
                        <li className="menu-item">Plugins</li>
                        <li className="menu-item">Pricing</li>
                        <li className="menu-item">Log in</li>
                        <li className="menu-item">Free trial</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default App;
