// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

contract Aum is ERC20 {

         constructor() ERC20("AUM","OM"){
            _mint(msg.sender, 50000*10**18);
         }
         
}