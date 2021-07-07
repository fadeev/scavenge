package main

import (
	"os"

	"github.com/cosmonaut/scavenge/app"
	"github.com/cosmonaut/scavenge/cmd/scavenged/cmd"
	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
)

func main() {
	rootCmd, _ := cmd.NewRootCmd()
	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}
