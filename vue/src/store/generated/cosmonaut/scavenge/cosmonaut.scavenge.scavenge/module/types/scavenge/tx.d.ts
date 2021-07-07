import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "cosmonaut.scavenge.scavenge";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgRevealSolution {
    creator: string;
    solution: string;
}
export interface MsgRevealSolutionResponse {
}
export interface MsgCommitSolution {
    creator: string;
    solutionHash: string;
    solutionScavengerHash: string;
}
export interface MsgCommitSolutionResponse {
}
export interface MsgCreateScavenge {
    creator: string;
    solutionHash: string;
    description: string;
    reward: string;
}
export interface MsgCreateScavengeResponse {
}
export declare const MsgRevealSolution: {
    encode(message: MsgRevealSolution, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRevealSolution;
    fromJSON(object: any): MsgRevealSolution;
    toJSON(message: MsgRevealSolution): unknown;
    fromPartial(object: DeepPartial<MsgRevealSolution>): MsgRevealSolution;
};
export declare const MsgRevealSolutionResponse: {
    encode(_: MsgRevealSolutionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRevealSolutionResponse;
    fromJSON(_: any): MsgRevealSolutionResponse;
    toJSON(_: MsgRevealSolutionResponse): unknown;
    fromPartial(_: DeepPartial<MsgRevealSolutionResponse>): MsgRevealSolutionResponse;
};
export declare const MsgCommitSolution: {
    encode(message: MsgCommitSolution, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCommitSolution;
    fromJSON(object: any): MsgCommitSolution;
    toJSON(message: MsgCommitSolution): unknown;
    fromPartial(object: DeepPartial<MsgCommitSolution>): MsgCommitSolution;
};
export declare const MsgCommitSolutionResponse: {
    encode(_: MsgCommitSolutionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCommitSolutionResponse;
    fromJSON(_: any): MsgCommitSolutionResponse;
    toJSON(_: MsgCommitSolutionResponse): unknown;
    fromPartial(_: DeepPartial<MsgCommitSolutionResponse>): MsgCommitSolutionResponse;
};
export declare const MsgCreateScavenge: {
    encode(message: MsgCreateScavenge, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateScavenge;
    fromJSON(object: any): MsgCreateScavenge;
    toJSON(message: MsgCreateScavenge): unknown;
    fromPartial(object: DeepPartial<MsgCreateScavenge>): MsgCreateScavenge;
};
export declare const MsgCreateScavengeResponse: {
    encode(_: MsgCreateScavengeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateScavengeResponse;
    fromJSON(_: any): MsgCreateScavengeResponse;
    toJSON(_: MsgCreateScavengeResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateScavengeResponse>): MsgCreateScavengeResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    RevealSolution(request: MsgRevealSolution): Promise<MsgRevealSolutionResponse>;
    CommitSolution(request: MsgCommitSolution): Promise<MsgCommitSolutionResponse>;
    CreateScavenge(request: MsgCreateScavenge): Promise<MsgCreateScavengeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RevealSolution(request: MsgRevealSolution): Promise<MsgRevealSolutionResponse>;
    CommitSolution(request: MsgCommitSolution): Promise<MsgCommitSolutionResponse>;
    CreateScavenge(request: MsgCreateScavenge): Promise<MsgCreateScavengeResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
