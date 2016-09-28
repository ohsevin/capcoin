# capcoin - A cli interface for coincap

* Outputs JSON
* supports the full GET API
* sockets: upcoming

## Usage

* capcoin coins - Supported coins
* capcoin map - object of Coin symbols/names and known aliases
* capcoin front - frontpage data
* capcoin global - global data
* capcoin page - detail data
* capcoin history - history data


```bash
capcoin history -t 90day XXX --json
90day
{"market_cap":[],"price":[],"volume":[]}
```

## Install

```bash
npm install capcoin -g
```
