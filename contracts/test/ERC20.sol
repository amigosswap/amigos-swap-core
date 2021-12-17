pragma solidity =0.5.16;

import '../AmiERC20.sol';

contract ERC20 is AmiERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
