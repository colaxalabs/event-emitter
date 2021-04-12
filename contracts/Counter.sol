//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

contract Counter {
  event ValueChanged(uint oldValue, uint256 newValue);

  // Track counter
  uint256 private count = 0;

  /**
    * @notice Increment counter
    * @dev Add count to counter tracker
    */
  function increment() external {
      count += 1;
      emit ValueChanged(count-1, count);
  }

  /**
    * @notice Get tracked counts
    * @dev Return current total counts
    */
  function getCount() external view returns (uint256) {
      return count;
  }
}
