// pages/api/upload.js
export default function handler(req, res) {
  if (req.method === "POST") {
    // Simulate a file upload
    setTimeout(() => {
      res.status(200).json({ status: "success" });
    }, 2000);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
