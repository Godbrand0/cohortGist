import { useNavigate } from "react-router-dom";

export const ConnectWallet = () => {
  const navigate = useNavigate();

  const connect = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth.requestAccounts" });
        navigate("/home");
      } catch (error) {
        console.log("Error connecting to wallet:", error);
      }
    } else {
      alert("Please install MetaMask to connect your wallet.");
    }
  };

  return (
    <div>
      <button
        onClick={connect}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Connect Wallet
      </button>
    </div>
  );
};
