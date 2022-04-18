const express = require('express');
const userRouterApi = require('./userRouterApi');
const productRouterApi = require('./productRouterApi');

const route = (app)=>{

    //All user router 
    app.use('/api/v1', userRouterApi);

    //All Product router
    app.use('/api/v1', productRouterApi);

    //unknowen route
    app.use('*', (req, res)=> res.status(404).json({status:"fail", data:"Route does not exist"}));
}

module.exports = route;