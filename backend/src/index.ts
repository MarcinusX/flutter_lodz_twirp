import * as http from "http";
import { createFlutterLodzServer } from "./generated/flutter_lodz.twirp";
import { StateManagement } from "./generated/flutter_lodz";

let stateManagements : StateManagement[] = [];

const server = createFlutterLodzServer({
  ProposeStateManagement: async function (_, request) {
    let newManagement = StateManagement.create({
      id: stateManagements.length.toString(),
      name: request.name,
      rating: Math.floor(Math.random() * 10)+1,
    });
    stateManagements.push(newManagement);
    return newManagement;
  },
  ListStateManagements: async function (_, __) {
    return {stateManagements: stateManagements};
  }
});

http.createServer(server.httpHandler()).listen(8000);