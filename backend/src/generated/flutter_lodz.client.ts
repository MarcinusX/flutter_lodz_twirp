// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "flutter_lodz.proto" (syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { FlutterLodz } from "./flutter_lodz";
import type { ListStateManagementsResponse } from "./flutter_lodz";
import type { ListStateManagementsRequest } from "./flutter_lodz";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { StateManagement } from "./flutter_lodz";
import type { StateManagementProposal } from "./flutter_lodz";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service FlutterLodz
 */
export interface IFlutterLodzClient {
    /**
     * @generated from protobuf rpc: ProposeStateManagement(StateManagementProposal) returns (StateManagement);
     */
    proposeStateManagement(input: StateManagementProposal, options?: RpcOptions): UnaryCall<StateManagementProposal, StateManagement>;
    /**
     * @generated from protobuf rpc: ListStateManagements(ListStateManagementsRequest) returns (ListStateManagementsResponse);
     */
    listStateManagements(input: ListStateManagementsRequest, options?: RpcOptions): UnaryCall<ListStateManagementsRequest, ListStateManagementsResponse>;
}
/**
 * @generated from protobuf service FlutterLodz
 */
export class FlutterLodzClient implements IFlutterLodzClient, ServiceInfo {
    typeName = FlutterLodz.typeName;
    methods = FlutterLodz.methods;
    options = FlutterLodz.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: ProposeStateManagement(StateManagementProposal) returns (StateManagement);
     */
    proposeStateManagement(input: StateManagementProposal, options?: RpcOptions): UnaryCall<StateManagementProposal, StateManagement> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<StateManagementProposal, StateManagement>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ListStateManagements(ListStateManagementsRequest) returns (ListStateManagementsResponse);
     */
    listStateManagements(input: ListStateManagementsRequest, options?: RpcOptions): UnaryCall<ListStateManagementsRequest, ListStateManagementsResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListStateManagementsRequest, ListStateManagementsResponse>("unary", this._transport, method, opt, input);
    }
}
