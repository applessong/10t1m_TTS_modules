import vstts from "./ktAiApiSDK/VSTTS.js";
var mVstts = new vstts();
import dotenv from "dotenv";
dotenv.config();
import fs from "fs";
import * as mm from "music-metadata";

export class GenerateVoice {
  constructor() {}
  makeVoice = async (voiceData) => {
    return makeVoice(voiceData);
  };
}

const onStart = () => {
  if (mVstts == null) {
    mVstts = new vstts();
  }
  var strUrl = process.env.HOSTNAME;
  mVstts.setServiceURL(strUrl);
  mVstts.setAuth(
    process.env.CLIENT_KEY,
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET
  );
};
export async function makeVoice(voiceData) {
  onStart();

  var resultJson = mVstts.requestVSTTS(voiceData.form);
  var statusCode = resultJson["statusCode"];

  if (statusCode == 200) {
    try {
      var audioFile = Buffer.from(resultJson["audioData"], "base64");
      let filePath =
        voiceData.filePath.path + // path
        voiceData.filePath.fileName + // filename
        "." +
        voiceData.form.encoding; // format
      fs.writeFileSync(filePath, audioFile);
      let runtime = await getVoiceLength(filePath);
      return {
        status: statusCode,
        runtime: runtime,
        path: filePath,
        text: voiceData.form.text,
      };
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log(JSON.stringify(resultJson));
  }
}

async function getVoiceLength(filename) {
  return (await mm.parseFile(filename)).format.duration;
}
