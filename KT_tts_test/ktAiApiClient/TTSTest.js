import tts from "./ktAiApiSDK/TTS.js";
var mTts = new tts();
import dotenv from "dotenv";
dotenv.config();
import fs from "fs";

function onStart() {
  if (mTts == null) {
    mTts = new tts();
  }
  var strUrl = process.env.HOSTNAME;
  mTts.setServiceURL(strUrl);
  mTts.setAuth(
    process.env.CLIENT_KEY,
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET
  );
}

async function requestTTS(text) {
  onStart();

  var pitch = 50;
  var speed = 50;
  var speaker = 1;
  var volume = 50;
  var language = "ko";
  var encoding = "mp3";
  var channel = 1;
  var sampleRate = 16000;
  var sampleFmt = "S16LE";

  console.log(">> 호출 결과 대기중...");
  var resultJson = mTts.requestTTS(
    text,
    pitch,
    speed,
    speaker,
    volume,
    language,
    encoding,
    channel,
    sampleRate,
    sampleFmt
  );
  console.log("\n------------------------------");
  console.log("실행 결과");
  console.log("-------------------------------");

  var statusCode = await resultJson["statusCode"];
  if (statusCode == 200) {
    try {
      var buff = Buffer.from(resultJson["audioData"], "base64");
      let ttsfile =
        "ktaiapiclient/testfile/" + //path
        "SAMPLE_009" + //filename
        "." +
        encoding; //확장자
      fs.writeFileSync(ttsfile, buff);
      console.log("success");
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log("fail");
    console.log(JSON.stringify(resultJson));
  }
}

requestTTS("안녕하세요.");
