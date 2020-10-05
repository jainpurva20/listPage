import express from 'express';
import fs from 'fs';
import path from 'path';
const app = express()

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from '../src/redux/reducers/';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer,
    applyMiddleware(
      thunkMiddleware
    ))
  
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import APP from '../src/App';

const PORT = 8000;
app.use('^/$', (req, res, next) => {
    fs.readFile('./build/index.html', 'utf-8', (err, data)   =>{
        if(err){
            console.log(err);
            return res.status(500).send("some error happened");
        }
        return res.send(
            data.replace('<div id="root"></div>',
            `<div id="root">${ReactDOMServer.renderToString(<Provider store={store}><APP /></Provider>)}</div>`))
    })
})

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, ()=>{
    console.log("App launched on 8000")
})