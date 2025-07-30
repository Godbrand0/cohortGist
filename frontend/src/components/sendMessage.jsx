import React, { useState, useEffect } from "react";

import { getContract } from "../utlis/contract";

const SendMessage = () => {
  const [IpfsHash, setIpfsHash] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    async function fetchAccount() {
      const account = await window.ethereum.request({ method: "eth_accounts" });
      setAddress(account[0]);
    }
    fetchAccount();
  }, []);

  const sendMessage = async () => {
    try {
      const contract = getContract();
      if (!contract) return;

      const tx = await contract.sendMessage(IpfsHash);
      await tx.wait();
      console.log("Message sent:", IpfsHash);
      alert("Message sent!");
    } catch (error) {
      console.error(error);
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <>
      <div className="container mx-auto max-w-max flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">cohortGist</h1>
        <p className="text-lg mt-4">
          Connected Address: {address.slice()}
        </p>

        <div>
          <input
            type="text"
            value={IpfsHash}
            onChange={(e) => setIpfsHash(e.target.value)}
            placeholder="Enter IPFS Hash"
            className="border p-2 rounded"
          />
          <button
            onClick={() => sendMessage(IpfsHash)}
            className="bg-blue-500 text-white p-2 rounded ml-2"
          >
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};
export default SendMessage;
