import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {MainPage, ComicsPage} from '../pages';

import AppHeader from "../appHeader/AppHeader";

<<<<<<< HEAD
=======
import decoration from '../../resources/img/vision.png';
import ComicsList from "../comicsList/ComicsList";
// import TestComponent from "../testComonent/TestComponent";
>>>>>>> dfbc07186b5e2c52b0a2540ba3b509a3f9ff9862



const App = () => {
    return (
<<<<<<< HEAD
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <MainPage/>
                        </Route>
                        <Route exact path="/comics">
                            <ComicsPage/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    ) 
=======
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
    
>>>>>>> dfbc07186b5e2c52b0a2540ba3b509a3f9ff9862
}

export default App;