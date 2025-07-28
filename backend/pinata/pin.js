require("dotenv").config();
const PinataSDK = require("@pinata/sdk");

const pinata = new PinataSDK({
  pinataJWTKey: process.env.PINATA_JWT,
  pinataGateway: process.env.PINATA_GATEWAY,
});

async function pinMessage(message) {
  const content = {
    text: message,
  };

  try {
    const upload = await pinata.pinJSONToIPFS(content, {
      metadata: {
        name: "GroupMessage",
      },
    });
    console.log("IPFS CID:", upload.IpfsHash);
    return upload.IpfsHash;
  } catch (error) {
    console.error("Error pinning message:", error);
  }
}
pinMessage("gm gm");
