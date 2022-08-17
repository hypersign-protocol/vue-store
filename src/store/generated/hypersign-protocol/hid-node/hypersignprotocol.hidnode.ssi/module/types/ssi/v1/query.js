/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Credential } from "../../ssi/v1/credential";
import { Params } from "../../ssi/v1/params";
import { Schema } from "../../ssi/v1/schema";
import { PageRequest } from "../../cosmos/base/query/v1beta1/pagination";
import { Did, Metadata } from "../../ssi/v1/did";
export const protobufPackage = "hypersignprotocol.hidnode.ssi";
const baseQueryCredentialRequest = { credId: "" };
export const QueryCredentialRequest = {
    encode(message, writer = Writer.create()) {
        if (message.credId !== "") {
            writer.uint32(10).string(message.credId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryCredentialRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryCredentialRequest };
        if (object.credId !== undefined && object.credId !== null) {
            message.credId = String(object.credId);
        }
        else {
            message.credId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.credId !== undefined && (obj.credId = message.credId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryCredentialRequest };
        if (object.credId !== undefined && object.credId !== null) {
            message.credId = object.credId;
        }
        else {
            message.credId = "";
        }
        return message;
    },
};
const baseQueryCredentialResponse = {};
export const QueryCredentialResponse = {
    encode(message, writer = Writer.create()) {
        if (message.credStatus !== undefined) {
            Credential.encode(message.credStatus, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryCredentialResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryCredentialResponse,
        };
        if (object.credStatus !== undefined && object.credStatus !== null) {
            message.credStatus = Credential.fromJSON(object.credStatus);
        }
        else {
            message.credStatus = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.credStatus !== undefined &&
            (obj.credStatus = message.credStatus
                ? Credential.toJSON(message.credStatus)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryCredentialResponse,
        };
        if (object.credStatus !== undefined && object.credStatus !== null) {
            message.credStatus = Credential.fromPartial(object.credStatus);
        }
        else {
            message.credStatus = undefined;
        }
        return message;
    },
};
const baseQueryParamsRequest = {};
export const QueryParamsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest };
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
    fromJSON(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
};
const baseQueryParamsResponse = {};
export const QueryParamsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseQueryGetSchemaRequest = { schemaId: "" };
export const QueryGetSchemaRequest = {
    encode(message, writer = Writer.create()) {
        if (message.schemaId !== "") {
            writer.uint32(10).string(message.schemaId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSchemaRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryGetSchemaRequest };
        if (object.schemaId !== undefined && object.schemaId !== null) {
            message.schemaId = String(object.schemaId);
        }
        else {
            message.schemaId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.schemaId !== undefined && (obj.schemaId = message.schemaId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSchemaRequest };
        if (object.schemaId !== undefined && object.schemaId !== null) {
            message.schemaId = object.schemaId;
        }
        else {
            message.schemaId = "";
        }
        return message;
    },
};
const baseQueryGetSchemaResponse = {};
export const QueryGetSchemaResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.schema) {
            Schema.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSchemaResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryGetSchemaResponse };
        message.schema = [];
        if (object.schema !== undefined && object.schema !== null) {
            for (const e of object.schema) {
                message.schema.push(Schema.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.schema) {
            obj.schema = message.schema.map((e) => e ? Schema.toJSON(e) : undefined);
        }
        else {
            obj.schema = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSchemaResponse };
        message.schema = [];
        if (object.schema !== undefined && object.schema !== null) {
            for (const e of object.schema) {
                message.schema.push(Schema.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQuerySchemaParamRequest = {};
export const QuerySchemaParamRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQuerySchemaParamRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQuerySchemaParamRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQuerySchemaParamRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQuerySchemaParamResponse = { totalCount: 0 };
export const QuerySchemaParamResponse = {
    encode(message, writer = Writer.create()) {
        if (message.totalCount !== 0) {
            writer.uint32(8).uint64(message.totalCount);
        }
        for (const v of message.schemaList) {
            Schema.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQuerySchemaParamResponse,
        };
        message.schemaList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalCount = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = {
            ...baseQuerySchemaParamResponse,
        };
        message.schemaList = [];
        if (object.totalCount !== undefined && object.totalCount !== null) {
            message.totalCount = Number(object.totalCount);
        }
        else {
            message.totalCount = 0;
        }
        if (object.schemaList !== undefined && object.schemaList !== null) {
            for (const e of object.schemaList) {
                message.schemaList.push(Schema.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.totalCount !== undefined && (obj.totalCount = message.totalCount);
        if (message.schemaList) {
            obj.schemaList = message.schemaList.map((e) => e ? Schema.toJSON(e) : undefined);
        }
        else {
            obj.schemaList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQuerySchemaParamResponse,
        };
        message.schemaList = [];
        if (object.totalCount !== undefined && object.totalCount !== null) {
            message.totalCount = object.totalCount;
        }
        else {
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
const baseQueryGetDidDocByIdRequest = { didId: "" };
export const QueryGetDidDocByIdRequest = {
    encode(message, writer = Writer.create()) {
        if (message.didId !== "") {
            writer.uint32(10).string(message.didId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetDidDocByIdRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.didId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetDidDocByIdRequest,
        };
        if (object.didId !== undefined && object.didId !== null) {
            message.didId = String(object.didId);
        }
        else {
            message.didId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.didId !== undefined && (obj.didId = message.didId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetDidDocByIdRequest,
        };
        if (object.didId !== undefined && object.didId !== null) {
            message.didId = object.didId;
        }
        else {
            message.didId = "";
        }
        return message;
    },
};
const baseQueryDidParamRequest = { count: false };
export const QueryDidParamRequest = {
    encode(message, writer = Writer.create()) {
        if (message.count === true) {
            writer.uint32(8).bool(message.count);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryDidParamRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryDidParamRequest };
        if (object.count !== undefined && object.count !== null) {
            message.count = Boolean(object.count);
        }
        else {
            message.count = false;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.count !== undefined && (obj.count = message.count);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryDidParamRequest };
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        else {
            message.count = false;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryDidParamResponse = { totalDidCount: 0 };
export const QueryDidParamResponse = {
    encode(message, writer = Writer.create()) {
        if (message.totalDidCount !== 0) {
            writer.uint32(8).uint64(message.totalDidCount);
        }
        for (const v of message.didDocList) {
            DidResolutionResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryDidParamResponse };
        message.didDocList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalDidCount = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.didDocList.push(DidResolutionResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryDidParamResponse };
        message.didDocList = [];
        if (object.totalDidCount !== undefined && object.totalDidCount !== null) {
            message.totalDidCount = Number(object.totalDidCount);
        }
        else {
            message.totalDidCount = 0;
        }
        if (object.didDocList !== undefined && object.didDocList !== null) {
            for (const e of object.didDocList) {
                message.didDocList.push(DidResolutionResponse.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.totalDidCount !== undefined &&
            (obj.totalDidCount = message.totalDidCount);
        if (message.didDocList) {
            obj.didDocList = message.didDocList.map((e) => e ? DidResolutionResponse.toJSON(e) : undefined);
        }
        else {
            obj.didDocList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryDidParamResponse };
        message.didDocList = [];
        if (object.totalDidCount !== undefined && object.totalDidCount !== null) {
            message.totalDidCount = object.totalDidCount;
        }
        else {
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
const baseDidResolutionResponse = {};
export const DidResolutionResponse = {
    encode(message, writer = Writer.create()) {
        if (message.didDocument !== undefined) {
            Did.encode(message.didDocument, writer.uint32(10).fork()).ldelim();
        }
        if (message.didDocumentMetadata !== undefined) {
            Metadata.encode(message.didDocumentMetadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDidResolutionResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.didDocument = Did.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.didDocumentMetadata = Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDidResolutionResponse };
        if (object.didDocument !== undefined && object.didDocument !== null) {
            message.didDocument = Did.fromJSON(object.didDocument);
        }
        else {
            message.didDocument = undefined;
        }
        if (object.didDocumentMetadata !== undefined &&
            object.didDocumentMetadata !== null) {
            message.didDocumentMetadata = Metadata.fromJSON(object.didDocumentMetadata);
        }
        else {
            message.didDocumentMetadata = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.didDocument !== undefined &&
            (obj.didDocument = message.didDocument
                ? Did.toJSON(message.didDocument)
                : undefined);
        message.didDocumentMetadata !== undefined &&
            (obj.didDocumentMetadata = message.didDocumentMetadata
                ? Metadata.toJSON(message.didDocumentMetadata)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDidResolutionResponse };
        if (object.didDocument !== undefined && object.didDocument !== null) {
            message.didDocument = Did.fromPartial(object.didDocument);
        }
        else {
            message.didDocument = undefined;
        }
        if (object.didDocumentMetadata !== undefined &&
            object.didDocumentMetadata !== null) {
            message.didDocumentMetadata = Metadata.fromPartial(object.didDocumentMetadata);
        }
        else {
            message.didDocumentMetadata = undefined;
        }
        return message;
    },
};
const baseQueryCredentialsRequest = {};
export const QueryCredentialsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryCredentialsRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryCredentialsRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryCredentialsRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryCredentialsResponse = { totalCount: 0 };
export const QueryCredentialsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.totalCount !== 0) {
            writer.uint32(8).uint64(message.totalCount);
        }
        for (const v of message.credentials) {
            Credential.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryCredentialsResponse,
        };
        message.credentials = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalCount = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.credentials.push(Credential.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryCredentialsResponse,
        };
        message.credentials = [];
        if (object.totalCount !== undefined && object.totalCount !== null) {
            message.totalCount = Number(object.totalCount);
        }
        else {
            message.totalCount = 0;
        }
        if (object.credentials !== undefined && object.credentials !== null) {
            for (const e of object.credentials) {
                message.credentials.push(Credential.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.totalCount !== undefined && (obj.totalCount = message.totalCount);
        if (message.credentials) {
            obj.credentials = message.credentials.map((e) => e ? Credential.toJSON(e) : undefined);
        }
        else {
            obj.credentials = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryCredentialsResponse,
        };
        message.credentials = [];
        if (object.totalCount !== undefined && object.totalCount !== null) {
            message.totalCount = object.totalCount;
        }
        else {
            message.totalCount = 0;
        }
        if (object.credentials !== undefined && object.credentials !== null) {
            for (const e of object.credentials) {
                message.credentials.push(Credential.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMarshalInput = { stringInput: "" };
export const MarshalInput = {
    encode(message, writer = Writer.create()) {
        if (message.stringInput !== "") {
            writer.uint32(10).string(message.stringInput);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMarshalInput };
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
    fromJSON(object) {
        const message = { ...baseMarshalInput };
        if (object.stringInput !== undefined && object.stringInput !== null) {
            message.stringInput = String(object.stringInput);
        }
        else {
            message.stringInput = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.stringInput !== undefined &&
            (obj.stringInput = message.stringInput);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMarshalInput };
        if (object.stringInput !== undefined && object.stringInput !== null) {
            message.stringInput = object.stringInput;
        }
        else {
            message.stringInput = "";
        }
        return message;
    },
};
const baseMarshalOutput = { unmarshalOutput: "" };
export const MarshalOutput = {
    encode(message, writer = Writer.create()) {
        if (message.unmarshalOutput !== "") {
            writer.uint32(10).string(message.unmarshalOutput);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMarshalOutput };
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
    fromJSON(object) {
        const message = { ...baseMarshalOutput };
        if (object.unmarshalOutput !== undefined &&
            object.unmarshalOutput !== null) {
            message.unmarshalOutput = String(object.unmarshalOutput);
        }
        else {
            message.unmarshalOutput = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.unmarshalOutput !== undefined &&
            (obj.unmarshalOutput = message.unmarshalOutput);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMarshalOutput };
        if (object.unmarshalOutput !== undefined &&
            object.unmarshalOutput !== null) {
            message.unmarshalOutput = object.unmarshalOutput;
        }
        else {
            message.unmarshalOutput = "";
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("hypersignprotocol.hidnode.ssi.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
    }
    GetSchema(request) {
        const data = QueryGetSchemaRequest.encode(request).finish();
        const promise = this.rpc.request("hypersignprotocol.hidnode.ssi.Query", "GetSchema", data);
        return promise.then((data) => QueryGetSchemaResponse.decode(new Reader(data)));
    }
    SchemaParam(request) {
        const data = QuerySchemaParamRequest.encode(request).finish();
        const promise = this.rpc.request("hypersignprotocol.hidnode.ssi.Query", "SchemaParam", data);
        return promise.then((data) => QuerySchemaParamResponse.decode(new Reader(data)));
    }
    ResolveDid(request) {
        const data = QueryGetDidDocByIdRequest.encode(request).finish();
        const promise = this.rpc.request("hypersignprotocol.hidnode.ssi.Query", "ResolveDid", data);
        return promise.then((data) => DidResolutionResponse.decode(new Reader(data)));
    }
    DidParam(request) {
        const data = QueryDidParamRequest.encode(request).finish();
        const promise = this.rpc.request("hypersignprotocol.hidnode.ssi.Query", "DidParam", data);
        return promise.then((data) => QueryDidParamResponse.decode(new Reader(data)));
    }
    QueryCredential(request) {
        const data = QueryCredentialRequest.encode(request).finish();
        const promise = this.rpc.request("hypersignprotocol.hidnode.ssi.Query", "QueryCredential", data);
        return promise.then((data) => QueryCredentialResponse.decode(new Reader(data)));
    }
    QueryCredentials(request) {
        const data = QueryCredentialsRequest.encode(request).finish();
        const promise = this.rpc.request("hypersignprotocol.hidnode.ssi.Query", "QueryCredentials", data);
        return promise.then((data) => QueryCredentialsResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
