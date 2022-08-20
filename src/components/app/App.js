import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBouandery from "../errorBoundery/ErrorBoundery";

import decoration from '../../resources/img/vision.png';
import ComicsList from "../comicsList/ComicsList";
// import TestComponent from "../testComonent/TestComponent";

const App = () => {

    const [selectedCahr, setCahr] = useState(null);

    const onSelectedChar = (id) => {
        setCahr(id)
    }
    
    
    return (
        <div className="app">
            <AppHeader/>
            <main>
                {/* <ErrorBouandery>
                    <RandomChar/>
                </ErrorBouandery>
                <div className="char__content">
                    <ErrorBouandery>
                        <CharList onSelectedChar={onSelectedChar}/>
                    </ErrorBouandery>
                    <ErrorBouandery>
                        <CharInfo charId={selectedCahr}/>
                    </ErrorBouandery>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/> */}
                {/* <TestComponent/> */}
                <ComicsList/>
            </main>
        </div>
    )
    
}

export default App;