package main

import (
	"crypto/ecdsa"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"
)

var (
	client  *ethclient.Client
	key     *ecdsa.PrivateKey
	address common.Address
)

func Web3Open() error {
	// geth set up
	var err error

	client, err = ethclient.Dial(config.GethURL)
	if err != nil {
		return err
	}
	key, err = crypto.HexToECDSA(config.PrivK)
	if err != nil {
		return err
	}
	address = crypto.PubkeyToAddress(key.PublicKey)

	return nil
}
