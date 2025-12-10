export const verifySecret = (req, res) => {
  const { answer } = req.body;

  const correct = "03-08-2024"; // <-- the real answer you two have ;)

  if (answer === correct) {
    return res.json({ success: true });
  }
  return res.status(401).json({ success: false, msg: "Wrong answer babe :)" });
};
