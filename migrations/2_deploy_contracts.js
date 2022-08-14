const MyNFT = artifacts.require('MyNFT')

module.exports = async function(deployer, network, accounts) {

  // Deploy NFT contract
  await deployer.deploy(MyNFT)
  const myNFT = await MyNFT.deployed()
  console.log("Contract deployed to address:", myNFT.address)
}
