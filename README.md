# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

add node packages using following commands:

npm install --save-dev hardhat
npm install --save-dev dotenv
npm install --save-dev @openzeppelin/contracts
npm install --save-dev @nomicfoundation/hardhat-toolbox
npm install --save-dev "@nomiclabs/hardhat-ethers@^2.0.0"
npm install --save-dev ethers
npm install --save-dev "@nomicfoundation/hardhat-network-helpers@^1.0.0" "@nomicfoundation/hardhat-chai-matchers@^1.0.0" "@nomiclabs/hardhat-etherscan@^3.0.0" "@types/mocha@^9.1.0" "@typechain/ethers-v5@^10.1.0" "@typechain/hardhat@^6.1.2" "chai@^4.2.0" "hardhat-gas-reporter@^1.0.8" "solidity-coverage@^0.7.21" "ts-node@>=8.0.0" "typechain@^8.1.0" "typescript@>=4.5.0"


after that use "npx hardhat compile" to compile the contracts.
use "npx hardhat run ./scripts/deploy.js --network goerli" to deploy. 
Make sure to change the solidity version, private, public keys accordingly.
