const hre = require("hardhat");

async function main() {
 
  const GrimNFT = await hre.ethers.getContractFactory("GrimNFT");
  const grimNFT = await GrimNFT.deploy();

  await grimNFT.deployed();

  console.log("GrimNFT deployed to:", grimNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
