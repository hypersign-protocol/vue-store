/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Credential } from "../../ssi/v1/credential";
import { Params } from "../../ssi/v1/params";
import { Schema } from "../../ssi/v1/schema";
import { PageRequest } from "../../cosmos/base/query/v1beta1/pagination";
import { Did, Metadata, DidResolveMeta } from "../../ssi/v1/did";

export const protobufPackage = "hypersignprotocol.hidnode.ssi";

export interface QueryCredentialRequest {
  credId: string;
}

export interface QueryCredentialResponse {
  credStatus: Credential | undefined;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetSchemaRequest {
  schemaId: string;
}

export interface QueryGetSchemaResponse {
  schema: Schema[];
}

export interface QuerySchemaParamRequest {
  pagination: PageRequest | undefined;
}

export interface QuerySchemaParamResponse {
  totalCount: number;
  schemaList: Schema[];
}

export interface QueryGetDidDocByIdRequest {
  didId: string;
  versionId: string;
}

export interface QueryGetDidDocByIdResponse {
  _at_context: string;
  didDocument: Did | undefined;
  didDocumentMetadata: Metadata | undefined;
  didResolutionMetadata: DidResolveMeta | undefined;
}

export interface QueryDidParamRequest {
  count: boolean;
  pagination: PageRequest | undefined;
}

export interface QueryDidParamResponse {
  totalDidCount: number;
  didDocList: DidResolutionResponse[];
}

export interface DidResolutionResponse {
  _at_context: string;
  didDocument: Did | undefined;
  didDocumentMetadata: Metadata | undefined;
  didResolutionMetadata: DidResolveMeta | undefined;
}

export interface MarshalInput {
  stringInput: string;
}

export interface MarshalOutput {
  unmarshalOutput: string;
}

const baseQueryCredentialRequest: object = { credId: "" };

export const QueryCredentialRequest = {
  encode(
    message: QueryCredentialRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.credId !== "") {
      writer.uint32(10).string(message.credId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCredentialRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCredentialRequest } as QueryCredentialRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCredentialRequest {
    const message = { ...baseQueryCredentialRequest } as QueryCredentialRequest;
    if (object.credId !== undefined && object.credId !== null) {
      message.credId = String(object.credId);
    } else {
      message.credId = "";
    }
    return message;
  },

  toJSON(message: QueryCredentialRequest): unknown {
    const obj: any = {};
    message.credId !== undefined && (obj.credId = message.credId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCredentialRequest>
  ): QueryCredentialRequest {
    const message = { ...baseQueryCredentialRequest } as QueryCredentialRequest;
    if (object.credId !== undefined && object.credId !== null) {
      message.credId = object.credId;
    } else {
      message.credId = "";
    }
    return message;
  },
};

const baseQueryCredentialResponse: object = {};

export const QueryCredentialResponse = {
  encode(
    message: QueryCredentialResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.credStatus !== undefined) {
      Credential.encode(message.credStatus, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCredentialResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCredentialResponse,
    } as QueryCredentialResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credStatus = Credential.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCredentialResponse {
    const message = {
      ...baseQueryCredentialResponse,
    } as QueryCredentialResponse;
    if (object.credStatus !== undefined && object.credStatus !== null) {
      message.credStatus = Credential.fromJSON(object.credStatus);
    } else {
      message.credStatus = undefined;
    }
    return message;
  },

  toJSON(message: QueryCredentialResponse): unknown {
    const obj: any = {};
    message.credStatus !== undefined &&
      (obj.credStatus = message.credStatus
        ? Credential.toJSON(message.credStatus)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCredentialResponse>
  ): QueryCredentialResponse {
    const message = {
      ...baseQueryCredentialResponse,
    } as QueryCredentialResponse;
    if (object.credStatus !== undefined && object.credStatus !== null) {
      message.credStatus = Credential.fromPartial(object.credStatus);
    } else {
      message.credStatus = undefined;
    }
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetSchemaRequest: object = { schemaId: "" };

export const QueryGetSchemaRequest = {
  encode(
    message: QueryGetSchemaRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.schemaId !== "") {
      writer.uint32(10).string(message.schemaId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSchemaRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetSchemaRequest } as QueryGetSchemaRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSchemaRequest {
    const message = { ...baseQueryGetSchemaRequest } as QueryGetSchemaRequest;
    if (object.schemaId !== undefined && object.schemaId !== null) {
      message.schemaId = String(object.schemaId);
    } else {
      message.schemaId = "";
    }
    return message;
  },

  toJSON(message: QueryGetSchemaRequest): unknown {
    const obj: any = {};
    message.schemaId !== undefined && (obj.schemaId = message.schemaId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSchemaRequest>
  ): QueryGetSchemaRequest {
    const message = { ...baseQueryGetSchemaRequest } as QueryGetSchemaRequest;
    if (object.schemaId !== undefined && object.schemaId !== null) {
      message.schemaId = object.schemaId;
    } else {
      message.schemaId = "";
    }
    return message;
  },
};

const baseQueryGetSchemaResponse: object = {};

export const QueryGetSchemaResponse = {
  encode(
    message: QueryGetSchemaResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.schema) {
      Schema.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSchemaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetSchemaResponse } as QueryGetSchemaResponse;
    message.schema = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schema.push(Schema.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSchemaResponse {
    const message = { ...baseQueryGetSchemaResponse } as QueryGetSchemaResponse;
    message.schema = [];
    if (object.schema !== undefined && object.schema !== null) {
      for (const e of object.schema) {
        message.schema.push(Schema.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryGetSchemaResponse): unknown {
    const obj: any = {};
    if (message.schema) {
      obj.schema = message.schema.map((e) =>
        e ? Schema.toJSON(e) : undefined
      );
    } else {
      obj.schema = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSchemaResponse>
  ): QueryGetSchemaResponse {
    const message = { ...baseQueryGetSchemaResponse } as QueryGetSchemaResponse;
    message.schema = [];
    if (object.schema !== undefined && object.schema !== null) {
      for (const e of object.schema) {
        message.schema.push(Schema.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQuerySchemaParamRequest: object = {};

export const QuerySchemaParamRequest = {
  encode(
    message: QuerySchemaParamRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QuerySchemaParamRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySchemaParamRequest,
    } as QuerySchemaParamRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySchemaParamRequest {
    const message = {
      ...baseQuerySchemaParamRequest,
    } as QuerySchemaParamRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QuerySchemaParamRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySchemaParamRequest>
  ): QuerySchemaParamRequest {
    const message = {
      ...baseQuerySchemaParamRequest,
    } as QuerySchemaParamRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQuerySchemaParamResponse: object = { totalCount: 0 };

export const QuerySchemaParamResponse = {
  encode(
    message: QuerySchemaParamResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.totalCount !== 0) {
      writer.uint32(8).uint64(message.totalCount);
    }
    for (const v of message.schemaList) {
      Schema.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QuerySchemaParamResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySchemaParamResponse,
    } as QuerySchemaParamResponse;
    message.schemaList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCount = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.schemaList.push(Schema.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySchemaParamResponse {
    const message = {
      ...baseQuerySchemaParamResponse,
    } as QuerySchemaParamResponse;
    message.schemaList = [];
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    if (object.schemaList !== undefined && object.schemaList !== null) {
      for (const e of object.schemaList) {
        message.schemaList.push(Schema.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QuerySchemaParamResponse): unknown {
    const obj: any = {};
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    if (message.schemaList) {
      obj.schemaList = message.schemaList.map((e) =>
        e ? Schema.toJSON(e) : undefined
      );
    } else {
      obj.schemaList = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySchemaParamResponse>
  ): QuerySchemaParamResponse {
    const message = {
      ...baseQuerySchemaParamResponse,
    } as QuerySchemaParamResponse;
    message.schemaList = [];
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    if (object.schemaList !== undefined && object.schemaList !== null) {
      for (const e of object.schemaList) {
        message.schemaList.push(Schema.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryGetDidDocByIdRequest: object = { didId: "", versionId: "" };

export const QueryGetDidDocByIdRequest = {
  encode(
    message: QueryGetDidDocByIdRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.didId !== "") {
      writer.uint32(10).string(message.didId);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDidDocByIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDidDocByIdRequest,
    } as QueryGetDidDocByIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.didId = reader.string();
          break;
        case 2:
          message.versionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDidDocByIdRequest {
    const message = {
      ...baseQueryGetDidDocByIdRequest,
    } as QueryGetDidDocByIdRequest;
    if (object.didId !== undefined && object.didId !== null) {
      message.didId = String(object.didId);
    } else {
      message.didId = "";
    }
    if (object.versionId !== undefined && object.versionId !== null) {
      message.versionId = String(object.versionId);
    } else {
      message.versionId = "";
    }
    return message;
  },

  toJSON(message: QueryGetDidDocByIdRequest): unknown {
    const obj: any = {};
    message.didId !== undefined && (obj.didId = message.didId);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDidDocByIdRequest>
  ): QueryGetDidDocByIdRequest {
    const message = {
      ...baseQueryGetDidDocByIdRequest,
    } as QueryGetDidDocByIdRequest;
    if (object.didId !== undefined && object.didId !== null) {
      message.didId = object.didId;
    } else {
      message.didId = "";
    }
    if (object.versionId !== undefined && object.versionId !== null) {
      message.versionId = object.versionId;
    } else {
      message.versionId = "";
    }
    return message;
  },
};

const baseQueryGetDidDocByIdResponse: object = { _at_context: "" };

export const QueryGetDidDocByIdResponse = {
  encode(
    message: QueryGetDidDocByIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message._at_context !== "") {
      writer.uint32(10).string(message._at_context);
    }
    if (message.didDocument !== undefined) {
      Did.encode(message.didDocument, writer.uint32(18).fork()).ldelim();
    }
    if (message.didDocumentMetadata !== undefined) {
      Metadata.encode(
        message.didDocumentMetadata,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.didResolutionMetadata !== undefined) {
      DidResolveMeta.encode(
        message.didResolutionMetadata,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDidDocByIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDidDocByIdResponse,
    } as QueryGetDidDocByIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message._at_context = reader.string();
          break;
        case 2:
          message.didDocument = Did.decode(reader, reader.uint32());
          break;
        case 3:
          message.didDocumentMetadata = Metadata.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.didResolutionMetadata = DidResolveMeta.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDidDocByIdResponse {
    const message = {
      ...baseQueryGetDidDocByIdResponse,
    } as QueryGetDidDocByIdResponse;
    if (object._at_context !== undefined && object._at_context !== null) {
      message._at_context = String(object._at_context);
    } else {
      message._at_context = "";
    }
    if (object.didDocument !== undefined && object.didDocument !== null) {
      message.didDocument = Did.fromJSON(object.didDocument);
    } else {
      message.didDocument = undefined;
    }
    if (
      object.didDocumentMetadata !== undefined &&
      object.didDocumentMetadata !== null
    ) {
      message.didDocumentMetadata = Metadata.fromJSON(
        object.didDocumentMetadata
      );
    } else {
      message.didDocumentMetadata = undefined;
    }
    if (
      object.didResolutionMetadata !== undefined &&
      object.didResolutionMetadata !== null
    ) {
      message.didResolutionMetadata = DidResolveMeta.fromJSON(
        object.didResolutionMetadata
      );
    } else {
      message.didResolutionMetadata = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDidDocByIdResponse): unknown {
    const obj: any = {};
    message._at_context !== undefined &&
      (obj._at_context = message._at_context);
    message.didDocument !== undefined &&
      (obj.didDocument = message.didDocument
        ? Did.toJSON(message.didDocument)
        : undefined);
    message.didDocumentMetadata !== undefined &&
      (obj.didDocumentMetadata = message.didDocumentMetadata
        ? Metadata.toJSON(message.didDocumentMetadata)
        : undefined);
    message.didResolutionMetadata !== undefined &&
      (obj.didResolutionMetadata = message.didResolutionMetadata
        ? DidResolveMeta.toJSON(message.didResolutionMetadata)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDidDocByIdResponse>
  ): QueryGetDidDocByIdResponse {
    const message = {
      ...baseQueryGetDidDocByIdResponse,
    } as QueryGetDidDocByIdResponse;
    if (object._at_context !== undefined && object._at_context !== null) {
      message._at_context = object._at_context;
    } else {
      message._at_context = "";
    }
    if (object.didDocument !== undefined && object.didDocument !== null) {
      message.didDocument = Did.fromPartial(object.didDocument);
    } else {
      message.didDocument = undefined;
    }
    if (
      object.didDocumentMetadata !== undefined &&
      object.didDocumentMetadata !== null
    ) {
      message.didDocumentMetadata = Metadata.fromPartial(
        object.didDocumentMetadata
      );
    } else {
      message.didDocumentMetadata = undefined;
    }
    if (
      object.didResolutionMetadata !== undefined &&
      object.didResolutionMetadata !== null
    ) {
      message.didResolutionMetadata = DidResolveMeta.fromPartial(
        object.didResolutionMetadata
      );
    } else {
      message.didResolutionMetadata = undefined;
    }
    return message;
  },
};

const baseQueryDidParamRequest: object = { count: false };

export const QueryDidParamRequest = {
  encode(
    message: QueryDidParamRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.count === true) {
      writer.uint32(8).bool(message.count);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryDidParamRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDidParamRequest } as QueryDidParamRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = reader.bool();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDidParamRequest {
    const message = { ...baseQueryDidParamRequest } as QueryDidParamRequest;
    if (object.count !== undefined && object.count !== null) {
      message.count = Boolean(object.count);
    } else {
      message.count = false;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryDidParamRequest): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = message.count);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDidParamRequest>): QueryDidParamRequest {
    const message = { ...baseQueryDidParamRequest } as QueryDidParamRequest;
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = false;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryDidParamResponse: object = { totalDidCount: 0 };

export const QueryDidParamResponse = {
  encode(
    message: QueryDidParamResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.totalDidCount !== 0) {
      writer.uint32(8).uint64(message.totalDidCount);
    }
    for (const v of message.didDocList) {
      DidResolutionResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryDidParamResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDidParamResponse } as QueryDidParamResponse;
    message.didDocList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalDidCount = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.didDocList.push(
            DidResolutionResponse.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDidParamResponse {
    const message = { ...baseQueryDidParamResponse } as QueryDidParamResponse;
    message.didDocList = [];
    if (object.totalDidCount !== undefined && object.totalDidCount !== null) {
      message.totalDidCount = Number(object.totalDidCount);
    } else {
      message.totalDidCount = 0;
    }
    if (object.didDocList !== undefined && object.didDocList !== null) {
      for (const e of object.didDocList) {
        message.didDocList.push(DidResolutionResponse.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryDidParamResponse): unknown {
    const obj: any = {};
    message.totalDidCount !== undefined &&
      (obj.totalDidCount = message.totalDidCount);
    if (message.didDocList) {
      obj.didDocList = message.didDocList.map((e) =>
        e ? DidResolutionResponse.toJSON(e) : undefined
      );
    } else {
      obj.didDocList = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDidParamResponse>
  ): QueryDidParamResponse {
    const message = { ...baseQueryDidParamResponse } as QueryDidParamResponse;
    message.didDocList = [];
    if (object.totalDidCount !== undefined && object.totalDidCount !== null) {
      message.totalDidCount = object.totalDidCount;
    } else {
      message.totalDidCount = 0;
    }
    if (object.didDocList !== undefined && object.didDocList !== null) {
      for (const e of object.didDocList) {
        message.didDocList.push(DidResolutionResponse.fromPartial(e));
      }
    }
    return message;
  },
};

const baseDidResolutionResponse: object = { _at_context: "" };

export const DidResolutionResponse = {
  encode(
    message: DidResolutionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message._at_context !== "") {
      writer.uint32(10).string(message._at_context);
    }
    if (message.didDocument !== undefined) {
      Did.encode(message.didDocument, writer.uint32(18).fork()).ldelim();
    }
    if (message.didDocumentMetadata !== undefined) {
      Metadata.encode(
        message.didDocumentMetadata,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.didResolutionMetadata !== undefined) {
      DidResolveMeta.encode(
        message.didResolutionMetadata,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DidResolutionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDidResolutionResponse } as DidResolutionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message._at_context = reader.string();
          break;
        case 2:
          message.didDocument = Did.decode(reader, reader.uint32());
          break;
        case 3:
          message.didDocumentMetadata = Metadata.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.didResolutionMetadata = DidResolveMeta.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DidResolutionResponse {
    const message = { ...baseDidResolutionResponse } as DidResolutionResponse;
    if (object._at_context !== undefined && object._at_context !== null) {
      message._at_context = String(object._at_context);
    } else {
      message._at_context = "";
    }
    if (object.didDocument !== undefined && object.didDocument !== null) {
      message.didDocument = Did.fromJSON(object.didDocument);
    } else {
      message.didDocument = undefined;
    }
    if (
      object.didDocumentMetadata !== undefined &&
      object.didDocumentMetadata !== null
    ) {
      message.didDocumentMetadata = Metadata.fromJSON(
        object.didDocumentMetadata
      );
    } else {
      message.didDocumentMetadata = undefined;
    }
    if (
      object.didResolutionMetadata !== undefined &&
      object.didResolutionMetadata !== null
    ) {
      message.didResolutionMetadata = DidResolveMeta.fromJSON(
        object.didResolutionMetadata
      );
    } else {
      message.didResolutionMetadata = undefined;
    }
    return message;
  },

  toJSON(message: DidResolutionResponse): unknown {
    const obj: any = {};
    message._at_context !== undefined &&
      (obj._at_context = message._at_context);
    message.didDocument !== undefined &&
      (obj.didDocument = message.didDocument
        ? Did.toJSON(message.didDocument)
        : undefined);
    message.didDocumentMetadata !== undefined &&
      (obj.didDocumentMetadata = message.didDocumentMetadata
        ? Metadata.toJSON(message.didDocumentMetadata)
        : undefined);
    message.didResolutionMetadata !== undefined &&
      (obj.didResolutionMetadata = message.didResolutionMetadata
        ? DidResolveMeta.toJSON(message.didResolutionMetadata)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DidResolutionResponse>
  ): DidResolutionResponse {
    const message = { ...baseDidResolutionResponse } as DidResolutionResponse;
    if (object._at_context !== undefined && object._at_context !== null) {
      message._at_context = object._at_context;
    } else {
      message._at_context = "";
    }
    if (object.didDocument !== undefined && object.didDocument !== null) {
      message.didDocument = Did.fromPartial(object.didDocument);
    } else {
      message.didDocument = undefined;
    }
    if (
      object.didDocumentMetadata !== undefined &&
      object.didDocumentMetadata !== null
    ) {
      message.didDocumentMetadata = Metadata.fromPartial(
        object.didDocumentMetadata
      );
    } else {
      message.didDocumentMetadata = undefined;
    }
    if (
      object.didResolutionMetadata !== undefined &&
      object.didResolutionMetadata !== null
    ) {
      message.didResolutionMetadata = DidResolveMeta.fromPartial(
        object.didResolutionMetadata
      );
    } else {
      message.didResolutionMetadata = undefined;
    }
    return message;
  },
};

const baseMarshalInput: object = { stringInput: "" };

export const MarshalInput = {
  encode(message: MarshalInput, writer: Writer = Writer.create()): Writer {
    if (message.stringInput !== "") {
      writer.uint32(10).string(message.stringInput);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MarshalInput {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMarshalInput } as MarshalInput;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stringInput = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarshalInput {
    const message = { ...baseMarshalInput } as MarshalInput;
    if (object.stringInput !== undefined && object.stringInput !== null) {
      message.stringInput = String(object.stringInput);
    } else {
      message.stringInput = "";
    }
    return message;
  },

  toJSON(message: MarshalInput): unknown {
    const obj: any = {};
    message.stringInput !== undefined &&
      (obj.stringInput = message.stringInput);
    return obj;
  },

  fromPartial(object: DeepPartial<MarshalInput>): MarshalInput {
    const message = { ...baseMarshalInput } as MarshalInput;
    if (object.stringInput !== undefined && object.stringInput !== null) {
      message.stringInput = object.stringInput;
    } else {
      message.stringInput = "";
    }
    return message;
  },
};

const baseMarshalOutput: object = { unmarshalOutput: "" };

export const MarshalOutput = {
  encode(message: MarshalOutput, writer: Writer = Writer.create()): Writer {
    if (message.unmarshalOutput !== "") {
      writer.uint32(10).string(message.unmarshalOutput);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MarshalOutput {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMarshalOutput } as MarshalOutput;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unmarshalOutput = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarshalOutput {
    const message = { ...baseMarshalOutput } as MarshalOutput;
    if (
      object.unmarshalOutput !== undefined &&
      object.unmarshalOutput !== null
    ) {
      message.unmarshalOutput = String(object.unmarshalOutput);
    } else {
      message.unmarshalOutput = "";
    }
    return message;
  },

  toJSON(message: MarshalOutput): unknown {
    const obj: any = {};
    message.unmarshalOutput !== undefined &&
      (obj.unmarshalOutput = message.unmarshalOutput);
    return obj;
  },

  fromPartial(object: DeepPartial<MarshalOutput>): MarshalOutput {
    const message = { ...baseMarshalOutput } as MarshalOutput;
    if (
      object.unmarshalOutput !== undefined &&
      object.unmarshalOutput !== null
    ) {
      message.unmarshalOutput = object.unmarshalOutput;
    } else {
      message.unmarshalOutput = "";
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of GetSchema items. */
  GetSchema(request: QueryGetSchemaRequest): Promise<QueryGetSchemaResponse>;
  /** Schema Param */
  SchemaParam(
    request: QuerySchemaParamRequest
  ): Promise<QuerySchemaParamResponse>;
  /** Resolve DID */
  ResolveDid(
    request: QueryGetDidDocByIdRequest
  ): Promise<QueryGetDidDocByIdResponse>;
  /** Did Param */
  DidParam(request: QueryDidParamRequest): Promise<QueryDidParamResponse>;
  /** Query Credential */
  QueryCredential(
    request: QueryCredentialRequest
  ): Promise<QueryCredentialResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hypersignprotocol.hidnode.ssi.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  GetSchema(request: QueryGetSchemaRequest): Promise<QueryGetSchemaResponse> {
    const data = QueryGetSchemaRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hypersignprotocol.hidnode.ssi.Query",
      "GetSchema",
      data
    );
    return promise.then((data) =>
      QueryGetSchemaResponse.decode(new Reader(data))
    );
  }

  SchemaParam(
    request: QuerySchemaParamRequest
  ): Promise<QuerySchemaParamResponse> {
    const data = QuerySchemaParamRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hypersignprotocol.hidnode.ssi.Query",
      "SchemaParam",
      data
    );
    return promise.then((data) =>
      QuerySchemaParamResponse.decode(new Reader(data))
    );
  }

  ResolveDid(
    request: QueryGetDidDocByIdRequest
  ): Promise<QueryGetDidDocByIdResponse> {
    const data = QueryGetDidDocByIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hypersignprotocol.hidnode.ssi.Query",
      "ResolveDid",
      data
    );
    return promise.then((data) =>
      QueryGetDidDocByIdResponse.decode(new Reader(data))
    );
  }

  DidParam(request: QueryDidParamRequest): Promise<QueryDidParamResponse> {
    const data = QueryDidParamRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hypersignprotocol.hidnode.ssi.Query",
      "DidParam",
      data
    );
    return promise.then((data) =>
      QueryDidParamResponse.decode(new Reader(data))
    );
  }

  QueryCredential(
    request: QueryCredentialRequest
  ): Promise<QueryCredentialResponse> {
    const data = QueryCredentialRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hypersignprotocol.hidnode.ssi.Query",
      "QueryCredential",
      data
    );
    return promise.then((data) =>
      QueryCredentialResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
