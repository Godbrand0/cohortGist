import { useState } from "react";
import { getContract } from "../utlis/contract";

const GetMessage = () => {
  const [messages, setMessages] = useState([]);
  const contract = getContract();

  const messages = await contract.getmessages();
  const messagesData = await Promise.all( messages.map(async(meesage)=>{
    const res = await fetch(`https://ipfs.io/ipfs/${meesage}`);
  }))

  return (
    <div>
      <h1 className="text-3xl font-bold">Messages</h1>
    </div>
  );
};
export default GetMessage;
