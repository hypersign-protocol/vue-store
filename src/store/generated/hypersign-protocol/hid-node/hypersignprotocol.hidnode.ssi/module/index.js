// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateDID } from "./types/ssi/v1/tx";
import { MsgDeactivateDID } from "./types/ssi/v1/tx";
import { MsgUpdateDID } from "./types/ssi/v1/tx";
import { MsgCreateSchema } from "./types/ssi/v1/tx";
const types = [
    ["/hypersignprotocol.hidnode.ssi.MsgCreateDID", MsgCreateDID],
    ["/hypersignprotocol.hidnode.ssi.MsgDeactivateDID", MsgDeactivateDID],
    ["/hypersignprotocol.hidnode.ssi.MsgUpdateDID", MsgUpdateDID],
    ["/hypersignprotocol.hidnode.ssi.MsgCreateSchema", MsgCreateSchema],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreateDID: (data) => ({ typeUrl: "/hypersignprotocol.hidnode.ssi.MsgCreateDID", value: MsgCreateDID.fromPartial(data) }),
        msgDeactivateDID: (data) => ({ typeUrl: "/hypersignprotocol.hidnode.ssi.MsgDeactivateDID", value: MsgDeactivateDID.fromPartial(data) }),
        msgUpdateDID: (data) => ({ typeUrl: "/hypersignprotocol.hidnode.ssi.MsgUpdateDID", value: MsgUpdateDID.fromPartial(data) }),
        msgCreateSchema: (data) => ({ typeUrl: "/hypersignprotocol.hidnode.ssi.MsgCreateSchema", value: MsgCreateSchema.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
