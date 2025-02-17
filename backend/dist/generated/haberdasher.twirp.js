"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HaberdasherMethodList = exports.HaberdasherMethod = exports.HaberdasherClientProtobuf = exports.HaberdasherClientJSON = void 0;
exports.createHaberdasherServer = createHaberdasherServer;
const twirp_ts_1 = require("twirp-ts");
const haberdasher_1 = require("./haberdasher");
class HaberdasherClientJSON {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.MakeHat.bind(this);
    }
    MakeHat(request) {
        const data = haberdasher_1.Size.toJson(request, {
            useProtoFieldName: true,
            emitDefaultValues: false,
        });
        const promise = this.rpc.request("Haberdasher", "MakeHat", "application/json", data);
        return promise.then((data) => haberdasher_1.Hat.fromJson(data, { ignoreUnknownFields: true }));
    }
}
exports.HaberdasherClientJSON = HaberdasherClientJSON;
class HaberdasherClientProtobuf {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.MakeHat.bind(this);
    }
    MakeHat(request) {
        const data = haberdasher_1.Size.toBinary(request);
        const promise = this.rpc.request("Haberdasher", "MakeHat", "application/protobuf", data);
        return promise.then((data) => haberdasher_1.Hat.fromBinary(data));
    }
}
exports.HaberdasherClientProtobuf = HaberdasherClientProtobuf;
var HaberdasherMethod;
(function (HaberdasherMethod) {
    HaberdasherMethod["MakeHat"] = "MakeHat";
})(HaberdasherMethod || (exports.HaberdasherMethod = HaberdasherMethod = {}));
exports.HaberdasherMethodList = [HaberdasherMethod.MakeHat];
function createHaberdasherServer(service) {
    return new twirp_ts_1.TwirpServer({
        service,
        packageName: "",
        serviceName: "Haberdasher",
        methodList: exports.HaberdasherMethodList,
        matchRoute: matchHaberdasherRoute,
    });
}
function matchHaberdasherRoute(method, events) {
    switch (method) {
        case "MakeHat":
            return async (ctx, service, data, interceptors) => {
                ctx = { ...ctx, methodName: "MakeHat" };
                await events.onMatch(ctx);
                return handleHaberdasherMakeHatRequest(ctx, service, data, interceptors);
            };
        default:
            events.onNotFound();
            const msg = `no handler found`;
            throw new twirp_ts_1.TwirpError(twirp_ts_1.TwirpErrorCode.BadRoute, msg);
    }
}
function handleHaberdasherMakeHatRequest(ctx, service, data, interceptors) {
    switch (ctx.contentType) {
        case twirp_ts_1.TwirpContentType.JSON:
            return handleHaberdasherMakeHatJSON(ctx, service, data, interceptors);
        case twirp_ts_1.TwirpContentType.Protobuf:
            return handleHaberdasherMakeHatProtobuf(ctx, service, data, interceptors);
        default:
            const msg = "unexpected Content-Type";
            throw new twirp_ts_1.TwirpError(twirp_ts_1.TwirpErrorCode.BadRoute, msg);
    }
}
async function handleHaberdasherMakeHatJSON(ctx, service, data, interceptors) {
    let request;
    let response;
    try {
        const body = JSON.parse(data.toString() || "{}");
        request = haberdasher_1.Size.fromJson(body, { ignoreUnknownFields: true });
    }
    catch (e) {
        if (e instanceof Error) {
            const msg = "the json request could not be decoded";
            throw new twirp_ts_1.TwirpError(twirp_ts_1.TwirpErrorCode.Malformed, msg).withCause(e, true);
        }
    }
    if (interceptors && interceptors.length > 0) {
        const interceptor = (0, twirp_ts_1.chainInterceptors)(...interceptors);
        response = await interceptor(ctx, request, (ctx, inputReq) => {
            return service.MakeHat(ctx, inputReq);
        });
    }
    else {
        response = await service.MakeHat(ctx, request);
    }
    return JSON.stringify(haberdasher_1.Hat.toJson(response, {
        useProtoFieldName: true,
        emitDefaultValues: false,
    }));
}
async function handleHaberdasherMakeHatProtobuf(ctx, service, data, interceptors) {
    let request;
    let response;
    try {
        request = haberdasher_1.Size.fromBinary(data);
    }
    catch (e) {
        if (e instanceof Error) {
            const msg = "the protobuf request could not be decoded";
            throw new twirp_ts_1.TwirpError(twirp_ts_1.TwirpErrorCode.Malformed, msg).withCause(e, true);
        }
    }
    if (interceptors && interceptors.length > 0) {
        const interceptor = (0, twirp_ts_1.chainInterceptors)(...interceptors);
        response = await interceptor(ctx, request, (ctx, inputReq) => {
            return service.MakeHat(ctx, inputReq);
        });
    }
    else {
        response = await service.MakeHat(ctx, request);
    }
    return Buffer.from(haberdasher_1.Hat.toBinary(response));
}
