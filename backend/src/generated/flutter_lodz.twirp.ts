import {
  TwirpContext,
  TwirpServer,
  RouterEvents,
  TwirpError,
  TwirpErrorCode,
  Interceptor,
  TwirpContentType,
  chainInterceptors,
} from "twirp-ts";
import {
  StateManagementProposal,
  StateManagement,
  ListStateManagementsRequest,
  ListStateManagementsResponse,
} from "./flutter_lodz";

//==================================//
//          Client Code             //
//==================================//

interface Rpc {
  request(
    service: string,
    method: string,
    contentType: "application/json" | "application/protobuf",
    data: object | Uint8Array
  ): Promise<object | Uint8Array>;
}

export interface FlutterLodzClient {
  ProposeStateManagement(
    request: StateManagementProposal
  ): Promise<StateManagement>;
  ListStateManagements(
    request: ListStateManagementsRequest
  ): Promise<ListStateManagementsResponse>;
}

export class FlutterLodzClientJSON implements FlutterLodzClient {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ProposeStateManagement.bind(this);
    this.ListStateManagements.bind(this);
  }
  ProposeStateManagement(
    request: StateManagementProposal
  ): Promise<StateManagement> {
    const data = StateManagementProposal.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    });
    const promise = this.rpc.request(
      "FlutterLodz",
      "ProposeStateManagement",
      "application/json",
      data as object
    );
    return promise.then((data) =>
      StateManagement.fromJson(data as any, { ignoreUnknownFields: true })
    );
  }

  ListStateManagements(
    request: ListStateManagementsRequest
  ): Promise<ListStateManagementsResponse> {
    const data = ListStateManagementsRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    });
    const promise = this.rpc.request(
      "FlutterLodz",
      "ListStateManagements",
      "application/json",
      data as object
    );
    return promise.then((data) =>
      ListStateManagementsResponse.fromJson(data as any, {
        ignoreUnknownFields: true,
      })
    );
  }
}

export class FlutterLodzClientProtobuf implements FlutterLodzClient {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ProposeStateManagement.bind(this);
    this.ListStateManagements.bind(this);
  }
  ProposeStateManagement(
    request: StateManagementProposal
  ): Promise<StateManagement> {
    const data = StateManagementProposal.toBinary(request);
    const promise = this.rpc.request(
      "FlutterLodz",
      "ProposeStateManagement",
      "application/protobuf",
      data
    );
    return promise.then((data) =>
      StateManagement.fromBinary(data as Uint8Array)
    );
  }

  ListStateManagements(
    request: ListStateManagementsRequest
  ): Promise<ListStateManagementsResponse> {
    const data = ListStateManagementsRequest.toBinary(request);
    const promise = this.rpc.request(
      "FlutterLodz",
      "ListStateManagements",
      "application/protobuf",
      data
    );
    return promise.then((data) =>
      ListStateManagementsResponse.fromBinary(data as Uint8Array)
    );
  }
}

//==================================//
//          Server Code             //
//==================================//

export interface FlutterLodzTwirp<T extends TwirpContext = TwirpContext> {
  ProposeStateManagement(
    ctx: T,
    request: StateManagementProposal
  ): Promise<StateManagement>;
  ListStateManagements(
    ctx: T,
    request: ListStateManagementsRequest
  ): Promise<ListStateManagementsResponse>;
}

export enum FlutterLodzMethod {
  ProposeStateManagement = "ProposeStateManagement",
  ListStateManagements = "ListStateManagements",
}

export const FlutterLodzMethodList = [
  FlutterLodzMethod.ProposeStateManagement,
  FlutterLodzMethod.ListStateManagements,
];

export function createFlutterLodzServer<T extends TwirpContext = TwirpContext>(
  service: FlutterLodzTwirp<T>
) {
  return new TwirpServer<FlutterLodzTwirp, T>({
    service,
    packageName: "",
    serviceName: "FlutterLodz",
    methodList: FlutterLodzMethodList,
    matchRoute: matchFlutterLodzRoute,
  });
}

function matchFlutterLodzRoute<T extends TwirpContext = TwirpContext>(
  method: string,
  events: RouterEvents<T>
) {
  switch (method) {
    case "ProposeStateManagement":
      return async (
        ctx: T,
        service: FlutterLodzTwirp,
        data: Buffer,
        interceptors?: Interceptor<
          T,
          StateManagementProposal,
          StateManagement
        >[]
      ) => {
        ctx = { ...ctx, methodName: "ProposeStateManagement" };
        await events.onMatch(ctx);
        return handleFlutterLodzProposeStateManagementRequest(
          ctx,
          service,
          data,
          interceptors
        );
      };
    case "ListStateManagements":
      return async (
        ctx: T,
        service: FlutterLodzTwirp,
        data: Buffer,
        interceptors?: Interceptor<
          T,
          ListStateManagementsRequest,
          ListStateManagementsResponse
        >[]
      ) => {
        ctx = { ...ctx, methodName: "ListStateManagements" };
        await events.onMatch(ctx);
        return handleFlutterLodzListStateManagementsRequest(
          ctx,
          service,
          data,
          interceptors
        );
      };
    default:
      events.onNotFound();
      const msg = `no handler found`;
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
  }
}

function handleFlutterLodzProposeStateManagementRequest<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: FlutterLodzTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, StateManagementProposal, StateManagement>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handleFlutterLodzProposeStateManagementJSON<T>(
        ctx,
        service,
        data,
        interceptors
      );
    case TwirpContentType.Protobuf:
      return handleFlutterLodzProposeStateManagementProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
  }
}

function handleFlutterLodzListStateManagementsRequest<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: FlutterLodzTwirp,
  data: Buffer,
  interceptors?: Interceptor<
    T,
    ListStateManagementsRequest,
    ListStateManagementsResponse
  >[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handleFlutterLodzListStateManagementsJSON<T>(
        ctx,
        service,
        data,
        interceptors
      );
    case TwirpContentType.Protobuf:
      return handleFlutterLodzListStateManagementsProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
  }
}
async function handleFlutterLodzProposeStateManagementJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: FlutterLodzTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, StateManagementProposal, StateManagement>[]
) {
  let request: StateManagementProposal;
  let response: StateManagement;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = StateManagementProposal.fromJson(body, {
      ignoreUnknownFields: true,
    });
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      StateManagementProposal,
      StateManagement
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.ProposeStateManagement(ctx, inputReq);
    });
  } else {
    response = await service.ProposeStateManagement(ctx, request!);
  }

  return JSON.stringify(
    StateManagement.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  );
}

async function handleFlutterLodzListStateManagementsJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: FlutterLodzTwirp,
  data: Buffer,
  interceptors?: Interceptor<
    T,
    ListStateManagementsRequest,
    ListStateManagementsResponse
  >[]
) {
  let request: ListStateManagementsRequest;
  let response: ListStateManagementsResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = ListStateManagementsRequest.fromJson(body, {
      ignoreUnknownFields: true,
    });
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      ListStateManagementsRequest,
      ListStateManagementsResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.ListStateManagements(ctx, inputReq);
    });
  } else {
    response = await service.ListStateManagements(ctx, request!);
  }

  return JSON.stringify(
    ListStateManagementsResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  );
}
async function handleFlutterLodzProposeStateManagementProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: FlutterLodzTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, StateManagementProposal, StateManagement>[]
) {
  let request: StateManagementProposal;
  let response: StateManagement;

  try {
    request = StateManagementProposal.fromBinary(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      StateManagementProposal,
      StateManagement
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.ProposeStateManagement(ctx, inputReq);
    });
  } else {
    response = await service.ProposeStateManagement(ctx, request!);
  }

  return Buffer.from(StateManagement.toBinary(response));
}

async function handleFlutterLodzListStateManagementsProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: FlutterLodzTwirp,
  data: Buffer,
  interceptors?: Interceptor<
    T,
    ListStateManagementsRequest,
    ListStateManagementsResponse
  >[]
) {
  let request: ListStateManagementsRequest;
  let response: ListStateManagementsResponse;

  try {
    request = ListStateManagementsRequest.fromBinary(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      ListStateManagementsRequest,
      ListStateManagementsResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.ListStateManagements(ctx, inputReq);
    });
  } else {
    response = await service.ListStateManagements(ctx, request!);
  }

  return Buffer.from(ListStateManagementsResponse.toBinary(response));
}
