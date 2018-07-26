package main

import (
	"fmt"
	"net/http"
)

func handlePurchase(w http.ResponseWriter, r *http.Request) {
	challenge, err := generateChallenge(20)
	if err != nil {
		panic(err)
		return
	}
	fmt.Fprintf(w, challenge)
}
func handleTxId(w http.ResponseWriter, r *http.Request) {

	fmt.Fprintf(w, "ack")
}
