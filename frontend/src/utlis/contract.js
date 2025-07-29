import { ethers } from "ethers";
import  ABI  from "../abi/Abi.json";

const CONTRACT_ADDRESS = "0x0467D9BEcF4085F7Ac9C79DC558D13Ae63E9a7f1";

export const getContract =()=>{
    if (!window.ethereum) {
        console.error("MetaMask is not installed");
        return null;
    }
    
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
        return contract;
    } catch (error) {
        console.error("Error getting contract:", error);
        return null;
    }
}

