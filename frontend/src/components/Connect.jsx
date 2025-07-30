import { useNavigate } from "react-router-dom";

const ConnectWallet = () => {
  const navigate = useNavigate();

  const connect = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        navigate("/home");
      } catch (error) {
        console.log("Error connecting to wallet:", error);
      }
    } else {
      alert("Please install MetaMask to connect your wallet.");
    }
  };

  return (
    <div className="container mx-auto max-w-max flex flex-col items-center justify-center h-screen">
      <button
        onClick={connect}
        className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
      >
        Connect Wallet
      </button>
    </div>
  );
};
export default ConnectWallet;
