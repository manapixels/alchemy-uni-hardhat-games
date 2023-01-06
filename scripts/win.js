// add the game address here and update the contract name if necessary
const gameAddr = '0x610178dA211FEF7D417bC0e6FeD39F05609AD788'
const contractName = "Game5";


////////////
// Game 5
//__________

async function main() {
   // attach to the game
   const game = await hre.ethers.getContractAt(contractName, gameAddr)

   await game.giveMeAllowance(10001);
   await game.mint(10001);

   const tx = await game.win()

   // did you win? Check the transaction receipt!
   // if you did, it will be in both the logs and events array
   const receipt = await tx.wait()
   console.log(receipt)
}

////////////
// Game 4
//__________

// async function main() {
//    // attach to the game
//    const game = await hre.ethers.getContractAt(contractName, gameAddr)

//    // sum = 10 = x + y
//    // y = 210
//    // x = (210 + 45) + 1 + 10 overflow
//    const tx = await game.win(56)

//    // did you win? Check the transaction receipt!
//    // if you did, it will be in both the logs and events array
//    const receipt = await tx.wait()
//    console.log(receipt)
// }

////////////
// Game 3
//__________

// async function main() {
//     // attach to the game
//     const game = await hre.ethers.getContractAt(contractName, gameAddr);

//     // do whatever you need to do to win the game here:
//     const tx = await game.win(45);

//     // did you win? Check the transaction receipt!
//     // if you did, it will be in both the logs and events array
//     const receipt = await tx.wait();
//     console.log(receipt);
// }

////////////
// Game 2
//__________

// async function main() {
//     // attach to the game
//     const game = await hre.ethers.getContractAt(contractName, gameAddr);

//     // do whatever you need to do to win the game here:
//     await game.setX(25);
//     await game.setY(25);
//     const tx = await game.win();

//     // did you win? Check the transaction receipt!
//     // if you did, it will be in both the logs and events array
//     const receipt = await tx.wait();
//     console.log(receipt);
// }

////////////
// Game 1
//__________

// add the game address here and update the contract name if necessary
// const gameAddr = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
// const contractName = "Game1";

// async function main() {
//     // attach to the game
//     const game = await hre.ethers.getContractAt(contractName, gameAddr);

//     // do whatever you need to do to win the game here:
//     const tx = await game.win();

//     // did you win? Check the transaction receipt!
//     // if you did, it will be in both the logs and events array
//     const receipt = await tx.wait();
//     console.log(receipt);
// }

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
