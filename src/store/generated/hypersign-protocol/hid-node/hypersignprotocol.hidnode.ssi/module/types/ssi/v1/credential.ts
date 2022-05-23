/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "hypersignprotocol.hidnode.ssi";

export interface Claim {
  id: string;
  currentStatus: string;
  statusReason: string;
}

export interface CredentialStatus {
  claim: Claim | undefined;
  issuer: string;
  issued: string;
}

export interface CredentialProof {
  type: string;
  created: string;
  verificationMethod: string;
  proofPurpose: string;
  proofValue: string;
}

export interface Credential {
  claim: Claim | undefined;
  issuer: string;
  issued: string;
  proof: CredentialProof | undefined;
}

const baseClaim: object = { id: "", currentStatus: "", statusReason: "" };

export const Claim = {
  encode(message: Claim, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.currentStatus !== "") {
      writer.uint32(18).string(message.currentStatus);
    }
    if (message.statusReason !== "") {
      writer.uint32(26).string(message.statusReason);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Claim {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClaim } as Claim;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.currentStatus = reader.string();
          break;
        case 3:
          message.statusReason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Claim {
    const message = { ...baseClaim } as Claim;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.currentStatus !== undefined && object.currentStatus !== null) {
      message.currentStatus = String(object.currentStatus);
    } else {
      message.currentStatus = "";
    }
    if (object.statusReason !== undefined && object.statusReason !== null) {
      message.statusReason = String(object.statusReason);
    } else {
      message.statusReason = "";
    }
    return message;
  },

  toJSON(message: Claim): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.currentStatus !== undefined &&
      (obj.currentStatus = message.currentStatus);
    message.statusReason !== undefined &&
      (obj.statusReason = message.statusReason);
    return obj;
  },

  fromPartial(object: DeepPartial<Claim>): Claim {
    const message = { ...baseClaim } as Claim;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.currentStatus !== undefined && object.currentStatus !== null) {
      message.currentStatus = object.currentStatus;
    } else {
      message.currentStatus = "";
    }
    if (object.statusReason !== undefined && object.statusReason !== null) {
      message.statusReason = object.statusReason;
    } else {
      message.statusReason = "";
    }
    return message;
  },
};

const baseCredentialStatus: object = { issuer: "", issued: "" };

export const CredentialStatus = {
  encode(message: CredentialStatus, writer: Writer = Writer.create()): Writer {
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(10).fork()).ldelim();
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.issued !== "") {
      writer.uint32(26).string(message.issued);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CredentialStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCredentialStatus } as CredentialStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claim = Claim.decode(reader, reader.uint32());
          break;
        case 2:
          message.issuer = reader.string();
          break;
        case 3:
          message.issued = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CredentialStatus {
    const message = { ...baseCredentialStatus } as CredentialStatus;
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = Claim.fromJSON(object.claim);
    } else {
      message.claim = undefined;
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (object.issued !== undefined && object.issued !== null) {
      message.issued = String(object.issued);
    } else {
      message.issued = "";
    }
    return message;
  },

  toJSON(message: CredentialStatus): unknown {
    const obj: any = {};
    message.claim !== undefined &&
      (obj.claim = message.claim ? Claim.toJSON(message.claim) : undefined);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.issued !== undefined && (obj.issued = message.issued);
    return obj;
  },

  fromPartial(object: DeepPartial<CredentialStatus>): CredentialStatus {
    const message = { ...baseCredentialStatus } as CredentialStatus;
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = Claim.fromPartial(object.claim);
    } else {
      message.claim = undefined;
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.issued !== undefined && object.issued !== null) {
      message.issued = object.issued;
    } else {
      message.issued = "";
    }
    return message;
  },
};

const baseCredentialProof: object = {
  type: "",
  created: "",
  verificationMethod: "",
  proofPurpose: "",
  proofValue: "",
};

export const CredentialProof = {
  encode(message: CredentialProof, writer: Writer = Writer.create()): Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.created !== "") {
      writer.uint32(18).string(message.created);
    }
    if (message.verificationMethod !== "") {
      writer.uint32(26).string(message.verificationMethod);
    }
    if (message.proofPurpose !== "") {
      writer.uint32(34).string(message.proofPurpose);
    }
    if (message.proofValue !== "") {
      writer.uint32(42).string(message.proofValue);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CredentialProof {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCredentialProof } as CredentialProof;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.created = reader.string();
          break;
        case 3:
          message.verificationMethod = reader.string();
          break;
        case 4:
          message.proofPurpose = reader.string();
          break;
        case 5:
          message.proofValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CredentialProof {
    const message = { ...baseCredentialProof } as CredentialProof;
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = String(object.created);
    } else {
      message.created = "";
    }
    if (
      object.verificationMethod !== undefined &&
      object.verificationMethod !== null
    ) {
      message.verificationMethod = String(object.verificationMethod);
    } else {
      message.verificationMethod = "";
    }
    if (object.proofPurpose !== undefined && object.proofPurpose !== null) {
      message.proofPurpose = String(object.proofPurpose);
    } else {
      message.proofPurpose = "";
    }
    if (object.proofValue !== undefined && object.proofValue !== null) {
      message.proofValue = String(object.proofValue);
    } else {
      message.proofValue = "";
    }
    return message;
  },

  toJSON(message: CredentialProof): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.created !== undefined && (obj.created = message.created);
    message.verificationMethod !== undefined &&
      (obj.verificationMethod = message.verificationMethod);
    message.proofPurpose !== undefined &&
      (obj.proofPurpose = message.proofPurpose);
    message.proofValue !== undefined && (obj.proofValue = message.proofValue);
    return obj;
  },

  fromPartial(object: DeepPartial<CredentialProof>): CredentialProof {
    const message = { ...baseCredentialProof } as CredentialProof;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = object.created;
    } else {
      message.created = "";
    }
    if (
      object.verificationMethod !== undefined &&
      object.verificationMethod !== null
    ) {
      message.verificationMethod = object.verificationMethod;
    } else {
      message.verificationMethod = "";
    }
    if (object.proofPurpose !== undefined && object.proofPurpose !== null) {
      message.proofPurpose = object.proofPurpose;
    } else {
      message.proofPurpose = "";
    }
    if (object.proofValue !== undefined && object.proofValue !== null) {
      message.proofValue = object.proofValue;
    } else {
      message.proofValue = "";
    }
    return message;
  },
};

const baseCredential: object = { issuer: "", issued: "" };

export const Credential = {
  encode(message: Credential, writer: Writer = Writer.create()): Writer {
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(10).fork()).ldelim();
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.issued !== "") {
      writer.uint32(26).string(message.issued);
    }
    if (message.proof !== undefined) {
      CredentialProof.encode(message.proof, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Credential {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCredential } as Credential;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claim = Claim.decode(reader, reader.uint32());
          break;
        case 2:
          message.issuer = reader.string();
          break;
        case 3:
          message.issued = reader.string();
          break;
        case 4:
          message.proof = CredentialProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Credential {
    const message = { ...baseCredential } as Credential;
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = Claim.fromJSON(object.claim);
    } else {
      message.claim = undefined;
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (object.issued !== undefined && object.issued !== null) {
      message.issued = String(object.issued);
    } else {
      message.issued = "";
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = CredentialProof.fromJSON(object.proof);
    } else {
      message.proof = undefined;
    }
    return message;
  },

  toJSON(message: Credential): unknown {
    const obj: any = {};
    message.claim !== undefined &&
      (obj.claim = message.claim ? Claim.toJSON(message.claim) : undefined);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.issued !== undefined && (obj.issued = message.issued);
    message.proof !== undefined &&
      (obj.proof = message.proof
        ? CredentialProof.toJSON(message.proof)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Credential>): Credential {
    const message = { ...baseCredential } as Credential;
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = Claim.fromPartial(object.claim);
    } else {
      message.claim = undefined;
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.issued !== undefined && object.issued !== null) {
      message.issued = object.issued;
    } else {
      message.issued = "";
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = CredentialProof.fromPartial(object.proof);
    } else {
      message.proof = undefined;
    }
    return message;
  },
};

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
