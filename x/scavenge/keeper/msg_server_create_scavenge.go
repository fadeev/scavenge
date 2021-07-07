package keeper

import (
	"context"

	"github.com/cosmonaut/scavenge/x/scavenge/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateScavenge(goCtx context.Context, msg *types.MsgCreateScavenge) (*types.MsgCreateScavengeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateScavengeResponse{}, nil
}
