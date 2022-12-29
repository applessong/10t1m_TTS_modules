import * as GenerateVoice from "./GenerateVoice.js";

let testData = {
  filePath: {
    path: "./KT_tts_test/KTAiApiClient/TestFile/",
    fileName: "SAMPLE_020",
  },
  form: {
    text: "안녕하세요? 애플쏭이에요! 일만백만에 오신 것을 환영합니다.",
    pitch: 150, //50~150
    speed: 150, //50~150
    speaker: 210, //https://cloud.kt.com/product/aiapi/voicestudio/
    volume: 100, //50~150
    language: "ko", //한국어("ko"), 영어("en"), 일본어("ja"), 중국어("zh"), 스페인어("es")
    encoding: "mp3", //wav : "wav", mp3 : "mp3"
    emotion: "neutral", // "neutral", "happy", "angry", "calm", "sleepy", "sad", "excited", "fear", "disappointed"
    voiceName: "", //사용자가 생성한 custom목소리 옵션
    encodingOpt: {
      //JSON	X	encoding="wav"인 경우 필요.
      channel: 1, //1: 모노채널 2: 스테레오채널
      sampleRate: 0, //wma 형식에만 사용. 높을수록 음질수준 향상 - 8000, 16000, 24000, 44100, 48000
      sampleFmt: "", //Signed 16-bit Little Endian : "S16LE", Float 32-bit Little Endian : "F32LE"
    },
  },
};

let result = await GenerateVoice.makeVoice(testData);

console.log(result);

//"안녕하세요? 애플쏭이에요! 일만백만에 오신 것을 환영합니다."
//"Hello? I'm applesong! glad to meet you and welcome"
