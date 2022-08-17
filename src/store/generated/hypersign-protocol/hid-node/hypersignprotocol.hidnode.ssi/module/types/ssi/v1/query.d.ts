import { Reader, Writer } from "protobufjs/minimal";
import { Credential } from "../../ssi/v1/credential";
import { Params } from "../../ssi/v1/params";
import { Schema } from "../../ssi/v1/schema";
import { PageRequest } from "../../cosmos/base/query/v1beta1/pagination";
import { Did, Metadata } from "../../ssi/v1/did";
export declare const protobufPackage = "hypersignprotocol.hidnode.ssi";
export interface QueryCredentialRequest {
    credId: string;
}
export interface QueryCredentialResponse {
    credStatus: Credential | undefined;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
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
    didDocument: Did | undefined;
    didDocumentMetadata: Metadata | undefined;
}
export interface QueryCredentialsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryCredentialsResponse {
    totalCount: number;
    credentials: Credential[];
}
export interface MarshalInput {
    stringInput: string;
}
export interface MarshalOutput {
    unmarshalOutput: string;
}
export declare const QueryCredentialRequest: {
    encode(message: QueryCredentialRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryCredentialRequest;
    fromJSON(object: any): QueryCredentialRequest;
    toJSON(message: QueryCredentialRequest): unknown;
    fromPartial(object: DeepPartial<QueryCredentialRequest>): QueryCredentialRequest;
};
export declare const QueryCredentialResponse: {
    encode(message: QueryCredentialResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryCredentialResponse;
    fromJSON(object: any): QueryCredentialResponse;
    toJSON(message: QueryCredentialResponse): unknown;
    fromPartial(object: DeepPartial<QueryCredentialResponse>): QueryCredentialResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetSchemaRequest: {
    encode(message: QueryGetSchemaRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSchemaRequest;
    fromJSON(object: any): QueryGetSchemaRequest;
    toJSON(message: QueryGetSchemaRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSchemaRequest>): QueryGetSchemaRequest;
};
export declare const QueryGetSchemaResponse: {
    encode(message: QueryGetSchemaResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSchemaResponse;
    fromJSON(object: any): QueryGetSchemaResponse;
    toJSON(message: QueryGetSchemaResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSchemaResponse>): QueryGetSchemaResponse;
};
export declare const QuerySchemaParamRequest: {
    encode(message: QuerySchemaParamRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QuerySchemaParamRequest;
    fromJSON(object: any): QuerySchemaParamRequest;
    toJSON(message: QuerySchemaParamRequest): unknown;
    fromPartial(object: DeepPartial<QuerySchemaParamRequest>): QuerySchemaParamRequest;
};
export declare const QuerySchemaParamResponse: {
    encode(message: QuerySchemaParamResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QuerySchemaParamResponse;
    fromJSON(object: any): QuerySchemaParamResponse;
    toJSON(message: QuerySchemaParamResponse): unknown;
    fromPartial(object: DeepPartial<QuerySchemaParamResponse>): QuerySchemaParamResponse;
};
export declare const QueryGetDidDocByIdRequest: {
    encode(message: QueryGetDidDocByIdRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDidDocByIdRequest;
    fromJSON(object: any): QueryGetDidDocByIdRequest;
    toJSON(message: QueryGetDidDocByIdRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetDidDocByIdRequest>): QueryGetDidDocByIdRequest;
};
export declare const QueryDidParamRequest: {
    encode(message: QueryDidParamRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryDidParamRequest;
    fromJSON(object: any): QueryDidParamRequest;
    toJSON(message: QueryDidParamRequest): unknown;
    fromPartial(object: DeepPartial<QueryDidParamRequest>): QueryDidParamRequest;
};
export declare const QueryDidParamResponse: {
    encode(message: QueryDidParamResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryDidParamResponse;
    fromJSON(object: any): QueryDidParamResponse;
    toJSON(message: QueryDidParamResponse): unknown;
    fromPartial(object: DeepPartial<QueryDidParamResponse>): QueryDidParamResponse;
};
export declare const DidResolutionResponse: {
    encode(message: DidResolutionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): DidResolutionResponse;
    fromJSON(object: any): DidResolutionResponse;
    toJSON(message: DidResolutionResponse): unknown;
    fromPartial(object: DeepPartial<DidResolutionResponse>): DidResolutionResponse;
};
export declare const QueryCredentialsRequest: {
    encode(message: QueryCredentialsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryCredentialsRequest;
    fromJSON(object: any): QueryCredentialsRequest;
    toJSON(message: QueryCredentialsRequest): unknown;
    fromPartial(object: DeepPartial<QueryCredentialsRequest>): QueryCredentialsRequest;
};
export declare const QueryCredentialsResponse: {
    encode(message: QueryCredentialsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryCredentialsResponse;
    fromJSON(object: any): QueryCredentialsResponse;
    toJSON(message: QueryCredentialsResponse): unknown;
    fromPartial(object: DeepPartial<QueryCredentialsResponse>): QueryCredentialsResponse;
};
export declare const MarshalInput: {
    encode(message: MarshalInput, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MarshalInput;
    fromJSON(object: any): MarshalInput;
    toJSON(message: MarshalInput): unknown;
    fromPartial(object: DeepPartial<MarshalInput>): MarshalInput;
};
export declare const MarshalOutput: {
    encode(message: MarshalOutput, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MarshalOutput;
    fromJSON(object: any): MarshalOutput;
    toJSON(message: MarshalOutput): unknown;
    fromPartial(object: DeepPartial<MarshalOutput>): MarshalOutput;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Get the Schema for a specified Schema Id */
    GetSchema(request: QueryGetSchemaRequest): Promise<QueryGetSchemaResponse>;
    /** Get the list of Schemas and count */
    SchemaParam(request: QuerySchemaParamRequest): Promise<QuerySchemaParamResponse>;
    /** Get the Did Document for a specified Did Id */
    ResolveDid(request: QueryGetDidDocByIdRequest): Promise<DidResolutionResponse>;
    /** Get the list of registered Did Documents and count */
    DidParam(request: QueryDidParamRequest): Promise<QueryDidParamResponse>;
    /** Get the Credential Status for a given credential Id */
    QueryCredential(request: QueryCredentialRequest): Promise<QueryCredentialResponse>;
    /** Get all the registed Credential Statuses */
    QueryCredentials(request: QueryCredentialsRequest): Promise<QueryCredentialsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    GetSchema(request: QueryGetSchemaRequest): Promise<QueryGetSchemaResponse>;
    SchemaParam(request: QuerySchemaParamRequest): Promise<QuerySchemaParamResponse>;
    ResolveDid(request: QueryGetDidDocByIdRequest): Promise<DidResolutionResponse>;
    DidParam(request: QueryDidParamRequest): Promise<QueryDidParamResponse>;
    QueryCredential(request: QueryCredentialRequest): Promise<QueryCredentialResponse>;
    QueryCredentials(request: QueryCredentialsRequest): Promise<QueryCredentialsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
