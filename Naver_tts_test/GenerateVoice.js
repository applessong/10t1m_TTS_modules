import fs, { readFileSync, writeFile } from "fs";
import request from "request";
import dotenv from "dotenv";
import * as mm from "music-metadata";

import util from "util";
const sleep = util.promisify(setTimeout);
dotenv.config();

export class GenerateVoice {
  constructor() {}
  makeVoice = async (voiceData) => {
    return makeVoice(voiceData);
  };
}

export async function makeVoice(data) {
  let voiceData = onStart(data);
  let responsePath =
    voiceData.filePath.path + voiceData.filePath.fileName + ".txt";
  request
    .post(voiceData.options)
    .on("response", function (response) {
      fs.writeFileSync(responsePath, String(response.statusCode));
    })
    .pipe(voiceData.writeStream);

  while (!fs.existsSync(responsePath)) {
    await sleep(50);
  }
  let statusCode;
  let runtime;
  try {
    statusCode = JSON.parse(fs.readFileSync(responsePath));
    runtime = await getVoiceLength(voiceData.filePath);
    fs.unlinkSync(responsePath);
    if (statusCode == 200) {
      return {
        statusCode: statusCode,
        runtime: runtime,
        path: voiceData.filePath,
        text: voiceData.options.form.text,
      };
    } else {
      fs.unlinkSync(voiceData.filePath);
      return {
        statusCode: statusCode,
      };
    }
  } catch (e) {
    console.log(e);
  }
}

async function getVoiceLength(filename) {
  return (await mm.parseFile(filename)).format.duration;
}
function onStart(voiceData) {
  let filePath =
    voiceData.filePath.path + // path
    voiceData.filePath.fileName + // filename
    "." +
    voiceData.form.format; // format
  var writeStream = fs.createWriteStream(filePath);
  var options = {
    url: process.env.API_URL,
    form: voiceData.form,
    headers: {
      "X-NCP-APIGW-API-KEY-ID": process.env.CLIENT_ID,
      "X-NCP-APIGW-API-KEY": process.env.CLIENT_SECRET,
    },
  };
  return {
    filePath: filePath,
    writeStream: writeStream,
    options: options,
  };
}
