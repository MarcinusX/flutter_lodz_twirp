"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlutterLodzMethodList = exports.FlutterLodzMethod = exports.FlutterLodzClientProtobuf = exports.FlutterLodzClientJSON = void 0;
exports.createFlutterLodzServer = createFlutterLodzServer;
const twirp_ts_1 = require("twirp-ts");
const flutter_lodz_1 = require("./flutter_lodz");
class FlutterLodzClientJSON {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.ProposeStateManagement.bind(this);
        this.ListStateManagements.bind(this);
    }
    ProposeStateManagement(request) {
        const data = flutter_lodz_1.StateManagementProposal.toJson(request, {
            useProtoFieldName: true,
            emitDefaultValues: false,
        });
        const promise = this.rpc.request("FlutterLodz", "ProposeStateManagement", "application/json", data);
        return promise.then((data) => flutter_lodz_1.StateManagement.fromJson(data, { ignoreUnknownFields: true }));
    }
    ListStateManagements(request) {
        const data = flutter_lodz_1.ListStateManagementsRequest.toJson(request, {
            useProtoFieldName: true,
            emitDefaultValues: false,
        });
        const promise = this.rpc.request("FlutterLodz", "ListStateManagements", "application/json", data);
        return promise.then((data) => flutter_lodz_1.ListStateManagementsResponse.fromJson(data, {
            ignoreUnknownFields: true,
        }));
    }
}
exports.FlutterLodzClientJSON = FlutterLodzClientJSON;
class FlutterLodzClientProtobuf {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.ProposeStateManagement.bind(this);
        this.ListStateManagements.bind(this);
    }
    ProposeStateManagement(request) {
        const data = flutter_lodz_1.StateManagementProposal.toBinary(request);
        const promise = this.rpc.request("FlutterLodz", "ProposeStateManagement", "application/protobuf", data);
        return promise.then((data) => flutter_lodz_1.StateManagement.fromBinary(data));
    }
    ListStateManagements(request) {
        const data = flutter_lodz_1.ListStateManagementsRequest.toBinary(request);
        const promise = this.rpc.request("FlutterLodz", "ListStateManagements", "application/protobuf", data);
        return promise.then((data) => flutter_lodz_1.ListStateManagementsResponse.fromBinary(data));
    }
}
exports.FlutterLodzClientProtobuf = FlutterLodzClientProtobuf;
var FlutterLodzMethod;
(function (FlutterLodzMethod) {
    FlutterLodzMethod["ProposeStateManagement"] = "ProposeStateManagement";
    FlutterLodzMethod["ListStateManagements"] = "ListStateManagements";
})(FlutterLodzMethod || (exports.FlutterLodzMethod = FlutterLodzMethod = {}));
exports.FlutterLodzMethodList = [
    FlutterLodzMethod.ProposeStateManagement,
    FlutterLodzMethod.ListStateManagements,
];
function createFlutterLodzServer(service) {
    return new twirp_ts_1.TwirpServer({
        service,
        packageName: "",
        serviceName: "FlutterLodz",
        methodList: exports.FlutterLodzMethodList,
        matchRoute: matchFlutterLodzRoute,
    });
}
function matchFlutterLodzRoute(method, events) {
    switch (method) {
        case "ProposeStateManagement":
            return async (ctx, service, data, interceptors) => {
                ctx = { ...ctx, methodName: "ProposeStateManagement" };
                await events.onMatch(ctx);
                return handleFlutterLodzProposeStateManagementRequest(ctx, service, data, interceptors);
            };
        case "ListStateManagements":
            return async (ctx, service, data, interceptors) => {
                ctx = { ...ctx, methodName: "ListStateManagements" };
                await events.onMatch(ctx);
                return handleFlutterLodzListStateManagementsRequest(ctx, service, data, interceptors);
            };
        default:
            events.onNotFound();
            const msg = `no handler found`;
            throw new twirp_ts_1.TwirpError(twirp_ts_1.TwirpErrorCode.BadRoute, msg);
    }
}
function handleFlutterLodzProposeStateManagementRequest(ctx, service, data, interceptors) {
    switch (ctx.contentType) {
        case twirp_ts_1.TwirpContentType.JSON:
            return handleFlutterLodzProposeStateManagementJSON(ctx, service, data, interceptors);
        case twirp_ts_1.TwirpContentType.Protobuf:
            return handleFlutterLodzProposeStateManagementProtobuf(ctx, service, data, interceptors);
        default:
            const msg = "unexpected Content-Type";
            throw new twirp_ts_1.TwirpError(twirp_ts_1.TwirpErrorCode.BadRoute, msg);
    }
}
function handleFlutterLodzListStateManagementsRequest(ctx, service, data, interceptors) {
    switch (ctx.contentType) {
        case twirp_ts_1.TwirpContentType.JSON:
            return handleFlutterLodzListStateManagementsJSON(ctx, service, data, interceptors);
        case twirp_ts_1.TwirpContentType.Protobuf:
            return handleFlutterLodzListStateManagementsProtobuf(ctx, service, data, interceptors);
        default:
            const msg = "unexpected Content-Type";
            throw new twirp_ts_1.TwirpError(twirp_ts_1.TwirpErrorCode.BadRoute, msg);
    }
}
async function handleFlutterLodzProposeStateManagementJSON(ctx, service, data, interceptors) {
    let request;
    let response;
    try {
        const body = JSON.parse(data.toString() || "{}");
        request = flutter_lodz_1.StateManagementProposal.fromJson(body, {
            ignoreUnknownFields: true,
        });
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
            return service.ProposeStateManagement(ctx, inputReq);
        });
    }
    else {
        response = await service.ProposeStateManagement(ctx, request);
    }
    return JSON.stringify(flutter_lodz_1.StateManagement.toJson(response, {
        useProtoFieldName: true,
        emitDefaultValues: false,
    }));
}
async function handleFlutterLodzListStateManagementsJSON(ctx, service, data, interceptors) {
    let request;
    let response;
    try {
        const body = JSON.parse(data.toString() || "{}");
        request = flutter_lodz_1.ListStateManagementsRequest.fromJson(body, {
            ignoreUnknownFields: true,
        });
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
            return service.ListStateManagements(ctx, inputReq);
        });
    }
    else {
        response = await service.ListStateManagements(ctx, request);
    }
    return JSON.stringify(flutter_lodz_1.ListStateManagementsResponse.toJson(response, {
        useProtoFieldName: true,
        emitDefaultValues: false,
    }));
}
async function handleFlutterLodzProposeStateManagementProtobuf(ctx, service, data, interceptors) {
    let request;
    let response;
    try {
        request = flutter_lodz_1.StateManagementProposal.fromBinary(data);
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
            return service.ProposeStateManagement(ctx, inputReq);
        });
    }
    else {
        response = await service.ProposeStateManagement(ctx, request);
    }
    return Buffer.from(flutter_lodz_1.StateManagement.toBinary(response));
}
async function handleFlutterLodzListStateManagementsProtobuf(ctx, service, data, interceptors) {
    let request;
    let response;
    try {
        request = flutter_lodz_1.ListStateManagementsRequest.fromBinary(data);
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
            return service.ListStateManagements(ctx, inputReq);
        });
    }
    else {
        response = await service.ListStateManagements(ctx, request);
    }
    return Buffer.from(flutter_lodz_1.ListStateManagementsResponse.toBinary(response));
}
