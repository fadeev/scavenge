package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateScavenge{}

func NewMsgCreateScavenge(creator string, solutionHash string, description string, reward string) *MsgCreateScavenge {
	return &MsgCreateScavenge{
		Creator:      creator,
		SolutionHash: solutionHash,
		Description:  description,
		Reward:       reward,
	}
}

func (msg *MsgCreateScavenge) Route() string {
	return RouterKey
}

func (msg *MsgCreateScavenge) Type() string {
	return "CreateScavenge"
}

func (msg *MsgCreateScavenge) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateScavenge) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateScavenge) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
