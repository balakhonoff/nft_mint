const MyNFT = artifacts.require('MyNFT')

module.exports = async function(callback) {
  let myNFT = await MyNFT.deployed()
  const accounts = await web3.eth.getAccounts()

  const creator = accounts[0]
  const purchaser =  accounts[1]
  const someone =  accounts[2]
  console.log(purchaser)
  // await myNFT.approve(purchaser, '1', {from: purchaser})
  await myNFT.transferFrom(purchaser, someone, '1', {from: purchaser})

  // let a = await myNFT.getPastEvents('Transfer', {
  //   fromBlock: 0
  //   }).then((events) => {
  //       for (let event of events) {
  //           console.log(event.returnValues);
  //       }
  //   });


  callback()
}
