import React, {Fragment} from 'react';

import Media from 'react-media';

import {notification} from 'antd'

import dva from 'dva';

import createHistory from 'history/createBrowserHistory';

import Authorized from "./Authorized";

const messages = {

};



const component = dva({ onError  : e=> {

        e.errors && e.errors.forEach(error => notification.warn({message : error.message}));
        console.log(e);

    }, history: createHistory()});

component.router(({history}) =>  <div>

    <Media query="(max-width: 599px)">
        {isMobile => <Authorized urls={{}} onChangeLanguage={()=> {}} history={history} isMobile={isMobile}> </Authorized>}
    </Media>


</div>)

component.start(document.getElementById('root'))

