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
    console.log("IPFS CID:", upload);
    return upload.IpfsHash;
  } catch (error) {
    console.error("Error pinning message:", error);
  }
}

async function getIpfsContent(CID) {
  const url = `https://gateway.pinata.cloud/ipfs/${CID}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("IPFS Content:", data.text);
  } catch (error) {
    console.log(error);
  }
}
// pinMessage("gm ");
// getIpfsContent("QmQqYFL2acy5yiNK4V3JZwVsSDDJWtrFvkXMRuwUN3CnSM");

module.exports = { pinMessage, getIpfsContent };
