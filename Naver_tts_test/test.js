// 키, 시크릿 환경변수로 세팅해주기
// 데이터를 파라미터로 외부에서 받을 수 있도록 세팅 ( 백틱? 써서 ${pram} 이렇게 쓰는거였던듯? )
import { execSync } from "child_process";
import dotenv from "dotenv";
dotenv.config();

function naverTTS(voiceData) {
  let a = execSync(
    `curl "https://naveropenapi.apigw.ntruss.com/tts-premium/v1/tts" \
      -d "speaker=${voiceData.speaker}` +
      `&volume=${voiceData.volume}` +
      `&speed=${voiceData.speed}` +
      `&pitch=${voiceData.pitch}` +
      `&format=${voiceData.format}` +
      `&text=${voiceData.text}" \
      -H "Content-Type: application/x-www-form-urlencoded; charset=UTF-8" \
      -H "X-NCP-APIGW-API-KEY-ID:4eqq8sggei" \
      -H "X-NCP-APIGW-API-KEY:Zx2a6kvoEFNAhj9vRoOxnCrcToYXcIab1l1Rgg0U" -v \
          >${voiceData.path}SAMPLE_002.${voiceData.format}`
  );
}

// function requestNaverTTS(voiceData) {
//   let result = naverTTS(testdata);
//   console.log("////////////////////////");
//   console.log(result);
// }

// requestNaverTTS(testdata);
let testdata = {
  speaker: "nara",
  volume: 0,
  speed: 0,
  pitch: 0,
  format: "mp3",
  text: "안녕하세요? 애플쏭입니다! 일만백만에 오신 것을 환영합니다!",
  path: "./testFile/",
};

naverTTS(testdata);
