import * as GenerateVoice from "./GenerateVoice.js";

let testData = {
  filePath: {
    path: "testFile/",
    fileName: "SAMPLE_005",
  },
  form: {
    text: "안녕하세요? 애플쏭이에요! 일만백만에 오신 것을 환영합니다.",
    speaker: "njinho",
    volume: "0", // -5 ~ 5
    speed: "-5", // -5 ~ 5
    pitch: "-5", // -5 ~ 5
    emotion: 0, //0: 중립, 1: 슬픔, 2: 기쁨, 3: 분노
    // "emotion-strength": 0, // emotion이 1이상일 때만 사용. 0: 약함, 1: 보통, 2: 강함
    format: "mp3", //wav : "wav", mp3 : "mp3"
    // "sampling-rate": 0, // format이 "wma"일 때만 사용. 높을수록 음질수준 향상 - 8000, 16000, 24000, 48000}
  },
};

//"emotion-strength", "sampling-rate"는 사용할 경우가 아니라면 프로퍼티자체가 없이 요청해야함

let result = await GenerateVoice.makeVoice(testData);

console.log(result);

//"안녕하세요? 애플쏭이에요! 일만백만에 오신 것을 환영합니다."
//"Hello? I'm applesong! glad to meet you and welcome"
