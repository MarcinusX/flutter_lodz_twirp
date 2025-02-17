"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HaberdasherClient = void 0;
const haberdasher_1 = require("./haberdasher");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * Haberdasher service makes hats for clients.
 *
 * @generated from protobuf service Haberdasher
 */
class HaberdasherClient {
    _transport;
    typeName = haberdasher_1.Haberdasher.typeName;
    methods = haberdasher_1.Haberdasher.methods;
    options = haberdasher_1.Haberdasher.options;
    constructor(_transport) {
        this._transport = _transport;
    }
    /**
     * MakeHat produces a hat of mysterious, randomly-selected color!
     *
     * @generated from protobuf rpc: MakeHat(Size) returns (Hat);
     */
    makeHat(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
}
exports.HaberdasherClient = HaberdasherClient;
