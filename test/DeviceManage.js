const { expect } = require("chai")

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
  }
  describe("ETHDaddy", () => {
    let deviceManage
    let deployer, owner1
  
    const NAME = "ETH Daddy"
    const SYMBOL = "ETHD"
  
    beforeEach(async () => {
      // Setup accounts
      [deployer, owner1] = await ethers.getSigners()
  
      // Deploy contract
      const DeviceManage = await ethers.getContractFactory("DeviceManage")
      deviceManage = await DeviceManage.deploy()
  
      // List a domain
      const transaction = await deviceManage.connect(deployer).addDevice("设备1","0001","中国上海")
      await transaction.wait()
    })
  
    describe("Deployment", () => {
   
 
      it("Returns the max supply", async () => {
        const result = await deviceManage.maxSupply()
        console.log(result)
        expect(result).to.equal(1)
      })
  
      it("Returns the total supply", async () => {
        const result = await deviceManage.totalSupply()
        expect(result).to.equal(1)
      })

      
  
      it("Returns the devices", async () => {
        const devices = await deviceManage.getAllDevices()
        console.log(devices.length)
      })
    })
  

  

  

  })
