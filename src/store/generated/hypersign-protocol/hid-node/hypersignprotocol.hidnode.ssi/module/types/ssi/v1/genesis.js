/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "hypersignprotocol.hidnode.ssi";
const baseGenesisState = { didMethod: "", didNamespace: "" };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.didMethod !== "") {
            writer.uint32(10).string(message.didMethod);
        }
        if (message.didNamespace !== "") {
            writer.uint32(18).string(message.didNamespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.didMethod = reader.string();
                    break;
                case 2:
                    message.didNamespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        if (object.didMethod !== undefined && object.didMethod !== null) {
            message.didMethod = String(object.didMethod);
        }
        else {
            message.didMethod = "";
        }
        if (object.didNamespace !== undefined && object.didNamespace !== null) {
            message.didNamespace = String(object.didNamespace);
        }
        else {
            message.didNamespace = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.didMethod !== undefined && (obj.didMethod = message.didMethod);
        message.didNamespace !== undefined &&
            (obj.didNamespace = message.didNamespace);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        if (object.didMethod !== undefined && object.didMethod !== null) {
            message.didMethod = object.didMethod;
        }
        else {
            message.didMethod = "";
        }
        if (object.didNamespace !== undefined && object.didNamespace !== null) {
            message.didNamespace = object.didNamespace;
        }
        else {
            message.didNamespace = "";
        }
        return message;
    },
};
