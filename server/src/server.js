"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
//localhost://3333/ads
app.get('/ads', (request, function (response) {
    return response.json([
        { id: 1, name: 'anuncio 1' },
        { id: 2, name: 'anuncio 2' },
        { id: 3, name: 'anuncio 3' },
    ]);
}), app.listen(3333));
