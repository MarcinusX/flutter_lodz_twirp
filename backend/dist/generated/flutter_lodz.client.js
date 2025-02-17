"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlutterLodzClient = void 0;
const flutter_lodz_1 = require("./flutter_lodz");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * @generated from protobuf service FlutterLodz
 */
class FlutterLodzClient {
    _transport;
    typeName = flutter_lodz_1.FlutterLodz.typeName;
    methods = flutter_lodz_1.FlutterLodz.methods;
    options = flutter_lodz_1.FlutterLodz.options;
    constructor(_transport) {
        this._transport = _transport;
    }
    /**
     * @generated from protobuf rpc: ProposeStateManagement(StateManagementProposal) returns (StateManagement);
     */
    proposeStateManagement(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ListStateManagements(ListStateManagementsRequest) returns (ListStateManagementsResponse);
     */
    listStateManagements(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
}
exports.FlutterLodzClient = FlutterLodzClient;
