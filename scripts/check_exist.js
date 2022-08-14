const MyNFT = artifacts.require('MyNFT')



module.exports = async function(callback) {

  // var creator = web3.eth.accounts[0]
  // var purchaser = web3.eth.accounts[1]
  const accounts = await web3.eth.getAccounts()
    // Set up account to transferEther to Victim
  const creator = accounts[0]
  const purchaser =  accounts[1]
  const someone =  accounts[2]

  console.log(creator)

  let myNFT = await MyNFT.deployed()

  let balanceCreator = await myNFT.balanceOf(creator)
  let balancePurchaser = await myNFT.balanceOf(purchaser)
  let balanceSomeone = await myNFT.balanceOf(someone)
  console.log('Creator balance', balanceCreator.toString())
  console.log('Purchaser balance', balancePurchaser.toString())
  console.log('Someone balance', balanceSomeone.toString())
  // console.log('transaction ID',)
  // console.log('token ID',tokenId1.toString())
  // Code goes here...
  // let owners =  myNFT._owners;
  // console.log(owners);

  let a = await myNFT.getPastEvents('Transfer', {
    filter: {
        _from: '0x0000000000000000000000000000000000000000'
    },
    fromBlock: 0//7322475//0 //
    }).then((events) => {
        for (let event of events) {
            console.log(event.returnValues);
        }
    });

  callback()
  }
