import React, { useState } from "react";
import "./App.css";
import { getContract } from "./utlis/contract";

export const SendMessage = () => {
  const [IpfsHash, setIpfsHash] = useState("");

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
      <div>
        <h1 className="text-3xl font-bold">cohortGist</h1>

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
