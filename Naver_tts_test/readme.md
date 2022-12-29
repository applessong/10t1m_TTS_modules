# Naver Clova Voice API

생성 일시: 2022년 12월 8일 오후 3:35
최종 편집 일시: 2022년 12월 28일 오전 10:28
태그: TTS

- **API**

  - GenetateVoice.js에서 API URL을 호출해 음성파일을 생성하는 함수를 모듈화
  - voiceController.js(임의의 Controller)에서 GenerateVoice.js에서 모듈화 한 함수를 참조해서 호출, 사용
  - 음성 생성에 필요한 데이터를 정의하고 해당 데이터를 삽입해 GenerateVoice.js의 함수 호출
  - GenerateVoice의 클래스 다이어그램
  
    ![naver_diagram.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6bbdae25-f29d-4fad-a0eb-3fdc4c617236/naver_diagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221228T022632Z&X-Amz-Expires=86400&X-Amz-Signature=d1beafc71df6fd4940522dfbff7491b3f05cda01d5abd5848f35aae4cb9abb39&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22naver_diagram.png%22&x-id=GetObject)
  - 음성 생성 함수 makeVoice 호출 시 파라미터로 제공하는 데이터 형식

    ```jsx
    let testData = {
      filePath: {
        path: "testFile/",
        fileName: "SAMPLE_004",
      },
      form: {
        text: "안녕하세요? 애플쏭이에요! 일만백만에 오신 것을 환영합니다.",
        speaker: "njinho",
        volume: "0", // -5 ~ 5
        speed: "0", // -5 ~ 5
        pitch: "0", // -5 ~ 5
        emotion: 0, //0: 중립, 1: 슬픔, 2: 기쁨, 3: 분노
        //"emotion-strength": 0, // emotion이 1이상일 때만 사용. 0: 약함, 1: 보통, 2: 강함
        format: "mp3", //wav : "wav", mp3 : "mp3"
        //"sampling-rate": 0, // format이 "wma"일 때만 사용. 높을수록 음질수준 향상 - 8000, 16000, 24000, 48000}
      },
    };

    //"emotion-strength", "sampling-rate"는 사용할 경우가 아니라면 프로퍼티자체가 없이 요청해야함
    ```

  - 음성 생성 함수 makeVoice 내부로직

    💡 데이터를 별도의 데이터 검증 과정 없이 파라미터로 넣어서 API호출만 하면 데이터 검증등은 서버상에서 진행됨

    ![naver_logic.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/abd87a02-378e-4df1-92bc-02c27345d2ee/naver_logic.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221228T022636Z&X-Amz-Expires=86400&X-Amz-Signature=7fe0642dcf10fb535542f787c5568a2dd8135fef2490f5e71d14bff4f2f166fc&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22naver_logic.png%22&x-id=GetObject)

- 출력가능한 목소리코드

  - 음성을 들어 볼 수 있는 페이지 링크  
    [NAVER CLOUD PLATFORM](https://www.ncloud.com/product/aiService/clovaVoice)

  - 💡 코드명 어두에 v가 있을 시 pitch 파라미터 사용불가능
    → PRO 목소리로 조금 더 자연스럽고 풍부한 음성

  - 💡 감정/감정강도여부 빈칸은 모두 미지원

  ***

  # Naver Clova Voice API 한국어 음성

  ### 여성

  | 이름         | 감정/감정강도여부 | 목소리코드    |
  | ------------ | ----------------- | ------------- |
  | 아라         | 0,1,2지원/미지원  | nara          |
  | 아라(화남)   |                   | dara_ang      |
  | 아라(상담원) |                   | nara_call     |
  | 아라         | 지원/지원         | vara          |
  | 미경         | 지원/지원         | vmikyung      |
  | 유나         | 지원/지원         | vyuna         |
  | 혜리         |                   | vhyeri        |
  | 미경         |                   | nes_c_mikyung |
  | 소현         |                   | nes_c_sohyun  |
  | 혜리         |                   | nes_c_hyeri   |
  | 민영         |                   | nminyoung     |
  | 예진         |                   | nyejin        |
  | 지윤         |                   | njiyun        |
  | 수진         |                   | nsujin        |
  | 고은         |                   | ngoeun        |
  | 은영         |                   | neunyoung     |
  | 선경         |                   | nsunkyung     |
  | 유진         |                   | nyujin        |
  | 선희         |                   | nsunhee       |
  | 민서         |                   | nminseo       |
  | 지원         |                   | njiwon        |
  | 보라         |                   | nbora         |
  | 기서         |                   | ntiffany      |
  | 늘봄         |                   | napple        |
  | 드림         |                   | njangj        |
  | 봄달         |                   | noyj          |
  | 은서         |                   | neunseo       |
  | 희라         |                   | nheera        |
  | 영미         |                   | nyoungmi      |
  | 나래         |                   | nnarae        |
  | 예지         |                   | nyeji         |
  | 유나         |                   | nyuna         |
  | 경리         |                   | nkyunglee     |
  | 민정         |                   | nminjeong     |
  | 이현         |                   | nihyun        |

  ### 남성

  | 이름 | 감정/감정강도여부 | 목소리코드  |
  | ---- | ----------------- | ----------- |
  | 진호 |                   | jinho       |
  | 민상 |                   | nminsang    |
  | 신우 |                   | nsinu       |
  | 진호 |                   | njinho      |
  | 지훈 |                   | njihun      |
  | 주안 |                   | njooahn     |
  | 성훈 |                   | nseonghoon  |
  | 지환 |                   | njihwan     |
  | 시윤 |                   | nsiyoon     |
  | 태진 |                   | ntaejin     |
  | 영일 |                   | nyoungil    |
  | 승표 |                   | nseungpyo   |
  | 원탁 |                   | nwontak     |
  | 종현 |                   | njonghyun   |
  | 준영 |                   | njoonyoung  |
  | 재욱 |                   | njaewook    |
  | 기효 |                   | nes_c_kihyo |
  | 래원 |                   | nraewon     |
  | 규원 |                   | nkyuwon     |
  | 기태 |                   | nkitae      |
  | 은우 |                   | neunwoo     |
  | 경태 |                   | nkyungtae   |
  | 우식 |                   | nwoosik     |

  ***

  ### 여아동

  | 이름 | 감정/감정강도여부 | 목소리코드 |
  | ---- | ----------------- | ---------- |
  | 다인 | 지원/지원         | vdain      |
  | 다인 |                   | ndain      |
  | 가람 |                   | ngaram     |

  ### 남아동

  | 이름 | 감정/감정강도여부 | 목소리코드 |
  | ---- | ----------------- | ---------- |
  | 하준 |                   | nhajun     |

  ***

  # Naver Clova Voice API 외국어 음성

  ### 영어

  | 이름   | 성별,연령 | 목소리 코드 |
  | ------ | --------- | ----------- |
  | 매트   | 남성      | matt        |
  | 클라라 | 여성      | clara       |
  | 안나   | 여성      | danna       |
  | 조이   | 여아동    | djoey       |

  ***

  ### 일본어

  | 이름         | 성별,연령 | 목소리 코드   |
  | ------------ | --------- | ------------- |
  | 신지         | 남성      | shinji        |
  | 하지메       | 남성      | dhajime       |
  | 다이키       | 남성      | ddaiki        |
  | 토모코       | 여성      | ntomoko       |
  | 나오미       | 여성      | nnaomi        |
  | 나오미(기쁨) | 여성      | dnaomi_joyful |
  | 나오미(뉴스) | 여성      | dnaomi_formal |
  | 리코         | 여성      | driko         |
  | 에리코       | 여성      | deriko        |
  | 사유리       | 여성      | nsayuri       |
  | 미오         | 여아동    | dmio          |
  | 아유무       | 남아동    | dayumu        |

  ***

  ### 중국어

  | 이름     | 성별,연령 | 목소리 코드 |
  | -------- | --------- | ----------- |
  | 량량     | 남성      | liangliang  |
  | 메이메이 | 여성      | meimei      |

  ***

  ### 대만어

  | 이름 | 성별,연령 | 목소리 코드 |
  | ---- | --------- | ----------- |
  | 관린 | 남성      | kuanlin     |
  | 차화 | 여성      | chiahua     |

  ***

  ### 스페인어

  | 이름   | 성별,연령 | 목소리 코드 |
  | ------ | --------- | ----------- |
  | 호세   | 남성      | jose        |
  | 카르멘 | 여성      | carmen      |

- 요금정책
  - 월 90,000원 정액제
  - 정액제 상품 결제 시 100만글자 합성가능
  - 100만글자 초과 시 1000글자당 100원 추가과금 (1글자당 0.1원)
