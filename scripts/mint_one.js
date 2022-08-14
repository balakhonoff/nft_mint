const MyNFT = artifacts.require('MyNFT')



module.exports = async function(callback) {

  // var creator = web3.eth.accounts[0]
  // var purchaser = web3.eth.accounts[1]
  const accounts = await web3.eth.getAccounts()
    // Set up account to transferEther to Victim
  const creator = accounts[0]
  const purchaser =  accounts[1]

  console.log(creator)

  let myNFT = await MyNFT.deployed()

  let txn1 = await myNFT.mintNFT(purchaser, "https://ipfs.io/ipfs/bafkreih4sa7eajt7b2yluycrjy7d3hnrvnlugeznz2ntd2s5mtvnr6vpg4")
  // let tokenId1 = txn1.logs[2].args[0].toNumber()
  console.log('transaction ID',txn1)
  // console.log('token ID',tokenId1.toString())
  // Code goes here...

  callback()
}
