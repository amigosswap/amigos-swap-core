pragma solidity >=0.5.0;

/*
 * AmiSwapFinance 
 * App:             https://amiswap.finance
 * Medium:          https://ape-swap.medium.com    
 * Twitter:         https://twitter.com/ape_swap 
 * Telegram:        https://t.me/ape_swap
 * Announcements:   https://t.me/ape_swap_news
 * GitHub:          https://github.com/AmiSwapFinance
 */

interface IAmiCallee {
    function apeCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
