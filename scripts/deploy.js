// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

// 这个会报错~~~~~  
// const ethers = require("hardhat");

const { ethers } = require("hardhat");




async function main() {

    console.log(ethers==null);
//   Setup accounts & variables
  const [deployer] = await ethers.getSigners()

  const DeviceManage = await ethers.getContractFactory("DeviceManage")
  const deviceManage = await DeviceManage.deploy()


  await deviceManage.deployed();


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
