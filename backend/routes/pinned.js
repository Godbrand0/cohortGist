const express = require("express");
const router = express.Router();

const { pinMessage, getIpfsContent } = require("../pinata/pin");

router.post("/api/pin", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  try {
    const cid = await pinMessage(message);
    res.status(200).json({ cid });
  } catch (error) {
    res.status(500).json({ error: "Failed to pin message" });
  }
});

router.get("/api/pin/:cid", async (req, res) => {
  const { cid } = req.params;
  if (!cid) return res.status(400).json({ error: "CID is required" });

  try {
    const content = await getIpfsContent(cid);
    res.status(200).json({ content });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve content" });
  }
});
module.exports = router;
