import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBouandery from "../errorBoundery/ErrorBoundery";

import decoration from '../../resources/img/vision.png';

class App extends Component {

    state = {
        selectedCahr: null
    }

    onSelectedChar = (id) => {
        this.setState({
            selectedCahr: id
        });
    }

    
    
    render() {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <ErrorBouandery>
                        <RandomChar/>
                    </ErrorBouandery>
                    <div className="char__content">
                        <ErrorBouandery>
                            <CharList onSelectedChar={this.onSelectedChar}/>
                        </ErrorBouandery>
                        <ErrorBouandery>
                            <CharInfo charId={this.state.selectedCahr}/>
                        </ErrorBouandery>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
}

export default App;