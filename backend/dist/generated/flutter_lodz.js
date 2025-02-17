"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlutterLodz = exports.ListStateManagementsResponse = exports.ListStateManagementsRequest = exports.StateManagement = exports.StateManagementProposal = void 0;
// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies
// @generated from protobuf file "flutter_lodz.proto" (syntax proto3)
// tslint:disable
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class StateManagementProposal$Type extends runtime_4.MessageType {
    constructor() {
        super("StateManagementProposal", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.name = "";
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.name);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message StateManagementProposal
 */
exports.StateManagementProposal = new StateManagementProposal$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StateManagement$Type extends runtime_4.MessageType {
    constructor() {
        super("StateManagement", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "rating", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.id = "";
        message.name = "";
        message.rating = 0;
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string name */ 2:
                    message.name = reader.string();
                    break;
                case /* int32 rating */ 3:
                    message.rating = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.id);
        /* string name = 2; */
        if (message.name !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.name);
        /* int32 rating = 3; */
        if (message.rating !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.rating);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message StateManagement
 */
exports.StateManagement = new StateManagement$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ListStateManagementsRequest$Type extends runtime_4.MessageType {
    constructor() {
        super("ListStateManagementsRequest", []);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ListStateManagementsRequest
 */
exports.ListStateManagementsRequest = new ListStateManagementsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ListStateManagementsResponse$Type extends runtime_4.MessageType {
    constructor() {
        super("ListStateManagementsResponse", [
            { no: 1, name: "state_managements", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.StateManagement }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.stateManagements = [];
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated StateManagement state_managements */ 1:
                    message.stateManagements.push(exports.StateManagement.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated StateManagement state_managements = 1; */
        for (let i = 0; i < message.stateManagements.length; i++)
            exports.StateManagement.internalBinaryWrite(message.stateManagements[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ListStateManagementsResponse
 */
exports.ListStateManagementsResponse = new ListStateManagementsResponse$Type();
/**
 * @generated ServiceType for protobuf service FlutterLodz
 */
exports.FlutterLodz = new runtime_rpc_1.ServiceType("FlutterLodz", [
    { name: "ProposeStateManagement", options: {}, I: exports.StateManagementProposal, O: exports.StateManagement },
    { name: "ListStateManagements", options: {}, I: exports.ListStateManagementsRequest, O: exports.ListStateManagementsResponse }
]);
