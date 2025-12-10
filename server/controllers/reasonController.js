import Reason from "../models/Reason.js";

export const getRandomReason = async (req, res) => {
  const count = await Reason.countDocuments();
  const rand = Math.floor(Math.random() * count);
  const reason = await Reason.findOne().skip(rand);

  res.json(reason);
};
