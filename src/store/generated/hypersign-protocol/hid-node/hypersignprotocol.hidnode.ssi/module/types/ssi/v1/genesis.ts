/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "hypersignprotocol.hidnode.ssi";

/** GenesisState defines the ssi module's genesis state. */
export interface GenesisState {
  /** TODO: Once did method spec has been confirmed, did_method should be removed */
  did_method: string;
  did_namespace: string;
}

const baseGenesisState: object = { did_method: "", did_namespace: "" };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.did_method !== "") {
      writer.uint32(10).string(message.did_method);
    }
    if (message.did_namespace !== "") {
      writer.uint32(18).string(message.did_namespace);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did_method = reader.string();
          break;
        case 2:
          message.did_namespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    if (object.did_method !== undefined && object.did_method !== null) {
      message.did_method = String(object.did_method);
    } else {
      message.did_method = "";
    }
    if (object.did_namespace !== undefined && object.did_namespace !== null) {
      message.did_namespace = String(object.did_namespace);
    } else {
      message.did_namespace = "";
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.did_method !== undefined && (obj.did_method = message.did_method);
    message.did_namespace !== undefined &&
      (obj.did_namespace = message.did_namespace);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    if (object.did_method !== undefined && object.did_method !== null) {
      message.did_method = object.did_method;
    } else {
      message.did_method = "";
    }
    if (object.did_namespace !== undefined && object.did_namespace !== null) {
      message.did_namespace = object.did_namespace;
    } else {
      message.did_namespace = "";
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
