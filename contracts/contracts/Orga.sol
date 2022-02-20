// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Orga {
    AggregatorV3Interface internal priceFeed;

    mapping(uint256 => address) public user;
    mapping(address => bool) public _userExists;
    mapping(address => uint256) public _tokenToUser;
    uint256 public monthlyPrice;

    constructor() {
        priceFeed = AggregatorV3Interface(
            // https://explorer.testnet.harmony.one/address/0xcEe686F89bc0dABAd95AEAAC980aE1d97A075FAD?activeTab=0
            0xcEe686F89bc0dABAd95AEAAC980aE1d97A075FAD
        );
    }

    modifier userDoesntExists(address _user) {
        require(!_userExists[_user], "User already  exists");
        _;
    }
    modifier valueIsGreaterThanX(uint256 _sendValue, uint256 _minValue) {
        require(_sendValue > _minValue, "Not enought Token sent");
        _;
    }

    // modifier moreThanHalfOfTheMonth(address to) {
    //     require(true, "User didn't participate in more than half of the days");
    //     _;
    // }

    function signup(address to, uint256 _price)
        public
        userDoesntExists(to)
        valueIsGreaterThanX(_price, monthlyPrice)
    {
        // transfer token to address,
        // transfer value to contract
    }

    function reclaim(address to, uint256 _price)
        public
        userDoesntExists(to)
        valueIsGreaterThanX(_price, monthlyPrice)
    {
        // if user got more than  10 days of NFTs
        // transfer value to address
        // level up dynamic NFT
    }

    function getLatestPrice() public view returns (int256) {
        (
            uint80 roundID,
            int256 price,
            uint256 startedAt,
            uint256 timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        return price;
    }
}
