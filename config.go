package main

import "github.com/spf13/viper"

type Config struct {
	GethURL string
	PrivK   string
}

var config Config

func ReadConfig(path, filename string) {
	viper.SetConfigName(filename)
	viper.AddConfigPath(path)
	viper.SetConfigType("yaml")
	if err := viper.ReadInConfig(); err != nil {
		panic(err)
	}
	err := viper.Unmarshal(&config)
	if err != nil {
		panic(err)
	}
}
