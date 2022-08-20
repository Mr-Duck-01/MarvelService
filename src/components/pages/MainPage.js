import {useState} from 'react'
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBouandery from "../errorBoundery/ErrorBoundery";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {

    const [selectedCahr, setCahr] = useState(null);

    const onSelectedChar = (id) => {
        setCahr(id)
    }

    return(
        <>
            <ErrorBouandery>
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
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;