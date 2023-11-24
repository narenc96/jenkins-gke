import { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Onboarding from "./onboarding";
import Authentication from "./authentication";
import Feeds from  "./feeds";
import { HOMEURL, REGISTERURL, FEEDSURL } from './constants';

const Views = () => {
    return <Fragment>
        <Router>
            <Route exact path={HOMEURL} component={Authentication} />
            <Route exact path={`${HOMEURL}${REGISTERURL}`} component={Onboarding} />
            <Route exact path={`${HOMEURL}${FEEDSURL}`} component={Feeds} /> 
        </Router>
    </Fragment> 
}

export default Views;