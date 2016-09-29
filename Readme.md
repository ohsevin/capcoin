# capcoin - A cli interface for coincap

[![npm version](https://badge.fury.io/js/capcoin.svg)](https://badge.fury.io/js/capcoin) [![Build Status](https://travis-ci.org/sebs/capcoin.svg?branch=master)](https://travis-ci.org/sebs/capcoin) [![Code Climate](https://codeclimate.com/github/sebs/capcoin/badges/gpa.svg)](https://codeclimate.com/github/sebs/capcoin)

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

## Install

```bash
npm install capcoin -g
```
