// pages/api/upload.js
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

const readFile = (req, saveLocally) => {
  const options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/public/files");
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
      console.log("files", files);
      res({ fields, files });
    });
  });
};

export default async function handler(req, res) {
  try {
    await fs.readdir(path.join(process.cwd(), "/public", "/files"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd(), "/public", "/files"));
  }
  await readFile(req, true);
  res.json({ done: "ok" });
}

export const config = { api: { bodyParser: false } };
