import {useState} from 'react'
import { Helmet } from 'react-helmet';

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import CharSearchForm from '../charSearchForm/CharSearchForm';
import ErrorBouandery from "../errorBoundery/ErrorBoundery";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {

    const [selectedCahr, setCahr] = useState(null);

    const onSelectedChar = (id) => {
        setCahr(id)
    }

    return(
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"/>
                <title>Marvel information portal</title>
            </Helmet>
            <ErrorBouandery>
                <RandomChar/>
            </ErrorBouandery>
            <div className="char__content">
                <ErrorBouandery>
                    <CharList onSelectedChar={onSelectedChar}/>
                </ErrorBouandery>
                <div>
                    <ErrorBouandery>
                        <CharInfo charId={selectedCahr}/>
                    </ErrorBouandery>
                    <ErrorBouandery>
                        <CharSearchForm/>
                    </ErrorBouandery>
                </div>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;