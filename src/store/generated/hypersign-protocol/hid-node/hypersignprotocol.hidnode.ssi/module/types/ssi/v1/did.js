/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "hypersignprotocol.hidnode.ssi";
const baseDid = {
    context: "",
    id: "",
    controller: "",
    alsoKnownAs: "",
    authentication: "",
    assertionMethod: "",
    keyAgreement: "",
    capabilityInvocation: "",
    capabilityDelegation: "",
};
export const Did = {
    encode(message, writer = Writer.create()) {
        for (const v of message.context) {
            writer.uint32(10).string(v);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        for (const v of message.controller) {
            writer.uint32(26).string(v);
        }
        for (const v of message.alsoKnownAs) {
            writer.uint32(34).string(v);
        }
        for (const v of message.verificationMethod) {
            VerificationMethod.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.authentication) {
            writer.uint32(50).string(v);
        }
        for (const v of message.assertionMethod) {
            writer.uint32(58).string(v);
        }
        for (const v of message.keyAgreement) {
            writer.uint32(66).string(v);
        }
        for (const v of message.capabilityInvocation) {
            writer.uint32(74).string(v);
        }
        for (const v of message.capabilityDelegation) {
            writer.uint32(82).string(v);
        }
        for (const v of message.service) {
            Service.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDid };
        message.context = [];
        message.controller = [];
        message.alsoKnownAs = [];
        message.verificationMethod = [];
        message.authentication = [];
        message.assertionMethod = [];
        message.keyAgreement = [];
        message.capabilityInvocation = [];
        message.capabilityDelegation = [];
        message.service = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.context.push(reader.string());
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.controller.push(reader.string());
                    break;
                case 4:
                    message.alsoKnownAs.push(reader.string());
                    break;
                case 5:
                    message.verificationMethod.push(VerificationMethod.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.authentication.push(reader.string());
                    break;
                case 7:
                    message.assertionMethod.push(reader.string());
                    break;
                case 8:
                    message.keyAgreement.push(reader.string());
                    break;
                case 9:
                    message.capabilityInvocation.push(reader.string());
                    break;
                case 10:
                    message.capabilityDelegation.push(reader.string());
                    break;
                case 11:
                    message.service.push(Service.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDid };
        message.context = [];
        message.controller = [];
        message.alsoKnownAs = [];
        message.verificationMethod = [];
        message.authentication = [];
        message.assertionMethod = [];
        message.keyAgreement = [];
        message.capabilityInvocation = [];
        message.capabilityDelegation = [];
        message.service = [];
        if (object.context !== undefined && object.context !== null) {
            for (const e of object.context) {
                message.context.push(String(e));
            }
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.controller !== undefined && object.controller !== null) {
            for (const e of object.controller) {
                message.controller.push(String(e));
            }
        }
        if (object.alsoKnownAs !== undefined && object.alsoKnownAs !== null) {
            for (const e of object.alsoKnownAs) {
                message.alsoKnownAs.push(String(e));
            }
        }
        if (object.verificationMethod !== undefined &&
            object.verificationMethod !== null) {
            for (const e of object.verificationMethod) {
                message.verificationMethod.push(VerificationMethod.fromJSON(e));
            }
        }
        if (object.authentication !== undefined && object.authentication !== null) {
            for (const e of object.authentication) {
                message.authentication.push(String(e));
            }
        }
        if (object.assertionMethod !== undefined &&
            object.assertionMethod !== null) {
            for (const e of object.assertionMethod) {
                message.assertionMethod.push(String(e));
            }
        }
        if (object.keyAgreement !== undefined && object.keyAgreement !== null) {
            for (const e of object.keyAgreement) {
                message.keyAgreement.push(String(e));
            }
        }
        if (object.capabilityInvocation !== undefined &&
            object.capabilityInvocation !== null) {
            for (const e of object.capabilityInvocation) {
                message.capabilityInvocation.push(String(e));
            }
        }
        if (object.capabilityDelegation !== undefined &&
            object.capabilityDelegation !== null) {
            for (const e of object.capabilityDelegation) {
                message.capabilityDelegation.push(String(e));
            }
        }
        if (object.service !== undefined && object.service !== null) {
            for (const e of object.service) {
                message.service.push(Service.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.context) {
            obj.context = message.context.map((e) => e);
        }
        else {
            obj.context = [];
        }
        message.id !== undefined && (obj.id = message.id);
        if (message.controller) {
            obj.controller = message.controller.map((e) => e);
        }
        else {
            obj.controller = [];
        }
        if (message.alsoKnownAs) {
            obj.alsoKnownAs = message.alsoKnownAs.map((e) => e);
        }
        else {
            obj.alsoKnownAs = [];
        }
        if (message.verificationMethod) {
            obj.verificationMethod = message.verificationMethod.map((e) => e ? VerificationMethod.toJSON(e) : undefined);
        }
        else {
            obj.verificationMethod = [];
        }
        if (message.authentication) {
            obj.authentication = message.authentication.map((e) => e);
        }
        else {
            obj.authentication = [];
        }
        if (message.assertionMethod) {
            obj.assertionMethod = message.assertionMethod.map((e) => e);
        }
        else {
            obj.assertionMethod = [];
        }
        if (message.keyAgreement) {
            obj.keyAgreement = message.keyAgreement.map((e) => e);
        }
        else {
            obj.keyAgreement = [];
        }
        if (message.capabilityInvocation) {
            obj.capabilityInvocation = message.capabilityInvocation.map((e) => e);
        }
        else {
            obj.capabilityInvocation = [];
        }
        if (message.capabilityDelegation) {
            obj.capabilityDelegation = message.capabilityDelegation.map((e) => e);
        }
        else {
            obj.capabilityDelegation = [];
        }
        if (message.service) {
            obj.service = message.service.map((e) => e ? Service.toJSON(e) : undefined);
        }
        else {
            obj.service = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDid };
        message.context = [];
        message.controller = [];
        message.alsoKnownAs = [];
        message.verificationMethod = [];
        message.authentication = [];
        message.assertionMethod = [];
        message.keyAgreement = [];
        message.capabilityInvocation = [];
        message.capabilityDelegation = [];
        message.service = [];
        if (object.context !== undefined && object.context !== null) {
            for (const e of object.context) {
                message.context.push(e);
            }
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.controller !== undefined && object.controller !== null) {
            for (const e of object.controller) {
                message.controller.push(e);
            }
        }
        if (object.alsoKnownAs !== undefined && object.alsoKnownAs !== null) {
            for (const e of object.alsoKnownAs) {
                message.alsoKnownAs.push(e);
            }
        }
        if (object.verificationMethod !== undefined &&
            object.verificationMethod !== null) {
            for (const e of object.verificationMethod) {
                message.verificationMethod.push(VerificationMethod.fromPartial(e));
            }
        }
        if (object.authentication !== undefined && object.authentication !== null) {
            for (const e of object.authentication) {
                message.authentication.push(e);
            }
        }
        if (object.assertionMethod !== undefined &&
            object.assertionMethod !== null) {
            for (const e of object.assertionMethod) {
                message.assertionMethod.push(e);
            }
        }
        if (object.keyAgreement !== undefined && object.keyAgreement !== null) {
            for (const e of object.keyAgreement) {
                message.keyAgreement.push(e);
            }
        }
        if (object.capabilityInvocation !== undefined &&
            object.capabilityInvocation !== null) {
            for (const e of object.capabilityInvocation) {
                message.capabilityInvocation.push(e);
            }
        }
        if (object.capabilityDelegation !== undefined &&
            object.capabilityDelegation !== null) {
            for (const e of object.capabilityDelegation) {
                message.capabilityDelegation.push(e);
            }
        }
        if (object.service !== undefined && object.service !== null) {
            for (const e of object.service) {
                message.service.push(Service.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMetadata = {
    created: "",
    updated: "",
    deactivated: false,
    versionId: "",
};
export const Metadata = {
    encode(message, writer = Writer.create()) {
        if (message.created !== "") {
            writer.uint32(10).string(message.created);
        }
        if (message.updated !== "") {
            writer.uint32(18).string(message.updated);
        }
        if (message.deactivated === true) {
            writer.uint32(24).bool(message.deactivated);
        }
        if (message.versionId !== "") {
            writer.uint32(34).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.created = reader.string();
                    break;
                case 2:
                    message.updated = reader.string();
                    break;
                case 3:
                    message.deactivated = reader.bool();
                    break;
                case 4:
                    message.versionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMetadata };
        if (object.created !== undefined && object.created !== null) {
            message.created = String(object.created);
        }
        else {
            message.created = "";
        }
        if (object.updated !== undefined && object.updated !== null) {
            message.updated = String(object.updated);
        }
        else {
            message.updated = "";
        }
        if (object.deactivated !== undefined && object.deactivated !== null) {
            message.deactivated = Boolean(object.deactivated);
        }
        else {
            message.deactivated = false;
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.created !== undefined && (obj.created = message.created);
        message.updated !== undefined && (obj.updated = message.updated);
        message.deactivated !== undefined &&
            (obj.deactivated = message.deactivated);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMetadata };
        if (object.created !== undefined && object.created !== null) {
            message.created = object.created;
        }
        else {
            message.created = "";
        }
        if (object.updated !== undefined && object.updated !== null) {
            message.updated = object.updated;
        }
        else {
            message.updated = "";
        }
        if (object.deactivated !== undefined && object.deactivated !== null) {
            message.deactivated = object.deactivated;
        }
        else {
            message.deactivated = false;
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = "";
        }
        return message;
    },
};
const baseVerificationMethod = {
    id: "",
    type: "",
    controller: "",
    publicKeyMultibase: "",
};
export const VerificationMethod = {
    encode(message, writer = Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.controller !== "") {
            writer.uint32(26).string(message.controller);
        }
        if (message.publicKeyMultibase !== "") {
            writer.uint32(34).string(message.publicKeyMultibase);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVerificationMethod };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.controller = reader.string();
                    break;
                case 4:
                    message.publicKeyMultibase = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVerificationMethod };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.controller !== undefined && object.controller !== null) {
            message.controller = String(object.controller);
        }
        else {
            message.controller = "";
        }
        if (object.publicKeyMultibase !== undefined &&
            object.publicKeyMultibase !== null) {
            message.publicKeyMultibase = String(object.publicKeyMultibase);
        }
        else {
            message.publicKeyMultibase = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        message.controller !== undefined && (obj.controller = message.controller);
        message.publicKeyMultibase !== undefined &&
            (obj.publicKeyMultibase = message.publicKeyMultibase);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVerificationMethod };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.controller !== undefined && object.controller !== null) {
            message.controller = object.controller;
        }
        else {
            message.controller = "";
        }
        if (object.publicKeyMultibase !== undefined &&
            object.publicKeyMultibase !== null) {
            message.publicKeyMultibase = object.publicKeyMultibase;
        }
        else {
            message.publicKeyMultibase = "";
        }
        return message;
    },
};
const baseService = { id: "", type: "", serviceEndpoint: "" };
export const Service = {
    encode(message, writer = Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.serviceEndpoint !== "") {
            writer.uint32(26).string(message.serviceEndpoint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseService };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.serviceEndpoint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseService };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.serviceEndpoint !== undefined &&
            object.serviceEndpoint !== null) {
            message.serviceEndpoint = String(object.serviceEndpoint);
        }
        else {
            message.serviceEndpoint = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        message.serviceEndpoint !== undefined &&
            (obj.serviceEndpoint = message.serviceEndpoint);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseService };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.serviceEndpoint !== undefined &&
            object.serviceEndpoint !== null) {
            message.serviceEndpoint = object.serviceEndpoint;
        }
        else {
            message.serviceEndpoint = "";
        }
        return message;
    },
};
const baseSignInfo = { verificationMethodId: "", signature: "" };
export const SignInfo = {
    encode(message, writer = Writer.create()) {
        if (message.verificationMethodId !== "") {
            writer.uint32(10).string(message.verificationMethodId);
        }
        if (message.signature !== "") {
            writer.uint32(18).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSignInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.verificationMethodId = reader.string();
                    break;
                case 2:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSignInfo };
        if (object.verificationMethodId !== undefined &&
            object.verificationMethodId !== null) {
            message.verificationMethodId = String(object.verificationMethodId);
        }
        else {
            message.verificationMethodId = "";
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = String(object.signature);
        }
        else {
            message.signature = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.verificationMethodId !== undefined &&
            (obj.verificationMethodId = message.verificationMethodId);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSignInfo };
        if (object.verificationMethodId !== undefined &&
            object.verificationMethodId !== null) {
            message.verificationMethodId = object.verificationMethodId;
        }
        else {
            message.verificationMethodId = "";
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = object.signature;
        }
        else {
            message.signature = "";
        }
        return message;
    },
};
const baseDidDocument = {};
export const DidDocument = {
    encode(message, writer = Writer.create()) {
        if (message.did !== undefined) {
            Did.encode(message.did, writer.uint32(10).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDidDocument };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.did = Did.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.metadata = Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDidDocument };
        if (object.did !== undefined && object.did !== null) {
            message.did = Did.fromJSON(object.did);
        }
        else {
            message.did = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = Metadata.fromJSON(object.metadata);
        }
        else {
            message.metadata = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.did !== undefined &&
            (obj.did = message.did ? Did.toJSON(message.did) : undefined);
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? Metadata.toJSON(message.metadata)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDidDocument };
        if (object.did !== undefined && object.did !== null) {
            message.did = Did.fromPartial(object.did);
        }
        else {
            message.did = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = Metadata.fromPartial(object.metadata);
        }
        else {
            message.metadata = undefined;
        }
        return message;
    },
};
