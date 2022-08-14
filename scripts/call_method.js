const MyNFT = artifacts.require('MyNFT')

module.exports = async function(callback) {
  let myNFT = await MyNFT.deployed()
  let address = await myNFT.owner.call();
  console.log("address of the owner: ",address)

  let name = await myNFT.name.call();
  console.log("name of the contract: ",name)

  let symbol = await myNFT.symbol.call();
  console.log("symbol of the contract: ",symbol)
  // Code goes here...

  callback()
}
