"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const twirp_ts_1 = require("twirp-ts");
const flutter_lodz_twirp_1 = require("./generated/flutter_lodz.twirp");
async function run() {
    const client = new flutter_lodz_twirp_1.FlutterLodzClientProtobuf((0, twirp_ts_1.NodeHttpRPC)({
        baseUrl: "http://localhost:8000/twirp",
    }));
    let result = await client.ProposeStateManagement({ name: "Riverpod 👍" });
    console.log("I created:");
    console.log(result);
    let allManagements = await client.ListStateManagements({});
    console.log('All managements:');
    console.log(allManagements);
}
run();
