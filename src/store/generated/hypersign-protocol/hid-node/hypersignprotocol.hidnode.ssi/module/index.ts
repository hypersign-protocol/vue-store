// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeactivateDID } from "./types/ssi/v1/tx";
import { MsgCreateSchema } from "./types/ssi/v1/tx";
import { MsgRegisterCredentialStatus } from "./types/ssi/v1/tx";
import { MsgCreateDID } from "./types/ssi/v1/tx";
import { MsgUpdateDID } from "./types/ssi/v1/tx";


const types = [
  ["/hypersignprotocol.hidnode.ssi.MsgDeactivateDID", MsgDeactivateDID],
  ["/hypersignprotocol.hidnode.ssi.MsgCreateSchema", MsgCreateSchema],
  ["/hypersignprotocol.hidnode.ssi.MsgRegisterCredentialStatus", MsgRegisterCredentialStatus],
  ["/hypersignprotocol.hidnode.ssi.MsgCreateDID", MsgCreateDID],
  ["/hypersignprotocol.hidnode.ssi.MsgUpdateDID", MsgUpdateDID],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgDeactivateDID: (data: MsgDeactivateDID): EncodeObject => ({ typeUrl: "/hypersignprotocol.hidnode.ssi.MsgDeactivateDID", value: MsgDeactivateDID.fromPartial( data ) }),
    msgCreateSchema: (data: MsgCreateSchema): EncodeObject => ({ typeUrl: "/hypersignprotocol.hidnode.ssi.MsgCreateSchema", value: MsgCreateSchema.fromPartial( data ) }),
    msgRegisterCredentialStatus: (data: MsgRegisterCredentialStatus): EncodeObject => ({ typeUrl: "/hypersignprotocol.hidnode.ssi.MsgRegisterCredentialStatus", value: MsgRegisterCredentialStatus.fromPartial( data ) }),
    msgCreateDID: (data: MsgCreateDID): EncodeObject => ({ typeUrl: "/hypersignprotocol.hidnode.ssi.MsgCreateDID", value: MsgCreateDID.fromPartial( data ) }),
    msgUpdateDID: (data: MsgUpdateDID): EncodeObject => ({ typeUrl: "/hypersignprotocol.hidnode.ssi.MsgUpdateDID", value: MsgUpdateDID.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
