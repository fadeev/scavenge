package keeper

import (
	"context"

	"github.com/cosmonaut/scavenge/x/scavenge/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) CreateScavenge(goCtx context.Context, msg *types.MsgCreateScavenge) (*types.MsgCreateScavengeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	var scavenge = types.Scavenge{
		Index:        msg.SolutionHash,
		Creator:      msg.Creator,
		Description:  msg.Description,
		SolutionHash: msg.SolutionHash,
		Reward:       msg.Reward,
	}
	_, isFound := k.GetScavenge(ctx, scavenge.SolutionHash)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Scavenge with that solution hash already exists")
	}
	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	scavenger, err := sdk.AccAddressFromBech32(scavenge.Creator)
	if err != nil {
		panic(err)
	}
	reward, err := sdk.ParseCoinsNormalized(scavenge.Reward)
	if err != nil {
		panic(err)
	}
	sdkError := k.bankKeeper.SendCoins(ctx, scavenger, moduleAcct, reward)
	if sdkError != nil {
		return nil, sdkError
	}
	k.SetScavenge(ctx, scavenge)
	return &types.MsgCreateScavengeResponse{}, nil
}
