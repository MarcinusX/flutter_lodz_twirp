"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const flutter_lodz_twirp_1 = require("./generated/flutter_lodz.twirp");
const flutter_lodz_1 = require("./generated/flutter_lodz");
let stateManagements = [];
const server = (0, flutter_lodz_twirp_1.createFlutterLodzServer)({
    ProposeStateManagement: async function (_, request) {
        let newManagement = flutter_lodz_1.StateManagement.create({
            id: stateManagements.length.toString(),
            name: request.name,
            rating: Math.floor(Math.random() * 11),
        });
        stateManagements.push(newManagement);
        return newManagement;
    },
    ListStateManagements: async function (_, __) {
        return { stateManagements: stateManagements };
    }
});
http.createServer(server.httpHandler()).listen(8000);
