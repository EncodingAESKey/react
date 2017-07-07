import React from 'react';
import ReactDom from 'react-dom';
import './css/style.css';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import IndexComponent from './components/index/index.js';
import DetailComponent from './components/detail/detail.js';
import MediaQuery from 'react-responsive';
import TouchIndexComponent from './components/touch/index.js';
import TouchDetailComponent from './components/touch/detail.js';
import TemplateComponent from './components/common/template.js';

import {createStore} from "redux";
import reducer from "./reducer.js";
import {Provider} from "react-redux";

var store = createStore(reducer);

class Root extends React.Component {

    handleEnter(nextState, replaceState) {

        try{
            if(window.localStorage && !window.localStorage.login) {
                replaceState({pathname: '/'})
            }
        }catch(e){}
    }



    render() {
    	return (
            <Provider store={store}>
        		<div className="main">
                <MediaQuery query='(min-device-width: 1024px)'>
    	    	<Router history = {hashHistory}>
    	    	<Route path = '/' component = {TemplateComponent}>
                    <IndexRoute component={IndexComponent} />
                    <Route path = '/detail/:id' onEnter={this.handleEnter} component = {DetailComponent}></Route>
                </Route>
    	    	</Router>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1024px)'>
                <Router history = {hashHistory}>
                <Route path = '/' component = {TouchIndexComponent}></Route>
                <Route path = '/detail/:id' component = {TouchDetailComponent}></Route>
                </Router>
                </MediaQuery>
    	    	</div>
            </Provider>
    	)
    }
}

ReactDom.render( <Root/> , document.getElementById("root") );
