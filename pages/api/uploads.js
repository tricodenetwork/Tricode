// pages/api/upload.js
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";
import clientPromise from "@/lib/mongodb";

const readFile = (req, saveLocally) => {
  const options = {};
  if (saveLocally) {
    options.uploadDir = req?.query?.image
      ? path.join(process.cwd(), "/public/profile_pics")
      : path.join(process.cwd(), "/public/files");
    options.filename = (name, ext, path, form) => {
      return req?.query?.company + "_" + path.originalFilename;
    };
  }
  const form = formidable(options);

  return new Promise((res, rej) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        rej(err);
      }
      res({ fields, files });
    });
  });
};

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Tricode");
  console.log(req?.query?.profile_pic);

  try {
    if (req?.query?.image) {
      await db.collection("users").updateOne(
        { email: req?.query?.company },
        {
          $set: {
            profile_pic: req?.query?.profile_pic,
          },
        }
      );
      await fs.readdir(path.join(process.cwd(), "/public", "/profile_pics"));
    } else {
      await fs.readdir(path.join(process.cwd(), "/public", "/files"));
    }
  } catch (error) {
    if (req?.query?.image) {
      await fs.mkdir(path.join(process.cwd(), "/public", "/profile_pics"));
    } else {
      await fs.mkdir(path.join(process.cwd(), "/public", "/files"));
    }
  }
  await readFile(req, true);
  res.json({ done: "ok" });
}

export const config = { api: { bodyParser: false } };
