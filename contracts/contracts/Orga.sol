import "hardhat/console.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Orga {
    AggregatorV3Interface internal priceFeed;

    mapping(uint256 => address) public user;
    mapping(address => bool) public _userExists;
    uint256 public monthlyPrice;

    constructor() {
        priceFeed = AggregatorV3Interface(
            // https://explorer.testnet.harmony.one/address/0xcEe686F89bc0dABAd95AEAAC980aE1d97A075FAD?activeTab=0
            0xcEe686F89bc0dABAd95AEAAC980aE1d97A075FAD
        );
    }

    modifier userDoesntExists(address user) {
        require(!_userExists[user], "User already  exists");
        _;
    }
    modifier valueIsGreaterThanX(uint256 _sendValue, uint256 _minValue) {
        require(_sendValue > _minValue, "Not enought Token sent");
        _;
    }

    function signup(address to, uint265 price)
        userDoesntExists(to)
        valueIsGreaterThanX(price, monthlyPrice)
    {
        // transfer token to address,
        // transfer value to contract
    }

    function reclaim(address to, uint265 price)
        userDoesntExists(to)
        valueIsGreaterThanX(price, monthlyPrice)
    {
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
