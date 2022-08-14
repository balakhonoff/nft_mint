**How to deploy a smart contract and call its methods**

```
cd ~/Documents/defi_projects
mkdir nft_mint
cd nft_mint
```

Add the folder into Atom

We need several files: 
1. Copy package.json, edit it. Then -> npm install
2. Copy folder migrations -> edit a couple of files
3. Create a file src/contracts/Migrations.sol and src/contracts/MyNFT.sol
```
truffle compile
```

Open Ganache
Copy the seed to .env
```
truffle migrate --reset
```

The balance of the first address has been decreased

Link truffle contracts
```
truffle migrate --reset --network goerli
```
Show the smart contract on goerli scan

Now we are going to call some methods:
```
truffle exec scripts/call_method.js
```
```
truffle exec scripts/mint_one.js
```
```
truffle exec scripts/check_exist.js
```
```
truffle exec scripts/transfer.js
```

