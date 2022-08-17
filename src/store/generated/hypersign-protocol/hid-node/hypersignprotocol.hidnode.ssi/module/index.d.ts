import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateSchema } from "./types/ssi/v1/tx";
import { MsgRegisterCredentialStatus } from "./types/ssi/v1/tx";
import { MsgCreateDID } from "./types/ssi/v1/tx";
import { MsgDeactivateDID } from "./types/ssi/v1/tx";
import { MsgUpdateDID } from "./types/ssi/v1/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgCreateSchema: (data: MsgCreateSchema) => EncodeObject;
    msgRegisterCredentialStatus: (data: MsgRegisterCredentialStatus) => EncodeObject;
    msgCreateDID: (data: MsgCreateDID) => EncodeObject;
    msgDeactivateDID: (data: MsgDeactivateDID) => EncodeObject;
    msgUpdateDID: (data: MsgUpdateDID) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
