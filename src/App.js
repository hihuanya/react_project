// import logo from './logo.svg';
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// ABIs
import DeviceManage from './abis/DeviceManage.json'

// Config
import config from './config.json';

import './App.css';

import DeviceList from './components/DeviceList'

function App() {

  const [web3Provider, setWeb3Provider] = useState(null)
  const [account, setAccount] = useState(null)

  const [deviceManage, setDeviceManage] = useState(null)
  const [allDevices, setAllDevices] = useState([])

  const loadBlockchainData = async () => {
    // 请求用户连接 MetaMask
    // await window.ethereum.request({ method: 'eth_requestAccounts' });
    // 初始化 provider
    // const web3Provider = new ethers.providers.Web3Provider(window.ethereum)  // 小护理连接
    const web3Provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');

    setWeb3Provider(web3Provider)

    // 获取用户签名者
    const signer = web3Provider.getSigner();


    const network = await web3Provider.getNetwork()
    const deviceManage = new ethers.Contract(config[network.chainId].DeviceManage.address, DeviceManage, signer)
    setDeviceManage(deviceManage)


    const allDevices = await deviceManage.getAllDevices();
    // await allDevices.wait()
    setAllDevices(allDevices);
    console.log(allDevices);

    // window.ethereum.on('accountsChanged', async () => {
    //   const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //   const account = ethers.utils.getAddress(accounts[0])
    //   setAccount(account);
    // })
  }


  useEffect(() => {
    loadBlockchainData()
  }, [])

  

  return (
    <div className="App">
        <DeviceList  allDevices = {allDevices} deviceManage={deviceManage}  />
      
    </div>
  );
}

export default App;
