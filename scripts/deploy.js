// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
const Aum= await hre.ethers.getContractFactory("Aum");
const aum = await Aum.deploy();

   await aum.deployed();
   console.log("Token deployed to:", aum.address);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// async function main() {
//   const YellowFlower = await hre.ethers.getContractFactory("YellowFlower");
//   const yellowFlower = await YellowFlower.deploy();
//   await yellowFlower.deployed();
//   console.log("Token deployed to:", yellowFlower.address);
// }
