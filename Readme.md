# A cli interface for coincap

This command line tool uses the [capcoin.io api](https://github.com/CoinCapDev/CoinCap.io) and displays the data formatted or as json.

[![npm version](https://badge.fury.io/js/capcoin.svg)](https://badge.fury.io/js/capcoin) [![Build Status](https://travis-ci.org/sebs/capcoin.svg?branch=master)](https://travis-ci.org/sebs/capcoin) [![Code Climate](https://codeclimate.com/github/sebs/capcoin/badges/gpa.svg)](https://codeclimate.com/github/sebs/capcoin)
[![npm](https://img.shields.io/npm/dt/capcoin.svg?maxAge=2592000)]()

## Install

```bash
npm install capcoin -g
```

This little helper extracts the following information from a ethereum JSON RPC host.

* version
  * api
  * node  
  * network
* accounts
* net
  * peer count
  * last block
  * syncing
  * hashrate
  * mining

  I needed it, when repeatedly validating and administering different nodes. Have fun with it

* Outputs JSON
* supports the full GET API
* sockets: upcoming


![capcoin cli](./capcoin-cli.png "Comes with charts")

## Usage

* capcoin coins - Supported coins
* capcoin map - object of Coin symbols/names and known aliases
* capcoin front - frontpage data
* capcoin global - global data
* capcoin page - detail data
* capcoin history - history data
* capcoin charts - history data
* capcoin live - live trades and global data


```bash
capcoin history -t 90day XXX --json
90day
{"market_cap":[],"price":[],"volume":[]}
```
