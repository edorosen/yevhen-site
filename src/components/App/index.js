import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {
    Home,
    Contacts,
    About,
} from '../pages/pages';

import {
    Periodpress,
    DveriService,
    Mebel24
} from '../pages/ReadyUp/ReadyUp';

import Loader from './loader';
import Header from '../Header';
import Footer from '../Footer';

import { Wrapper, GlobalStyle } from './styles'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    render() {


        return (
            <Suspense fallback={<Loader/>}>
                <Router>
                    <Wrapper>
                        <GlobalStyle />
                        <Header />

                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/Contacts">
                                <Contacts />
                            </Route>
                            <Route path="/About">
                                <About />
                            </Route>
                            <Route path="/Periodpress">
                                <Periodpress />
                            </Route>
                            <Route path="/DveriService">
                                <DveriService />
                            </Route>
                            <Route path="/mebel">
                                <Mebel24 />
                            </Route>
                        </Switch>

                        <Footer />
                    </Wrapper>
                </Router>
            </Suspense>
        )
    }

}

export default App;
