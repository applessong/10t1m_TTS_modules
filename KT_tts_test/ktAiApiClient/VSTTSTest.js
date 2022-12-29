import vstts from "./ktAiApiSDK/VSTTS.js";
var mVstts = new vstts();
import dotenv from "dotenv";
dotenv.config();
import fs from "fs";
import * as mm from "music-metadata";

function onStart() {
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
}

async function requestVSTTS(text) {
  onStart();

  var pitch = 100; //50~150
  var speed = 100; //50~150
  var speaker = 206; //https://cloud.kt.com/product/aiapi/voicestudio/
  var volume = 100; //50~150
  var language = "ko"; //한국어("ko"), 영어("en"), 일본어("ja"), 중국어("zh"), 스페인어("es")
  var encoding = "mp3"; //wav : "wav", mp3 : "mp3"
  var emotion = "happy"; // "neutral", "happy", "angry", "calm", "sleepy", "sad", "excited", "fear", "disappointed"
  var voiceName = ""; //사용자가 생성한 custom목소리 옵션
  var channel = 1; //1: 모노채널 2: 스테레오채널
  var sampleRate = 0; //wma 형식에만 사용. 높을수록 음질수준 향상 - 8000, 16000, 24000, 44100, 48000
  var sampleFmt = ""; //wma 형식에만 사용 -Signed 16-bit Little Endian : "S16LE", Float 32-bit Little Endian : "F32LE"

  console.log(">> 호출 결과 대기중...");
  var resultJson = await mVstts.requestVSTTS(
    text,
    pitch,
    speed,
    speaker,
    volume,
    language,
    encoding,
    emotion,
    voiceName,
    channel,
    sampleRate,
    sampleFmt
  );
  console.log("\n------------------------------");
  console.log("실행 결과");
  console.log("-------------------------------");

  var statusCode = resultJson["statusCode"];
  if (statusCode == 200) {
    try {
      var buff = Buffer.from(resultJson["audioData"], "base64");
      let vsttsfile =
        "ktaiapiclient/testfile/" + //path
        "SAMPLE_010" + //filename
        "." +
        encoding; //확장자
      fs.writeFileSync(vsttsfile, buff);
      console.log(vsttsfile);
      console.log(JSON.stringify(resultJson.statusCode));
      let runtime = await getVoiceLength(vsttsfile);
      console.log(runtime);
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

requestVSTTS(
  "안녕하세요? 일만백만의 애플쏭입니다! Hi i'm applesong. 생일은 10월 14일 입니다...."
);
//TTSTest <- 이것도 되는지 확인 -> 안댐; ㅋㅋ
