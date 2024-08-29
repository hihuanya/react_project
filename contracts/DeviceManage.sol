// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract DeviceManage {

    struct Device {
        string deviceName;
        string serialNumber;
        string location;
    }
    uint256 public maxSupply;
    uint256 public totalSupply;

    mapping(uint256 => Device) devices;

    uint256[] private deviceIds;  // 保存所有设备 ID


    // 添加设备
    function addDevice(string memory _name, string memory  _serialNumber,string  memory _location) public  {
        maxSupply++;
        totalSupply++;
        devices[maxSupply] = Device(_name, _serialNumber, _location);
        deviceIds.push(maxSupply);  // 将新设备的 ID 添加到数组中

    }

     // 获取所有设备数据
    function getAllDevices() public view returns (Device[] memory) {
        Device[] memory allDevices = new Device[](totalSupply);
        for (uint256 i = 0; i < totalSupply; i++) {
            allDevices[i] = devices[deviceIds[i]];
        }
        return allDevices;
    }

    
    // 获取某个详情
    function getDomain(uint256 _id) public view returns (Device memory) {
        return devices[_id];
    }
    // 获得余额
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
