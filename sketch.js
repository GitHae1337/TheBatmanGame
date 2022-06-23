/* 변수 선언 */
// Page를 담을 배열
let Pages = [30];

// 단계를 나타내는 숫자
let stage;

// 마우스 커서
let mouseNoClick, mouseClick;

// Evidence (증거물)
// 각 증거물에 대한 Data 변수
let letter, cipher, thumb, usb;
// 각 증거물에 대한 이미지 변수
let letterImg1, letterImg2, letterImg3, 
cipherImg1, cipherImg2, cipherImg3, 
thumbImg1, thumbImg2, thumbImg3, usbImg;
// 각 증거물의 화면에 대한 이미지 변수
let letterScreen,
  cipherScreen,
  cipherSolvedScreen,
  thumbScreen,
  usbScreen;
// 각 증거물마다 갖고 있어야하는 이미지 배열 (증거물 이미지 자체, 증거물 클릭했을 때의 화면 등)
let letterArr = [];
let cipherArr = [];
let thumbArr = [];
let usbArr = [];

// Installation (설치물)
// 각 설치물에 대한 Data 변수
let computer, pathLock, carLock;
// 각 설치물에 대한 이미지 변수
let computerImg, computerImg2, computerImg1Mark, computerImg2Mark, computerImg3,
  pathLockImg, pathUnlockImg, carLockImg, carUnlockImg, carDoor;
// 각 설치물의 화면에 대한 이미지 변수
let computerScreen1, computerScreen2, computerScreen3,
  pathLockScreen, pathUnlockScreen, carLockScreen, carUnlockScreen;
// 각 설치물마다 갖고 있어야하는 이미지 배열 (설치물 이미지 자체, 설치물 클릭했을 때의 화면 등)
let computerArr = [];
let pathLockArr = [];
let carLockArr = [];

// Button (버튼)
// 각 버튼에 대한 Data 변수
let startBtn,
  nextBtn,
  leftBtn,
  rightBtn,
  restartBtn,
  backBtn,
  explainBtn,
  mapBtn,
  hintBtn,
  returnBtn,
  downBtn,
  pathLockResetBtn,
  pathLockEnterBtn,
  carLockResetBtn,
  carLockEnterBtn;
// 각 버튼에 대한 이미지 변수
let startBtn1, startBtn2, startBtn3;
let nextBtn1, nextBtn2, nextBtn3;
let leftBtn1, leftBtn2, leftBtn3;
let rightBtn1, rightBtn2, rightBtn3;
let restartBtn1, restartBtn2, restartBtn3;
let backBtn1, backBtn2;
let explainBtn1, explainBtn2, explainBtn3;
let mapBtn1, mapBtn2, mapBtn3;
let hintBtn1, hintBtn2;
let returnBtn1, returnBtn2;
let downBtn1, downBtn2;
// 각 버튼마다 갖고 있어야 하는 이미지 배열 (Hover X && Click X, Hover O && Click X, Hover O && Click O)
let startBtnArr = [];
let nextBtnArr = [];
let leftBtnArr = [];
let rightBtnArr = [];
let restartBtnArr = [];
let backBtnArr = [];
let explainBtnArr = [];
let mapBtnArr = [];
let hintBtnArr = [];
let returnBtnArr = [];
let downBtnArr = [];
let pathLockAlphabets = [];   // 통로 잠금 장치 입력 버튼
let carLockAlphabets = [];    // 자동차 잠금 장치 입력 버튼

// inventory 이미지 변수
let inventoryImg;
// inventory 객체 변수
let inventory;

// Page (배경)
// 각 Page 이미지 변수
let startBG,
  synopsisBG,
  gameExplainBG,
  mapBG1,
  mapBG2,
  livingRoomBG,
  studyBG,
  closedPathBG,
  openPath1BG,
  openPath2BG,
  closedCarBG,
  openCarBG,
  anagramHintBG,
  anagramBG,
  carLockHintBG,
  talkBG1,
  talkBG2,
  talkBG3,
  talkBG4,
  talkBG5,
  gameClearBG,
  easterEggBG;
// 각 Page마다 갖고 있어야 하는 증거물 배열
let livingRoomEvidenceArr = [];
let studyEvidenceArr = [];
let openGarageEvidenceArr = [];

// 집들
let mayorHouse, house2, house3, house4, house5, house6, house7, house8, house9;

// 타이머 시작 여부 (type: boolean)
let timerStart;

// 암호표 해결, 통로 잠금장치 해결, 자동차 잠금장치 해결, 컴퓨터 해결 여부, 입력한 결과 시간 값이 맞는지 여부 (type: boolean)
let cipherSolved, computerSolved, pathLockSolved, carLockSolved, correctTime;

// 타이머 시간 (초)
let timer;

// Font (폰트)
let riddlerFont, labDigitalFont, pathLockFont, carLockFont;

// 이전 stage에 관한 정보(왜냐하면 letterScreen, cipherSolvedScreen처럼 증거물을 어디든지 열 수 있게 해당 정보를 저장해야하기 때문에)
let prevStage = 0;

// 버튼 좌표
let restartBtnX, restartBtnY;
let returnBtnX, returnBtnY;
let leftBtnX, leftBtnY, rightBtnX, rightBtnY;
let mapBtnX, mapBtnY;
let explainBtnX, explainBtnY;
let hintBtnX, hintBtnY;
let backBtnX, backBtnY;
let nextBtnX, nextBtnY;
let pathLockX, pathLockY;
let carLockX, carLockY; 
let downBtnX, downBtnY;

let d;    // 원 버튼의 중심과 마우스 좌표 간의 거리

// 암호표 입력 창 및 확인 버튼
let cipherInput, cipherEnterBtn;

// 통로 잠금 장치 입력 문자를 한 개씩 저장하는 배열 (입력 문자 배열)
let pathLockInputArr = [];
// 통로 잠금 장치 입력 문자열
let pathLockPwStr;
// 자동차 잠금 장치 입력 문자를 한 개씩 저장하는 배열 (입력 문자 배열)
let carLockInputArr = [];
// 자동차 잠금 장치 입력 문자열
let carLockPwStr;

// 나중에 사용하는 인벤토리 내 아이템인 thumb과 usb
let thumbItem, usbItem;

// 정답 시간을 입력하는 창 이미지
let resultImg;
// 정답 시간을 적는 입력란
let resultTime;
// 정답 분을 적는 입력란
let resultMinute;
// 정답 시간을 확인하는 버튼
let resultBtn;

// easter egg video
let easterEggVid, easterEggKey, pressedKeys;

// music
let openingMusic, gamePlayMusic, endingMusic, gameOverSE, fiftyEightSecondsSE;

// fade를 위한 변수
let fade, fadeAmount;

let gameOverIdx;
let fiftyEightIdx;

// 모든 Page 설정 및 게임 내 사용되는 모든 Asset 불러오기
function preload() {
  /* Pages */
  // 게임 시작 Page
  startBG = loadImage("Page/startBG.png");
  // 시놉시스 Page
  synopsisBG = loadImage("Page/synopsisBG.png");
  // 게임 설명 Page
  gameExplainBG = loadImage("Page/gameExplainBG.png");
  // 지도(회색) Page
  mapBG1 = loadImage("Page/mapBG1.png");
  // 지도 (컬러) Page
  mapBG2 = loadImage("Page/mapBG2.png");
  // 사건 현장 - 거실 Page
  livingRoomBG = loadImage("Page/livingRoomBG.png");
  // 사건 현장 - 서재 Page
  studyBG = loadImage("Page/studyBG.png");
  // 사건 현장 - 통로방(닫힘) Page
  closedPathBG = loadImage("Page/closedPathBG.png");
  // 사건 현장 - 통로방(열림, 차 문 닫힘) Page
  openPath1BG = loadImage("Page/openPath1BG.png");
  // 사건 현장 - 통로방(열림, 차 문 열림) Page
  openPath2BG = loadImage("Page/openPath2BG.png");
  // 사건 현장 - 차고(차 문 닫힘) Page
  closedCarBG = loadImage("Page/closedCarBG.png");
  // 사건 현장 - 차고(차 문 열림) Page
  openCarBG = loadImage("Page/openCarBG.png");
  // 게임 실패 Page
  gameOverBG = loadImage("Page/gameOverBG.png");
  // 애너그램 설명 화면
  anagramBG = loadImage("Page/anagramBG.png");
  // 애너그램 힌트 화면
  anagramHintBG = loadImage("Page/anagramHintBG.png");
  // 차고 힌트 장면 (세상을 뒤집어보라)
  carLockHintBG = loadImage("Page/carLockHintBG.png");
  // 결말 화면
  talkBG1 = loadImage("Page/talkBG1.png");
  talkBG2 = loadImage("Page/talkBG2.png");
  talkBG3 = loadImage("Page/talkBG3.png");
  talkBG4 = loadImage("Page/talkBG4.png");
  talkBG5 = loadImage("Page/talkBG5.png");
  gameClearBG = loadImage("Page/gameClearBG.png");
  easterEggBG = loadImage("Page/blackBG.png");

  /* Evidences */
  // 증거물: 편지 (기본)
  letterImg1 = loadImage("Evidence/letterNormal.png");
  // 증거물: 편지 (Hover)
  letterImg2 = loadImage("Evidence/letterMouseOver.png");
  // 증거물: 편지 (클릭)
  letterImg3 = loadImage("Evidence/letterMouseClicked.png");
  // 증거물: 암호표 (기본)
  cipherImg1 = loadImage("Evidence/cipher1.png");
  // 증거물: 암호표 (Hover)
  cipherImg2 = loadImage("Evidence/cipher2.png");
  // 증거물: 암호표 (클릭)
  cipherImg3 = loadImage("Evidence/cipher3.png");
  // 증거물: 엄지 (기본)
  thumbImg1 = loadImage("Evidence/thumbNormal.png");
  // 증거물: 엄지 (Hover)
  thumbImg2 = loadImage("Evidence/thumbMouseOver.png");
  // 증거물: 엄지 (클릭)
  thumbImg3 = loadImage("Evidence/thumbMouseClicked.png");
  // 증거물: USB
  usbImg = loadImage("Evidence/usbImg.png");

  // 증거물 화면: 편지 - 퀴즈
  letterScreen = loadImage("Evidence/letterScreen.png");
  // 증거물 화면: 암호표
  cipherScreen = loadImage("Evidence/cipherScreen.png");
  // 증거물 화면: 암호표 결과
  cipherSolvedScreen = loadImage("Evidence/cipherSolvedScreen.png");
  // 증거물 화면: 엄지
  thumbScreen = loadImage("Evidence/thumbScreen.png");
  // * 증거물 화면: USB
  usbScreen = loadImage("Evidence/usbScreen.png");

  /* Installations */
  // 설치물: 컴퓨터 (해결 전)
  computerImg = loadImage("Installation/computerImg.png");
  // 설치물: 컴퓨터 (해결 전, hover)
  computerImg2 = loadImage("Installation/computerImg2.png");
  // 설치물: 컴퓨터 (usb 획득 후, usb 삽입 전)
  computerImg1Mark = loadImage("Installation/computerImg1Mark.png");
  // 설치물: 컴퓨터 (usb 획득 후, usb 삽입 전, hover)
  computerImg2Mark = loadImage("Installation/computerImg2Mark.png");
  // 설치물: 컴퓨터 (usb 획득 후, usb 삽입 후)
  computerImg3 = loadImage("Installation/computerImg3.png");
  // 설치물: 통로 장금장치 (해결 전)
  pathLockImg = loadImage("Installation/pathLockImg.png");
  // 설치물: 통로 잠금장치 (해결 후)
  pathUnlockImg = loadImage("Installation/pathUnlockImg.png");
  // 설치물: 자동차 잠금장치 (해결 전)
  carLockImg = loadImage("Installation/carLockImg.png");
  // 설치물: 자동차 잠금장치 (해결 후)
  carUnlockImg = loadImage("Installation/carUnlockImg.png");
  // 설치물: 차 문
  carDoor = loadImage("Installation/carDoor.png");

  // 설치물 화면: 컴퓨터#1 (USB 연결하기 전)
  computerScreen1 = loadImage("Installation/computerScreen1.png");
  // 설치물 화면: 컴퓨터#2 (USB 연결 후,  <?> 뜬 화면)
  computerScreen2 = loadImage("Installation/computerScreen2.png");
  // 설치물 화면: 컴퓨터#3 (USB 연결 후, 장소, 시간 뜬 화면)
  computerScreen3 = loadImage("Installation/computerScreen3.png");
  // 설치물 화면: 통로 잠금장치 (해결 전)
  pathLockScreen = loadImage("Installation/pathLockScreen.png");
  // 설치물 화면: 통로 잠금장치 (해결 후)
  pathUnlockScreen = loadImage("Installation/pathUnlockScreen.png");
  // 설치물 화면: 자동차 잠금장치 (해결 전)
  carLockScreen = loadImage("Installation/carLockScreen.png");
  // 설치물 화면: 자동차 잠금장치 (해결 후)
  carUnlockScreen = loadImage("Installation/carUnlockScreen.png");

  /* Buttons */
  // 시작화면 버튼
  startBtn1 = loadImage("Button/startBtn1.png");
  startBtn2 = loadImage("Button/startBtn2.png");
  startBtn3 = loadImage("Button/startBtn3.png");

  // 다음 화면으로 전환 버튼
  nextBtn1 = loadImage("Button/next1.png");
  nextBtn2 = loadImage("Button/next2.png");
  nextBtn3 = loadImage("Button/next3.png");

  // 현재의 왼쪽 화면으로 전환
  leftBtn1 = loadImage("Button/left1.png");
  leftBtn2 = loadImage("Button/left2.png");
  leftBtn3 = loadImage("Button/left3.png");

  // 현재의 오른쪽 화면으로 전환
  rightBtn1 = loadImage("Button/right1.png");
  rightBtn2 = loadImage("Button/right2.png");
  rightBtn3 = loadImage("Button/right3.png");

  // 설명서 열기
  explainBtn1 = loadImage("Button/explain1.png");
  explainBtn2 = loadImage("Button/explain2.png");
  explainBtn3 = loadImage("Button/explain3.png");

  // 힌트 버튼(문자 한개씩 보여주기, HO LOOO SOOOO! -> HE LIOO STOOO!)
  hintBtn1 = loadImage("Button/hintBtn1.png");
  hintBtn2 = loadImage("Button/hintBtn2.png");

  // 재시작하기
  restartBtn1 = loadImage("Button/restart1.png");
  restartBtn2 = loadImage("Button/restart2.png");
  restartBtn3 = loadImage("Button/restart3.png");

  // 지도 Page로 전환하는 버튼 이미지
  mapBtn1 = loadImage("Button/mapBtn1.png");
  mapBtn2 = loadImage("Button/mapBtn2.png");
  mapBtn3 = loadImage("Button/mapBtn3.png"); 

  // 뒤로가기 버튼
  backBtn1 = loadImage("Button/backBtn1.png");
  backBtn2 = loadImage("Button/backBtn2.png");

  // 되돌아가기 버튼
  returnBtn1 = loadImage("Button/returnBtn1.png");
  returnBtn2 = loadImage("Button/returnBtn2.png");

  // 결말 넘기기 버튼 
  downBtn1 = loadImage("Button/downBtn1.png");
  downBtn2 = loadImage("Button/downBtn2.png");
  
  /* Mouse Cursor */
  mouseClick = loadImage("mouseCursor/mouseClick.png");
  mouseNoClick = loadImage("mouseCursor/mouseNoClick.png");

  // 지도에 있는 집들
  mayorHouse = loadImage("Page/house1.png");
  house2 = loadImage("Page/house2.png");
  house3 = loadImage("Page/house3.png");
  house4 = loadImage("Page/house4.png");
  house5 = loadImage("Page/house5.png");
  house6 = loadImage("Page/house6.png");
  house7 = loadImage("Page/house7.png");
  house8 = loadImage("Page/house8.png");
  house9 = loadImage("Page/house9.png");

  // 지도에서 정답을 입력하는 창
  resultImg = loadImage("InputTime/inputTime.png");

  /* Font */
  // riddler font
  riddlerFont = loadFont("Font/Riddler Writing 2022.ttf");
  // lab digital font
  labDigitalFont = loadFont("Font/LAB_DIGITAL.ttf");
  // pathLock 버튼에 쓰는 font
  pathLockFont = loadFont("Font/times new roman.ttf");
  // carLock 버튼에 쓰는 font
  carLockFont = loadFont("Font/Fiorello CG Condensed Regular.otf");

  /* Inventory */
  inventoryImg = loadImage("Inventory/inventory.png");

  // easter egg video
  easterEggVid = createVideo("Video/goodbye.mp4");
  easterEggVid.size(850);
  easterEggVid.hide();
  pressedKeys = "";

  // sound
  openingMusic = loadSound("Sound/openingMusic.mp3");
  gamePlayMusic = loadSound("Sound/gamePlayMusic.mp3");
  endingMusic = loadSound("Sound/endingMusic.mp3");
  gameOverSE = loadSound("Sound/Oh, you're really not as smart as I thought you were.mp3");
  fiftyEightSecondsSE = loadSound("Sound/58 seconds!.mp3");
}

// 불러온 이미지 객체 등을 바탕으로 Data, Evidence, Installation, Page 객체 생성 및 배열에 담음
function setup() {
  // 실제 마우스 커서 제거
  noCursor();

  // 캔버스 크기 설정
  createCanvas(853, 480);

  /* 증거물/설치물 객체 생성 및 배열에 담기 */
  // letter(리들러의 편지) 관련 이미지 배열에 담기
  letterArr.push(letterImg1);
  letterArr.push(letterImg2);
  letterArr.push(letterImg3);
  letterArr.push(letterScreen);
  // Evidence: letter(리들러의 편지) 객체 생성
  letter = new Evidence("리들러의 편지", letterArr, 560, 326);

  // cipher(암호표) 관련 이미지 배열에 담기
  cipherArr.push(cipherImg1);
  cipherArr.push(cipherImg2);
  cipherArr.push(cipherImg3);
  cipherArr.push(cipherScreen);
  cipherArr.push(cipherSolvedScreen);
  // Evidence: cipher(암호표) 객체 생성
  cipher = new Evidence("암호표", cipherArr, 434, 324);

  // thumb(잘려있는 엄지) 관련 이미지 배열에 담기
  thumbArr.push(thumbImg1);
  thumbArr.push(thumbImg2);
  thumbArr.push(thumbImg3);
  thumbArr.push(thumbScreen);
  // Evidence: thumb(잘려있는 엄지) 객체 생성
  thumb = new Evidence("잘려있는 엄지", thumbArr, 324, 420);

  // usb(USB) 관련 이미지 배열에 담기
  usbArr.push(usbImg);
  usbArr.push(usbScreen);
  // Evidence: usb(USB) 객체 생성
  usb = new Evidence("USB", usbArr, 510, 330);

  // computer(컴퓨터) 관련 이미지 배열에 담기
  computerArr.push(computerImg);
  computerArr.push(computerImg2);
  computerArr.push(computerImg1Mark);
  computerArr.push(computerImg2Mark);
  computerArr.push(computerImg3);
  computerArr.push(computerScreen1);
  computerArr.push(computerScreen2);
  computerArr.push(computerScreen3);
  // Installation: computer(컴퓨터)
  computer = new Installation("컴퓨터", computerArr, width/2, height/2);

  // pathLock(통로 잠금장치) 관련 이미지 배열에 담기
  pathLockArr.push(pathLockImg);
  pathLockArr.push(pathUnlockImg);
  pathLockArr.push(pathLockScreen);
  pathLockArr.push(pathUnlockScreen);
  // Installation: pathLock(통로 잠금장치)
  pathLock = new Installation("통로 잠금장치", pathLockArr, width/2, height/2);

  // carLock(자동차 잠금장치) 관련 이미지 배열에 담기
  carLockArr.push(carLockImg);
  carLockArr.push(carUnlockImg);
  carLockArr.push(carLockScreen);
  carLockArr.push(carUnlockScreen);
  carLockArr.push(carDoor);
  // Installation: carLock(자동차 잠금장치)
  carLock = new Installation("자동차 잠금장치", carLockArr, width/2, height/2);

  // startBtn(시작 버튼) 관련 이미지 배열에 담기
  startBtnArr.push(startBtn1);
  startBtnArr.push(startBtn2);
  startBtnArr.push(startBtn3);
  // Button: startBtn(시작화면 버튼)
  startBtn = new Data("startBtn", startBtnArr, width/2, height*3/4);

  // nextBtn(다음 버튼) 관련 이미지 배열에 담기
  nextBtnArr.push(nextBtn1);
  nextBtnArr.push(nextBtn2);
  nextBtnArr.push(nextBtn3);
  // Button: startBtn(시작화면 버튼)
  nextBtn = new Data("nextBtn", nextBtnArr);

  // restartBtn(재시작 버튼) 관련 이미지 배열에 담기
  restartBtnArr.push(restartBtn1);
  restartBtnArr.push(restartBtn2);
  restartBtnArr.push(restartBtn3);
  // Button: startBtn(시작화면 버튼)
  restartBtn = new Data("restartBtn", restartBtnArr);

  // leftBtn(사건현장 왼쪽으로 가는 버튼) 관련 이미지 배열에 담기
  leftBtnArr.push(leftBtn1);
  leftBtnArr.push(leftBtn2);
  leftBtnArr.push(leftBtn3);
  // Button: leftBtn(왼쪽 화면 전환 버튼)
  leftBtn = new Data("leftBtn", leftBtnArr);
  
  // rightBtn(사건현장 오른쪽으로 가는 버튼) 관련 이미지 배열에 담기
  rightBtnArr.push(rightBtn1);
  rightBtnArr.push(rightBtn2);
  rightBtnArr.push(rightBtn3);
  // Button: rightBtn(오른쪽 화면 전환 버튼)
  rightBtn = new Data("rightBtn", rightBtnArr);

  // mapBtn(지도로 돌아가는 버튼) 관련 이미지 배열에 담기
  mapBtnArr.push(mapBtn1);
  mapBtnArr.push(mapBtn2);
  mapBtnArr.push(mapBtn3);
  // Button: mapBtn(맵 버튼)
  mapBtn = new Data("mapBtn", mapBtnArr);

  // explainBtn (설명 버튼) 관련 이미지 배열에 담기
  explainBtnArr.push(explainBtn1);
  explainBtnArr.push(explainBtn2);
  explainBtnArr.push(explainBtn3);
  // Button: explain(설명 버튼)
  explainBtn = new Data("explainBtn", explainBtnArr);

  // hintBtn (힌트 버튼) 관련 이미지 배열에 담기
  hintBtnArr.push(hintBtn1);
  hintBtnArr.push(hintBtn2);
  // Button: hintBtn(힌트 버튼)
  hintBtn = new Data("hintBtn", hintBtnArr);

  // backBtn(뒤로가기 버튼) 관련 이미지 배열에 담기
  backBtnArr.push(backBtn1);
  backBtnArr.push(backBtn2);
  // Button: backBtn(뒤로가기 버튼)
  backBtn = new Data("backBtn", backBtnArr);

  // returnBtn (되돌아가기 버튼) 관련 이미지 배열에 담기
  returnBtnArr.push(returnBtn1);
  returnBtnArr.push(returnBtn2);
  // Button: returnBtn(되돌아가기 버튼)
  returnBtn = new Data("returnBtn", returnBtnArr);
 
  // downBtn (결말에서 진행하는 버튼) 관련 이미지 배열에 담기
  downBtnArr.push(downBtn1);
  downBtnArr.push(downBtn2);
  // Button: downBtn(스토리 진행시키는 버튼)
  downBtn = new Data("downBtn", downBtnArr);

  // cipherInput(암호표에서 값을 입력하는 창) 생성
  cipherInput = createInput();
  // cipherEnterBtn(암호표에서 값을 입력했을 때 보여주는 버튼) 생성
  cipherEnterBtn = createButton("Enter");
  // 일단 사용하기 전까지 숨기기
  cipherInput.hide();
  cipherEnterBtn.hide();

  // 결과 입력 창 (시간)
  resultTime = createInput();
  resultTime.style('font-size', '24px');
  resultTime.style('font', 'Font/times new roman.ttf');
  // 결과 입력 창 (분)
  resultMinute = createInput();
  resultMinute.style('font-size', '24px');
  // 결과 확인 버튼
  resultBtn = createButton("Enter");
  // 일단 사용하기 전까지 숨기기
  resultTime.hide();
  resultMinute.hide();
  resultBtn.hide();

  /* 통로 잠금 장치 */
  // 알파벳 문자 객체 생성 하여 버튼 배열에 추가 
  // k: 현재 확인하는 열, j: 현재 확인하는 행, i: 알파벳 index
  for (let k = 0, j = 0, i = 0; i < 26; i++, k++) {
    // 한 행에 6개의 버튼을 주기 위해 자리 바꿈 진행
    if (i != 0 && i % 6 == 0) {
      j++;
      k = 0;
    }
    // 현재 알파벳
    let c = String.fromCharCode(65 + i);
    // 버튼 객체 생성
    let myBtn = new myButton("pathLockInput", c, 255 + 50*k, 140 + 38*j, 42, 30);
    // 버튼 배열에 추가
    pathLockAlphabets.push(myBtn);
  }
  // 잠금 장치 확인 버튼
  pathLockEnterBtn = new myButton("pathLockEnter", "Enter", 360, 294, 55, 25);
  // 잠금 장치 리셋 버튼
  pathLockResetBtn = new myButton("pathLockReset", "Reset", 420, 294, 55, 25);
  
  /* 자동차 잠금 장치 */
  // 알파벳 문자 객체 생성 하여 버튼 배열에 추가 
  // k: 현재 확인하는 열, j: 현재 확인하는 행, i: 알파벳 index
  for (let k = 0, j = 0, i = 0; i < 26; i++, k++) {
    // 한 행에 9개의 버튼을 주기 위해 자리 바꿈 진행
    if (i != 0 && i % 9 == 0) {
      j++;
      k = 0;
    }
    // 현재 알파벳
    let c = String.fromCharCode(65 + i);
    // 버튼 객체 생성
    let myBtn = new myButton("carLockInput", c, 43 + 85*k, 161 + 85*j, 60, 60);
    // 버튼 배열에 추가
    carLockAlphabets.push(myBtn);
  }
  // 자동차 잠금 장치 확인 버튼
  carLockEnterBtn = new myButton("carLockEnter", "Enter", 726, 331, 80, 60);
  // 자동차 잠금 장치 리셋 버튼
  carLockResetBtn = new myButton("carLockReset", "Reset", 726, 400, 80, 60);

  /* 각 페이지마다 어떤 증거가 있는지 */
  // 거실에 있는 증거
  livingRoomEvidenceArr.push(letter);
  livingRoomEvidenceArr.push(thumb);
  // 서재에 있는 증거
  studyEvidenceArr.push(cipher);
  // 차문 열려있는 차고에 있는 증거
  openGarageEvidenceArr.push(usb);

  /* Pages에 Page 추가 */
  // Page 0: start(게임 시작)
  Pages[0] = new Page("start", startBG, null);
  // Page 1: synopsis(시놉시스)
  Pages.push(new Page("synopsis", synopsisBG, null));
  // Page 2: gameExplain (게임 설명)
  Pages.push(new Page("gameExplain", gameExplainBG, null));
  // Page 3: map(지도)
  Pages.push(new Page("map", mapBG2, null));
  // Page 4: livingRoom(사건 현장 - 거실)
  Pages.push(new Page("livingRoom", livingRoomBG, livingRoomEvidenceArr));
  // Page 5: study(사건 현장 - 서재)
  Pages.push(new Page("study", studyBG, studyEvidenceArr));
  // Page 6: closedPath(사건 현장 - 통로방(닫힘))
  Pages.push(new Page("closedPath", closedPathBG, null));
  // Page 7: openPath1(사건 현장 - 통로방(열림))
  Pages.push(new Page("openPath1", openPath1BG, null));
  // Page 8: openPath2(사건 현장 - 통로방(열림),차 문 열림)
  Pages.push(new Page("openPath2", openPath2BG, null));
  // Page 9: closedCar(사건 현장 - 차고(차 문 닫힘))
  Pages.push(new Page("closedCar", closedCarBG, null));
  // Page 10: openCar(사건 현장 - 차고(차 문 열림))
  Pages.push(new Page("openCar", openCarBG, openGarageEvidenceArr));
  // Page 11: talkBG1 (게임 종료 화면#1, 성공)
  Pages.push(new Page("talkBG1", talkBG1, null));
  // Page 12: letterScreen (편지 화면)
  Pages.push(new Page("letterScreen", letterScreen, null));
  // Page 13: anagramExplain (편지 애너그램 설명 화면)
  Pages.push(new Page("anagramExplain", anagramBG, null));
  // Page 14: anagramHint (편지 힌트 화면)
  Pages.push(new Page("anagramHint",anagramHintBG, null));
  // Page 15: thumbScreen (지문 화면)
  Pages.push(new Page("thumbScreen", thumbScreen, null));
  // Page 16: cipherScreen (암호표 화면)
  Pages.push(new Page("cipherScreen", cipherScreen, null));
  // Page 17: usbScreen (usb 화면)
  Pages.push(new Page("usbScreen", usbScreen, null));
  // Page 18: computerScreen (컴퓨터 화면)
  Pages.push(new Page("computerScreen", computerScreen1, null));  
  // Page 19: pathLockScreen (통로 잠금장치 화면)
  Pages.push(new Page("pathLockScreen", pathLockScreen, null));
  // Page 20: carLockScreen (자동차 잠금장치 화면)
  Pages.push(new Page("carLockScreen", carLockScreen, null));
  // Page 21: GameOver (게임 실패 화면)
  Pages.push(new Page("gameOver", gameOverBG, null));
  // Page 22: talkBG2 (게임 결말 화면#2, 성공)
  Pages.push(new Page("talkBG2", talkBG2, null));
  // Page 23: talkBG3 (게임 결말 화면#3, 성공)
  Pages.push(new Page("talkBG3", talkBG3, null));
  // Page 24: talkBG4 (게임 결말 화면#4, 성공)
  Pages.push(new Page("talkBG4", talkBG4, null));
  // Page 25: talkBG5 (게임 결말 화면#5, 성공)
  Pages.push(new Page("talkBG5", talkBG5, null));
  // Page 26: 게임 클리어
  Pages.push(new Page("gameClearBG", gameClearBG, null));
  // Page 27: carLockHint (자동차 잠금장치 힌트 화면)
  Pages.push(new Page("carLockHintBG", carLockHintBG, null));
  // Page 28: easterEgg Page
  Pages.push(new Page("easterEggBG", easterEggBG, null));

  // 시작 단계를 0으로 초기화
  stage = 0;

  // 이미지 배치 시 주어진 좌표를 이미지의 중심으로 하여 출력
  imageMode(CENTER);

  // timer 초기 설정 (초)
  timer = 500;

  // timer 시작 여부
  timerStart = false;

  // 암호표 해결, 통로 잠금장치 해결, 자동차 잠금장치 해결, 컴퓨터 해결, 올바른 시간 입력 여부 (type: boolean)
  cipherSolved = false;
  pathLockSolved = false;
  carLockSolved = false;
  computerSolved = false;
  correctTime = false;

  // inventory 객체 생성
  inventory = new Inventory();

  // fade 관련 변수 초기화
  fade = 255;
  fadeAmount = -0.5;

  // 음악 볼륨 설정
  openingMusic.setVolume(1);
  gamePlayMusic.setVolume(1);
  endingMusic.setVolume(1.5);
  gameOverSE.setVolume(1);

  // 게임 오버 index
  gameOverIdx = 0;
  // 58초 효과음 index
  fiftyEightIdx = 0;
}

function draw() {
  clear();

  // Data 객체 Array의 각 요소마다의 Image 파일 Array를 담을 변수
  let imgArr;

  // lab digital로 폰트 설정
  textFont(labDigitalFont);
  
  // 현재 stage인 Page를 보인다
  Pages[stage].show();

  // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
  if (timerStart && frameCount % 60 == 0 && timer > 0) {
    timer--;
  }
  if (timer <= 0) {
    stage = 21;
  }

  // 게임 오버 효과음(리들러의 조롱) 재생
  if(!fiftyEightSecondsSE.isPlaying() && fiftyEightIdx == 0 && timer == 58){
    fiftyEightSecondsSE.play();
  }
  else if(fiftyEightSecondsSE.isPlaying()){
    fiftyEightIdx++;
  }

  // 인벤토리 위치 지정
  inventory.setPosX(740);

  // 암호표 입력란 및 버튼 숨기기 (필요한 stage에서만 보이도록 설정)
  cipherEnterBtn.hide();
  cipherInput.hide();
  // 결과 시간 입력란 및 버튼 숨기기
  resultTime.hide();
  resultMinute.hide();
  resultBtn.hide();

  // 화면 내 클릭하지 않은 상태의 이미지들만 보여줌 (클릭한 경우는 mouseClicked에서 관리)
  switch (stage) {
    // 게임 시작 화면
    case 0:
      // timer 재설정
      timer = 500;
      // timer 아직 map Page에서 시작하게 boolean 변수 변경
      timerStart = false;
      // 음악 관련
      gameOverIdx = 0;
      endingMusic.stop();
      gamePlayMusic.stop();
      gameOverSE.stop();
      if(!openingMusic.isPlaying()){
        openingMusic.play();
        openingMusic.loop(); 
      }
      /* 사용한 모든 값들을 초깃값으로 재설정 */
      // 증거물 배열 초기화
      livingRoomEvidenceArr = [];
      studyEvidenceArr = [];
      openGarageEvidenceArr = [];
      // 거실에 있는 증거 다시 채우기
      livingRoomEvidenceArr.push(letter);
      livingRoomEvidenceArr.push(thumb);
      // 서재에 있는 증거 다시 채우기
      studyEvidenceArr.push(cipher);
      // 차고에 있는 증거 다시 채우기
      openGarageEvidenceArr.push(usb);
      // Page: livingRoom(사건 현장 - 거실) 다시 초기화
      Pages[4] = new Page("livingRoom", livingRoomBG, livingRoomEvidenceArr);
      // Page: study(사건 현장 - 서재) 다시 초기화
      Pages[5] = new Page("study", studyBG, studyEvidenceArr);
      // Page: open car (사건 현장 - 차고(차 문 열림)) 다시 초기화
      Pages[10] = new Page("openCar", openCarBG, openGarageEvidenceArr);

      // 인벤토리 내 배열 초기화
      inventory.inventoryArr = [];
      // 증거물 모두 클릭 가능하게 변경
      letter.obtained = false;
      thumb.obtained = false;
      cipher.obtained = false;
      usb.obtained = false;
      // 암호표, 컴퓨터, 통로 잠금장치, 자동차 잠금장치 해결 여부, 올바른 시간 입력 여부(type: boolean)
      cipherSolved = false;
      computerSolved = false;
      pathLockSolved = false;
      carLockSolved = false;
      correctTime = false;
      // 증거물을 더블 클릭하여 정보를 확인한 후, 다시 화면으로 돌아갈때 그 화면에 대한 reference 값 초기화
      prevStage = 0;
      // 잠금장치 초기화
      // 통로 잠금장치
      for (let b of pathLockAlphabets) {
        b.color = color(204,204,204);
      }
      // 입력 문자 배열 초기화
      pathLockInputArr = [];
      // 자동차 잠금장치
      for (let b of carLockAlphabets) {
        b.color = color(204,204,204);
      }
      // 입력 문자 배열 초기화
      carLockInputArr = [];

      /* 화면 그리기 */
      // 시작 버튼 이미지 파일 배열 가져옴
      imgArr = startBtn.getImgArr();
      // 시작 버튼의 중심 x좌표, y좌표
      let startBtnX = width / 2;
      let startBtnY = (height * 3) / 4;
      // 검정색 버튼 그리기
      image(startBtn1, startBtnX, startBtnY);

      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false); 

      // 마우스가 버튼 위에 있는 경우: 회색 버튼 보이기
      if (mouseOver(
          startBtnX - startBtn1.width / 2,
          startBtnX + startBtn1.width / 2,
          startBtnY + startBtn1.height / 2,
          startBtnY - startBtn1.height / 2
          )) {
        // 두번째 버튼 이미지로 변경
        image(startBtn2, startBtnX, startBtnY);

        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      break;
    // 시놉시스 화면
    case 1:
      // nextBtn의 이미지 파일 배열 가져옴
      imgArr = nextBtn.getImgArr();

      // next 버튼의 중심 x좌표, y좌표(next 버튼 위치)
      nextBtnX = (width * 4) / 5;
      nextBtnY = (height * 5) / 6;

      // next 초기 버튼 그리기
      image(imgArr[0], nextBtnX, nextBtnY);

      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // 현재 마우스의 위치랑 nextBtn의 중심 좌표와의 거리
      d = dist(mouseX, mouseY, nextBtnX, nextBtnY);

      // 마우스가 버튼 위에 있는 경우: hover 상태의 next 버튼 보이기
      if (d < 50) {
        // mouseOver한 상태의 이미지 보이기
        image(imgArr[1], nextBtnX, nextBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      break;
    // 게임 설명 화면
    case 2:
      // nextBtn의 이미지 파일 배열 가져옴
      imgArr = nextBtn.getImgArr();

      // next 버튼의 중심 x좌표, y좌표(next 버튼 위치)
      nextBtnX = (width * 4) / 5;
      nextBtnY = (height * 5) / 6;

      // next 초기 버튼 그리기
      image(imgArr[0], nextBtnX, nextBtnY);

      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // 현재 마우스의 위치랑 nextBtn의 중심 좌표와의 거리
      d = dist(mouseX, mouseY, nextBtnX, nextBtnY);

      // 마우스가 버튼 위에 있는 경우: hover 상태의 next 버튼 보이기
      if (d < 50) {
        // mouseOver한 상태의 이미지 보이기
        image(imgArr[1], nextBtnX, nextBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      break;
    // 지도 화면
    case 3:
      // currStage 설정
      prevStage = 3;

      // 타이머 시작하도록 설정
      timerStart = true;

      // 게임을 모두 해결한 경우 (마지막 단계)
      if(computerSolved){
        // 배경 지우기
        clear();

        // 해결 후 배경 화면 그리기
        image(mapBG1, width/2, height/2, width, height);

        // Timer 보이기
        showTimer(0.1 * width, 0.1 * height);

        // 건물1~9 이미지 지도에 그림
        image(house2, 500, 100, 80, 110);
        image(house3, 355, 50, 80, 110);
        image(house4, 355, 200, 100, 130);
        image(house5, 390, 290, 60, 60);
        image(house6, 300, 380, 100, 100);
        image(house7, 220, 320, 60, 60);
        image(house8, 140, 220, 60, 80);
        image(house9, 200, 110, 60, 80);

        // 마우스 포인터 그리기
        showMousePointer(false);

        // 건물 2 마우스 함수
        if (mouseOver(460, 540, 140, 85)) {
          // 새로운 이미지(지도와 건물)로 덮기
          image(house2, 500, 100, 90, 120); // 건물2 확대
          // 마우스 포인터 그리기
          showMousePointer(false);
        }
        //건물3 마우스함수
        if (mouseOver(315, 390, 80, 15)) {
          image(house3, 355, 50, 90, 120); // 건물3 확대
          // 마우스 포인터 그리기
          showMousePointer(false);
        }
        //건물4 마우스함수
        if (mouseOver(305, 400, 230, 170)) {
          image(house4, 355, 200, 110, 140); // 건물4 확대
          // 마우스 포인터 그리기
          showMousePointer(false);
        }
        //건물5 마우스함수
        if (mouseOver(365, 410, 315, 260)) {
          image(house5, 390, 290, 70, 70); // 건물5 확대
          // 마우스 포인터 그리기
          showMousePointer(false);
        }
        //건물6 마우스함수
        if (mouseOver(250, 340, 410, 355)) {
          image(house6, 300, 380, 110, 110); // 건물6 확대
          // 마우스 포인터 그리기
          showMousePointer(false);
        }
        //건물7 마우스함수
        if (mouseOver(195, 245, 345, 290)) {
          image(house7, 220, 320, 70, 70); // 건물7 확대
          // 마우스 포인터 그리기
          showMousePointer(false);
        }
        //건물8 마우스함수
        if (mouseOver(110, 165, 240, 195)) {
          image(house8, 140, 220, 70, 90); // 건물8 확대
          // 마우스 포인터 그리기
          showMousePointer(false);
        }
        //건물9 마우스함수
        if (mouseOver(175, 225, 140, 80)) {
          image(house9, 200, 110, 70, 90); // 건물9 확대
          // 마우스 포인터 그리기
          showMousePointer(false);
        }

        // 시간 입력 배경 이미지 보이기
        image(resultImg, 0.8*width, 0.8*height);
        if(!correctTime){
          // 시간 입력 창과 버튼 보이기
          resultTime.show();
          resultMinute.show();
          resultBtn.show();
          // 위치 지정하기
          resultTime.position(577, 356);
          resultMinute.position(677, 356);
          resultBtn.position(740, 409);
          // 크기 지정하기
          resultTime.size(60, 40);
          resultMinute.size(60, 40);
          resultBtn.size(50, 30);
          // 결과 확인 버튼 클릭
          resultBtn.mousePressed(checkTime);
        }
        // 마우스 포인터 그리기
        showMousePointer(false);

      }
      // 게임을 아직 해결하지 않은 경우(시작 단계)
      else{
        // Timer 보이기
        showTimer(0.1 * width, 0.1 * height);
      }

      // 시장의 집 이미지의 중심 x좌표, y좌표
      let mayorHouseX = 775;
      let mayorHouseY = 55;
      // 시장의 집 그리기
      image(mayorHouse, mayorHouseX, mayorHouseY, 120, 100);

      // 마우스 포인터 그리기
      showMousePointer(false);

      // 마우스가 시장의 집 위에 있는 경우
      if (mouseOver(
          mayorHouseX - mayorHouse.width / 2,
          mayorHouseX + mayorHouse.width / 2,
          mayorHouseY + mayorHouse.height / 2,
          mayorHouseY - mayorHouse.height / 2
        )) {
        // 시장의 집 확대
        image(mayorHouse, mayorHouseX, mayorHouseY, 130, 110); 
        // 마우스 포인터 그리기
        showMousePointer(false);
      }

      break;
    // 사건 현장 - 거실 화면
    case 4:
      // 게임 시작 음악 취소
      openingMusic.stop();
      if(!gamePlayMusic.isPlaying()){
        // 게임 플레이 음악 시작
        gamePlayMusic.play();
        gamePlayMusic.loop();
      }

      // currStage 설정
      prevStage = 4;

      // 타이머 출력
      showTimer(0.12*width, 0.08*height);

      // 현재 Page 내 수집되지 않은 증거들을 가져와 화면에 출력
      for (let i = 0; i < Pages[stage].evidenceArr.length; i++) {
        image(
          Pages[stage].evidenceArr[i].imgArray[0], 
          Pages[stage].evidenceArr[i].dataX, 
          Pages[stage].evidenceArr[i].dataY
          );
      }

      // inventory 출력
      inventory.show();

      // 인벤토리 아이템 마우스 오버
      inventoryMouseOver();

      // 왼쪽 버튼 이미지 파일 배열 가져옴
      imgArr = leftBtn.getImgArr();
      // 왼쪽 버튼의 중심 x좌표, y좌표
      leftBtnX = 45;
      leftBtnY = 240;
      // 왼쪽 버튼 그리기
      image(imgArr[0], leftBtnX, leftBtnY);

      // 오른쪽 버튼 이미지 파일 배열 가져옴
      imgArr = rightBtn.getImgArr();
      // 오른쪽 버튼의 중심 x좌표, y좌표
      rightBtnX = 808;
      rightBtnY = 240;
      // 오른쪽 버튼 그리기
      image(imgArr[0], rightBtnX, rightBtnY);

      // 맵 버튼의 중심 x좌표, y좌표
      mapBtnX= 0.1*width, mapBtnY = 0.94*height;
      // usb를 컴퓨터에 연결하여 단서를 얻은 경우 맵 버튼을 보여준다
      if(computerSolved){
        // 맵 버튼 이미지 파일 배열 가져옴
        imgArr = mapBtn.getImgArr();
        // 맵 버튼 그리기
        image(imgArr[0], mapBtnX, mapBtnY);
      }

      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // 편지 위에 마우스가 있는 경우
      if(!letter.obtained && mouseOver
        (letter.dataX - letterImg1.width/2, 
        letter.dataX + letterImg1.width/2, 
        letter.dataY + letterImg1.height/2, 
        letter.dataY - letterImg1.height/2
        )) {
        image(letterImg2, letter.dataX, letter.dataY, letterImg2.width*1.1, letterImg2.height*1.1);

        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      // 엄지 위에 마우스가 있는 경우
      if(!thumb.obtained && mouseOver
        (thumb.dataX - thumbImg1.width/2, 
        thumb.dataX + thumbImg1.width/2, 
        thumb.dataY + thumbImg1.height/2, 
        thumb.dataY - thumbImg1.height/2
        )) {
        image(thumbImg2, thumb.dataX, thumb.dataY, thumbImg2.width*1.1, thumbImg2.height*1.1);

        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      // 왼쪽 전환 버튼 위에 마우스가 있는 경우
      if (mouseOver(0,45,480,0)) {
        // 왼쪽 버튼 이미지 파일 배열 가져옴
        imgArr = leftBtn.getImgArr();
        // 버튼
        image(imgArr[1], leftBtnX, leftBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      // 오른쪽 전환 버튼 위에 마우스가 있는 경우
      if (mouseOver(805,850,480,0)) {
        // 오른쪽 버튼 이미지 파일 배열 가져옴
        imgArr = rightBtn.getImgArr();
        // 버튼
        image(imgArr[1], rightBtnX, rightBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      // 맵 버튼 위에 마우스 오버
      if (computerSolved 
        && mouseOver(mapBtnX-mapBtn1.width/2, mapBtnX+mapBtn1.width/2, mapBtnY+mapBtn1.height/2, mapBtnY-mapBtn1.height/2)) {
        // 맵 버튼 이미지 파일 배열 가져옴
        imgArr = mapBtn.getImgArr();
        // 버튼
        image(imgArr[1], mapBtnX, mapBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      break;
    // 사건 현장 - 서재 화면
    case 5:
      // prevStage 설정
      prevStage = 5;

      // 타이머 출력
      showTimer(0.12*width, 0.08*height);

      // 현재 Page 내 수집되지 않은 증거들을 가져와 화면에 출력
      for (let i = 0; i < Pages[stage].evidenceArr.length; i++) {
        image(
          Pages[stage].evidenceArr[i].imgArray[0], 
          Pages[stage].evidenceArr[i].dataX, 
          Pages[stage].evidenceArr[i].dataY
          );
      }

      // inventory 출력
      inventory.show();
      // 인벤토리 아이템 마우스 오버
      inventoryMouseOver();

      // 왼쪽 버튼 이미지 파일 배열 가져옴
      imgArr = leftBtn.getImgArr();
      // 왼쪽 버튼의 중심 x좌표, y좌표
      leftBtnX = 45;
      leftBtnY = 240;
      // 왼쪽 버튼 그리기
      image(imgArr[0], leftBtnX, leftBtnY);

      // 오른쪽 버튼 이미지 파일 배열 가져옴
      imgArr = rightBtn.getImgArr();
      // 오른쪽 버튼의 중심 x좌표, y좌표
      rightBtnX = 808;
      rightBtnY = 240;
      // 오른쪽 버튼 그리기
      image(imgArr[0], rightBtnX, rightBtnY);

      // 컴퓨터 이미지 파일 배열 가져옴
      imgArr = computer.getImgArr();
      // 컴퓨터의 중심 x좌표, y좌표
      let computerX = width / 2;
      let computerY = (height / 2) - 10;
      // 컴퓨터 그리기
      // usb를 획득한 경우(computerImg1Mark)
      if(usb.obtained){
        // usb를 연결한 경우
        if(computerSolved){
          image(imgArr[4], computerX, computerY);
        }
        // usb를 연결하지 않은 경우
        else{
          image(imgArr[2], computerX, computerY);
        }
      }
      // 아직 usb를 획득하지 않은 경우(computerImg)
      else{
        image(imgArr[0], computerX, computerY);
      }

      // 맵 버튼의 중심 x좌표, y좌표
      mapBtnX= 0.1*width, mapBtnY = 0.94*height;
      // usb를 컴퓨터에 연결하여 단서를 얻은 경우 맵 버튼을 보여준다
      if(computerSolved){
        // 맵 버튼 이미지 파일 배열 가져옴
        imgArr = mapBtn.getImgArr();
        // 맵 버튼 그리기
        image(imgArr[0], mapBtnX, mapBtnY);
      }

      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // 암호표 위에 마우스가 있는 경우
      if(!cipher.obtained && mouseOver
        (cipher.dataX - cipherImg1.width/2, 
        cipher.dataX + cipherImg1.width/2, 
        cipher.dataY + cipherImg1.height/2, 
        cipher.dataY - cipherImg1.height/2
        )) {
        // mouseOver 이미지 보여주기
        image(cipherImg2, cipher.dataX, cipher.dataY, cipherImg2.width*1.1, cipherImg2.height*1.1);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      // 컴퓨터 이미지 파일 배열 가져옴
      imgArr = computer.getImgArr();
      // 컴퓨터 위에 마우스 오버
      if (mouseOver(
          computerX - imgArr[0].width / 2,
          computerX + imgArr[0].width / 2,
          computerY + imgArr[0].height / 2,
          computerY - imgArr[0].height / 2
        )) {
        // usb를 획득한 경우
        if(usb.obtained){
          // 컴퓨터에 usb를 연결한 경우
          if(computerSolved){
            image(imgArr[4], computerX, computerY);
          }
          // 컴퓨터에 usb를 연결하지 않은 경우
          else{
            image(imgArr[3], computerX, computerY);
          }  
        }
        // usb를 획득하지 않은 경우
        else{
          image(imgArr[1], computerX, computerY);  
        }

        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      // 마우스가 왼쪽 버튼 위에 있는 경우
      if (mouseOver(0, 45, 480, 0)) {
        // 왼쪽 버튼 이미지 파일 배열 가져옴
        imgArr = leftBtn.getImgArr();
        // 버튼
        image(imgArr[1], leftBtnX, leftBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      // 마우스가 오른쪽 버튼 위에 있는 경우
      if (mouseOver(805, 850, 480, 0)) {
        // 오른쪽 버튼 이미지 파일 배열 가져옴
        imgArr = rightBtn.getImgArr();
        // 버튼
        image(imgArr[1], rightBtnX, rightBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      // 맵 버튼 위에 마우스 오버
      if (computerSolved 
        && mouseOver(mapBtnX-mapBtn1.width/2, mapBtnX+mapBtn1.width/2, mapBtnY+mapBtn1.height/2, mapBtnY-mapBtn1.height/2)) {
        // 맵 버튼 이미지 파일 배열 가져옴
        imgArr = mapBtn.getImgArr();
        // 버튼
        image(imgArr[1], mapBtnX, mapBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      break;
    // 사건 현장 - 통로방(닫힘) 화면
    case 6:
      // currStage 설정
      prevStage = 6;

      // 타이머 출력
      showTimer(0.12*width, 0.08*height);

      // inventory 출력
      inventory.show();

      // 인벤토리 아이템 마우스 오버
      inventoryMouseOver();

      // 왼쪽 버튼 이미지 파일 배열 가져옴
      imgArr = leftBtn.getImgArr();
      // 왼쪽 버튼의 중심 x좌표, y좌표
      leftBtnX = 45;
      leftBtnY = 240;
      // 왼쪽 버튼 그리기
      image(imgArr[0], leftBtnX, leftBtnY);

      // 오른쪽 버튼 이미지 파일 배열 가져옴
      imgArr = rightBtn.getImgArr();
      // 오른쪽 버튼의 중심 x좌표, y좌표
      rightBtnX = 808;
      rightBtnY = 240;
      // 오른쪽 버튼 그리기
      image(imgArr[0], rightBtnX, rightBtnY);

      // 잠금장치 이미지 파일 배열 가져옴
      imgArr = pathLock.getImgArr();
      // 잠금장치 중심 x좌표, y좌표
      pathLockX = 600;
      pathLockY = 211;
      // 잠금장치 그리기
      image(imgArr[0], pathLockX, pathLockY, 70, 105);

      // 맵 버튼의 중심 x좌표, y좌표
      mapBtnX= 0.1*width, mapBtnY = 0.94*height;
      // usb를 컴퓨터에 연결하여 단서를 얻은 경우 맵 버튼을 보여준다
      if(computerSolved){
        // 맵 버튼 이미지 파일 배열 가져옴
        imgArr = mapBtn.getImgArr();
        // 맵 버튼 그리기
        image(imgArr[0], mapBtnX, mapBtnY);
      }

      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // 잠금장치 이미지 파일 배열 가져옴
      imgArr = pathLock.getImgArr();
      // 잠금장치 위에 마우스 오버
      if (mouseOver(
          pathLockX - imgArr[0].width / 2,
          pathLockX + imgArr[0].width / 2,
          pathLockY + imgArr[0].height / 2,
          pathLockY - imgArr[0].height / 2
        )) {
        // 잠금장치 이미지 파일 배열 가져옴
        imgArr = pathLock.getImgArr();
        // 잠금장치 확대
        image(imgArr[0], pathLockX, pathLockY, 80,115);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      // 마우스가 왼쪽 버튼 위에 있는 경우
      if (mouseOver(0, 45, 480, 0)) {
        // 왼쪽 버튼 이미지 파일 배열 가져옴
        imgArr = leftBtn.getImgArr();
        // 버튼
        image(imgArr[1], leftBtnX, leftBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      // 마우스가 오른쪽 버튼 위에 있는 경우
      if (mouseOver(805, 853, 480, 0)) {
        // 오른쪽 버튼 이미지 파일 배열 가져옴
        imgArr = rightBtn.getImgArr();
        // 버튼
        image(imgArr[1], rightBtnX, rightBtnY);
        showMousePointer(false);
      }

      // 맵 버튼 이미지 파일 배열 가져옴
      imgArr = mapBtn.getImgArr();
      // 맵 버튼 위에 마우스 오버
      if (computerSolved 
        && mouseOver(mapBtnX-mapBtn1.width/2, mapBtnX+mapBtn1.width/2, mapBtnY+mapBtn1.height/2, mapBtnY-mapBtn1.height/2)) {
        // 맵버튼 이미지 파일 배열 가져옴
        imgArr = mapBtn.getImgArr();
        // 버튼
        image(imgArr[1], mapBtnX, mapBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      break;
    // 사건 현장 - 통로방(열림) 화면
    case 7:
      prevStage = 7;
      // 타이머 출력
      showTimer(0.12*width, 0.08*height);

      // inventory 출력
      inventory.show();

      // 인벤토리 아이템 마우스 오버
      inventoryMouseOver();

      // 왼쪽 버튼 이미지 파일 배열 가져옴
      imgArr = leftBtn.getImgArr();
      // 왼쪽 버튼의 중심 x좌표, y좌표
      leftBtnX = 45;
      leftBtnY = 240;
      // 왼쪽 버튼 그리기
      image(imgArr[0], leftBtnX, leftBtnY);

      // 오른쪽 버튼 이미지 파일 배열 가져옴
      imgArr = rightBtn.getImgArr();
      // 오른쪽 버튼의 중심 x좌표, y좌표
      rightBtnX = 808;
      rightBtnY = 240;
      // 오른쪽 버튼 그리기
      image(imgArr[0], rightBtnX, rightBtnY);

      // 잠금장치 이미지 파일 배열 가져옴
      imgArr = pathLock.getImgArr();
      // 잠금장치 중심 x좌표, y좌표
      pathLockX = 600;
      pathLockY = 211;
      // 잠금장치 그리기
      image(imgArr[1], pathLockX, pathLockY, 70, 105);

      // 맵 버튼의 중심 x좌표, y좌표
      mapBtnX= 0.1*width, mapBtnY = 0.94*height;
      // usb를 컴퓨터에 연결하여 단서를 얻은 경우 맵 버튼을 보여준다
      if(computerSolved){
        // 맵 버튼 이미지 파일 배열 가져옴
        imgArr = mapBtn.getImgArr();
        // 맵 버튼 그리기
        image(imgArr[0], mapBtnX, mapBtnY);
      }

      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // 잠금장치 이미지 파일 배열 가져옴
      imgArr = pathLock.getImgArr();
      // 잠금장치 위에 마우스 오버
      if (mouseOver(
          pathLockX - imgArr[0].width / 2,
          pathLockX + imgArr[0].width / 2,
          pathLockY + imgArr[0].height / 2,
          pathLockY - imgArr[0].height / 2
        )) {
        // 잠금장치 이미지 파일 배열 가져옴
        imgArr = pathLock.getImgArr();
        // 잠금장치 확대
        image(imgArr[1], pathLockX, pathLockY, 80,115);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      // 마우스가 왼쪽 버튼 위에 있는 경우
      if (mouseOver(0, 45, 480, 0)) {
        // 왼쪽 버튼 이미지 파일 배열 가져옴
        imgArr = leftBtn.getImgArr();
        // 버튼
        image(imgArr[1], leftBtnX, leftBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      // 마우스가 오른쪽 버튼 위에 있는 경우
      if (mouseOver(805, 853, 480, 0)) {
        // 오른쪽 버튼 이미지 파일 배열 가져옴
        imgArr = rightBtn.getImgArr();
        // 버튼
        image(imgArr[1], rightBtnX, rightBtnY);
        showMousePointer(false);
      }

      // 맵 버튼 이미지 파일 배열 가져옴
      imgArr = mapBtn.getImgArr();
      // 맵 버튼 위에 마우스 오버
      if (computerSolved 
        && mouseOver(mapBtnX-mapBtn1.width/2, mapBtnX+mapBtn1.width/2, mapBtnY+mapBtn1.height/2, mapBtnY-mapBtn1.height/2)) {
        // 맵버튼 이미지 파일 배열 가져옴
        imgArr = mapBtn.getImgArr();
        // 버튼
        image(imgArr[1], mapBtnX, mapBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      
      // 차고 부분 위에 마우스 오버 시, 해당 부분 따로 표시
      if(mouseOver(100, 495, 333, 120)){
        noFill();
        stroke(255, 204, 0);
        strokeWeight(2);
        rect(100, 120, 395, 213);
        stroke(0);
        strokeWeight(0);
      }
      break;
    // 사건 현장 - 통로방(열림), 차 문 열림 화면
    case 8:
      prevStage = 8;
      // 타이머 출력
      showTimer(0.12*width, 0.08*height);

      // inventory 출력
      inventory.show();

      // 인벤토리 아이템 마우스 오버
      inventoryMouseOver();

      // 왼쪽 버튼 이미지 파일 배열 가져옴
      imgArr = leftBtn.getImgArr();
      // 왼쪽 버튼의 중심 x좌표, y좌표
      leftBtnX = 45;
      leftBtnY = 240;
      // 왼쪽 버튼 그리기
      image(imgArr[0], leftBtnX, leftBtnY);

      // 오른쪽 버튼 이미지 파일 배열 가져옴
      imgArr = rightBtn.getImgArr();
      // 오른쪽 버튼의 중심 x좌표, y좌표
      rightBtnX = 808;
      rightBtnY = 240;
      // 오른쪽 버튼 그리기
      image(imgArr[0], rightBtnX, rightBtnY);

      // 잠금장치 이미지 파일 배열 가져옴
      imgArr = pathLock.getImgArr();
      // 잠금장치 중심 x좌표, y좌표
      pathLockX = 600;
      pathLockY = 211;
      // 잠금장치 그리기
      image(imgArr[1], pathLockX, pathLockY, 70, 105);

      // 맵 버튼의 중심 x좌표, y좌표
      mapBtnX= 0.1*width, mapBtnY = 0.94*height;
      // usb를 컴퓨터에 연결하여 단서를 얻은 경우 맵 버튼을 보여준다
      if(computerSolved){
        // 맵 버튼 이미지 파일 배열 가져옴
        imgArr = mapBtn.getImgArr();
        // 맵 버튼 그리기
        image(imgArr[0], mapBtnX, mapBtnY);
      }

      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // 잠금장치 이미지 파일 배열 가져옴
      imgArr = pathLock.getImgArr();
      // 잠금장치 위에 마우스 오버
      if (mouseOver(
          pathLockX - imgArr[0].width / 2,
          pathLockX + imgArr[0].width / 2,
          pathLockY + imgArr[0].height / 2,
          pathLockY - imgArr[0].height / 2
        )) {
        // 잠금장치 이미지 파일 배열 가져옴
        imgArr = pathLock.getImgArr();
        // 잠금장치 확대
        image(imgArr[1], pathLockX, pathLockY, 80,115);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      // 마우스가 왼쪽 버튼 위에 있는 경우
      if (mouseOver(0, 45, 480, 0)) {
        // 왼쪽 버튼 이미지 파일 배열 가져옴
        imgArr = leftBtn.getImgArr();
        // 버튼
        image(imgArr[1], leftBtnX, leftBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      // 마우스가 오른쪽 버튼 위에 있는 경우
      if (mouseOver(805, 853, 480, 0)) {
        // 오른쪽 버튼 이미지 파일 배열 가져옴
        imgArr = rightBtn.getImgArr();
        // 버튼
        image(imgArr[1], rightBtnX, rightBtnY);
        showMousePointer(false);
      }

      // 맵 버튼 이미지 파일 배열 가져옴
      imgArr = mapBtn.getImgArr();
      // 맵 버튼 위에 마우스 오버
      if (computerSolved 
        && mouseOver(mapBtnX-mapBtn1.width/2, mapBtnX+mapBtn1.width/2, mapBtnY+mapBtn1.height/2, mapBtnY-mapBtn1.height/2)) {
        // 맵버튼 이미지 파일 배열 가져옴
        imgArr = mapBtn.getImgArr();
        // 버튼
        image(imgArr[1], mapBtnX, mapBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      
      // 차고 부분 위에 마우스 오버 시, 해당 부분 따로 표시
      if(mouseOver(100, 495, 333, 120)){
        noFill();
        stroke(255, 204, 0);
        strokeWeight(2);
        rect(100, 120, 395, 213);
        stroke(0);
        strokeWeight(0);
      }
      break;
    // 사건 현장 - 차고(차 문 닫힘) 화면
    case 9:  
      // prevStage 설정
      prevStage = 9;
      
      // 타이머 출력
      showTimer(0.1 * width, 0.1 * height);

      // 인벤토리 위치 임시 변경
      inventory.setPosX(785);
      // inventory 출력
      inventory.show();

      // 인벤토리 아이템 마우스 오버
      inventoryMouseOver();

      // return 버튼 이미지 파일 배열 가져옴
      imgArr = returnBtn.getImgArr();
      // return 버튼의 중심 x좌표, y좌표
      returnBtnX = 0.05*width;
      returnBtnY = 450;
      // return 버튼 그리기
      image(imgArr[0], returnBtnX, returnBtnY);

      // 자동차 잠금장치 이미지 파일 배열 가져옴
      imgArr = carLock.getImgArr();
      // 자동차 잠금장치 중심 x좌표, y좌표
      carLockX = 550;
      carLockY = 300;
      // 자동차 잠금장치 그리기 (잠금 해제를 못한 경우)
      image(imgArr[0], carLockX, carLockY, 32, 88);

      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // 자동차 잠금장치 위에 마우스 오버
      if (mouseOver(
          carLockX - imgArr[0].width / 2,
          carLockX + imgArr[0].width / 2,
          carLockY + imgArr[0].height / 2,
          carLockY - imgArr[0].height / 2
        )) {
        // 자동차 잠금장치 이미지 파일 배열 가져옴
        imgArr = carLock.getImgArr();

        // 잠금장치 확대 (잠금 장치를 해제하지 못한 경우)
        image(imgArr[0], carLockX, carLockY, 40, 99);

        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      // return 버튼 위에 마우스 오버
      if (mouseOver(returnBtnX-32, returnBtnX+32, returnBtnY+17, returnBtnY-17)) {
        // return 버튼 이미지 파일 배열 가져옴
        imgArr = returnBtn.getImgArr();
        // 버튼
        image(imgArr[1], returnBtnX, returnBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      break;
    // 사건 현장 - 차고(차 문 열림) 화면
    case 10:
      prevStage = 10;

      // 타이머 출력
      showTimer(0.1*width, 0.1*height);

      // 인벤토리 위치 임시 변경
      inventory.setPosX(785);
      // inventory 출력
      inventory.show();

      // 현재 Page 내 수집되지 않은 증거들을 가져와 화면에 출력
      for (let i = 0; i < Pages[stage].evidenceArr.length; i++) {
        image(
          Pages[stage].evidenceArr[i].imgArray[0], 
          Pages[stage].evidenceArr[i].dataX, 
          Pages[stage].evidenceArr[i].dataY
          );
      }

      // return 버튼 이미지 파일 배열 가져옴
      imgArr = returnBtn.getImgArr();
      // return 버튼의 중심 x좌표, y좌표
      returnBtnX = 0.05*width;
      returnBtnY = 450;
      // return 버튼 그리기
      image(imgArr[0], returnBtnX, returnBtnY);

      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // 인벤토리 아이템 마우스 오버
      inventoryMouseOver();

      // USB 위에 마우스가 있는 경우
      if(!usb.obtained && mouseOver
        (usb.dataX - usbImg.width/2, 
        usb.dataX + usbImg.width/2, 
        usb.dataY + usbImg.height/2, 
        usb.dataY - usbImg.height/2
        )) {
        // usb 기존 이미지 확대하여 그리기
        image(usbImg, usb.dataX, usb.dataY, usbImg.width*1.1, usbImg.height*1.1);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      // return 버튼 위에 마우스 오버
      if (mouseOver(returnBtnX-32, returnBtnX+32, returnBtnY+17, returnBtnY-17)) {
        // return 버튼 이미지 파일 배열 가져옴
        imgArr = returnBtn.getImgArr();
        // 버튼
        image(imgArr[1], returnBtnX, returnBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      break;
    // 게임 결말 화면#1
    case 11:
      // 게임 플레이 음악 재생 중지
      gamePlayMusic.stop();
      // 엔딩 음악 재생하고 있지 않는 경우에만(단 한번만)
      if(!endingMusic.isPlaying()){
        // 엔딩 음악 재생 시작
        endingMusic.play();
        endingMusic.loop();
      }

      // 타이머 멈추기
      timerStart = false;
      
      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // downBtn
      imgArr = downBtn.getImgArr();
      downBtnX = 770;
      downBtnY = 420;
      image(imgArr[0], downBtnX, downBtnY, 30, 30);
      if (mouseOver(755, 785, 430, 405)) {
        // 버튼
        image(imgArr[1], downBtnX, downBtnY, 30, 30);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      fill(0,0,0,fade);
      rect(0,0, width, height);

      if (fade<=0) 
        fade = 0;
      
      if (fade<=255) 
        fadeAmount=-0.5; 
   
      fade += fadeAmount; 
      break;
    // 편지 화면
    case 12:
      // 타이머 출력
      showTimer(0.1 * width, 0.1 * height);

      // explain 버튼 이미지 파일 배열 가져옴
      imgArr = explainBtn.getImgArr();
      // explain 버튼의 중심 x좌표, y좌표
      explainBtnX = 393;
      explainBtnY = 420;
      // explain 버튼 그리기
      image(imgArr[0], explainBtnX, explainBtnY);

      // hintBtn 버튼 이미지 파일 배열 가져옴
      imgArr = hintBtn.getImgArr();
      // hintBtn 버튼의 중심 x좌표, y좌표
      hintBtnX = 622;
      hintBtnY = 428;
      // hintBtn 버튼 그리기
      image(imgArr[0], hintBtnX, hintBtnY);

      // back 버튼 이미지 파일 배열 가져옴
      imgArr = backBtn.getImgArr();
      // back 버튼의 중심 x좌표, y좌표
      backBtnX = 0.9 * width;
      backBtnY = 0.1 * height;
      // back 버튼 그리기
      image(imgArr[0], backBtnX, backBtnY);

      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // explain 버튼 이미지 파일 배열 가져옴
      imgArr = explainBtn.getImgArr();
      // explain 버튼 위에 마우스가 있는 경우
      if (mouseOver(explainBtnX-16, explainBtnX+16, explainBtnY+20.5, explainBtnY-20.5)) {
        // explain 버튼 그리기
        image(imgArr[1], explainBtnX, explainBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      // hintBtn 버튼 이미지 파일 배열 가져옴
      imgArr = hintBtn.getImgArr();
      // hint 버튼 위에 마우스가 있는 경우
      if (mouseOver(hintBtnX-21.5, hintBtnX+21.5, hintBtnY+13, hintBtnY-13)) {
        // hintBtn 버튼 그리기
        image(imgArr[1], hintBtnX, hintBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }

      // back 버튼 이미지 파일 배열 가져옴
      imgArr = backBtn.getImgArr();
      if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
        // back버튼
        image(backBtn2, backBtnX, backBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      break;
    // 애너그램 설명 화면
    case 13:
      // 타이머 출력
      showTimer(0.1 * width, 0.1 * height);
      
      // back 버튼 이미지 파일 배열 가져옴
      imgArr = backBtn.getImgArr();
      // back 버튼의 중심 x좌표, y좌표
      backBtnX = 0.9 * width;
      backBtnY = 0.1 * height;
      // back 버튼 그리기
      image(imgArr[0], backBtnX, backBtnY);
      
      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // back 버튼 이미지 파일 배열 가져옴
      imgArr = backBtn.getImgArr();
      if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
        // back버튼
        image(backBtn2, backBtnX, backBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      break;
    // 편지 애너그램 힌트 화면
    case 14:
      // 타이머 출력
      showTimer(0.1 * width, 0.1 * height);
      
      // back 버튼 이미지 파일 배열 가져옴
      imgArr = backBtn.getImgArr();
      // back 버튼의 중심 x좌표, y좌표
      backBtnX = 0.9 * width;
      backBtnY = 0.1 * height;
      // back 버튼 그리기
      image(imgArr[0], backBtnX, backBtnY);
      
      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // back 버튼 이미지 파일 배열 가져옴
      imgArr = backBtn.getImgArr();
      if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
        // back버튼
        image(backBtn2, backBtnX, backBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      break;
    // 엄지 화면
    case 15:
      // 타이머 출력
      showTimer(0.1 * width, 0.1 * height);
      
      // back 버튼 이미지 파일 배열 가져옴
      imgArr = backBtn.getImgArr();
      // back 버튼의 중심 x좌표, y좌표
      backBtnX = 0.9 * width;
      backBtnY = 0.1 * height;
      // back 버튼 그리기
      image(imgArr[0], backBtnX, backBtnY);
      
      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // back 버튼 이미지 파일 배열 가져옴
      imgArr = backBtn.getImgArr();
      if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
        // back버튼
        image(backBtn2, backBtnX, backBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      break;
    // 암호표 화면
    case 16:
      // 암호표를 해독한 경우
      if (cipherSolved) {
        clear();

        // cipherSolvedScreen 보여주기
        image(cipherSolvedScreen, width / 2, height / 2);

        // 타이머 출력
        showTimer(0.1 * width, 0.1 * height);

        // back 버튼 이미지 파일 배열 가져옴
        imgArr = backBtn.getImgArr();
        // back 버튼의 중심 x좌표, y좌표
        backBtnX = 0.9 * width;
        backBtnY = 0.1 * height;
        // back 버튼 그리기
        image(imgArr[0], backBtnX, backBtnY);

        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);

        // back 버튼 위에 마우스가 있는 경우
        if (mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)) {
          // back 버튼 그리기
          image(imgArr[1], backBtnX, backBtnY);
          // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
          showMousePointer(false);
        }
      }
      // 암호표를 아직 해독하지 못한 경우
      else {
        // 타이머 출력
        showTimer(0.1 * width, 0.1 * height);

        // 입력창과 버튼 보이기
        cipherInput.show();
        cipherEnterBtn.show();

        // 입력창 그리기
        cipherInput.position(220, 385);
        cipherInput.size(345, 30);
        cipherEnterBtn.position(580, 385);
        cipherEnterBtn.size(65, 30);

        cipherEnterBtn.mousePressed(check);

        // back 버튼 이미지 파일 배열 가져옴
        imgArr = backBtn.getImgArr();
        // back 버튼의 중심 x좌표, y좌표
        backBtnX = 0.9 * width;
        backBtnY = 0.1 * height;
        // back 버튼 그리기
        image(imgArr[0], backBtnX, backBtnY);

        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);

        // back 버튼 위에 마우스가 있는 경우
        if (mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)) {
          // back 버튼 그리기
          image(imgArr[1], backBtnX, backBtnY);
          // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
          showMousePointer(false);
        }
      }
      break;
    // USB 화면
    case 17:
      // 타이머 출력
      showTimer(0.1 * width, 0.1 * height);
      
      // back 버튼 이미지 파일 배열 가져옴
      imgArr = backBtn.getImgArr();
      // back 버튼의 중심 x좌표, y좌표
      backBtnX = 0.9 * width;
      backBtnY = 0.1 * height;
      // back 버튼 그리기
      image(imgArr[0], backBtnX, backBtnY);
      
      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // back 버튼 위에 마우스 오버
      if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
        // back버튼
        image(backBtn2, backBtnX, backBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      break;
    // 컴퓨터 화면
    case 18:
      // usb 연결하지 않은 경우
      if(!computerSolved){
        // 타이머 출력
        showTimer(0.1 * width, 0.1 * height);

        // 인벤토리 위치 여기서만 이동
        inventory.setPosX(785);
        // inventory 출력
        inventory.show();
        
        // back 버튼 이미지 파일 배열 가져옴
        imgArr = backBtn.getImgArr();
        // back 버튼의 중심 x좌표, y좌표
        backBtnX = 0.1 * width;
        backBtnY = 0.9 * height;
        // back 버튼 그리기
        image(imgArr[0], backBtnX, backBtnY);
        
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);

        // back 버튼 이미지 파일 배열 가져옴
        imgArr = backBtn.getImgArr();
        if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
          // back버튼
          image(backBtn2, backBtnX, backBtnY);
          // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
          showMousePointer(false);
        }

        // 인벤토리 아이템 마우스 오버
        inventoryMouseOver();
      }
      // usb를 연결한 경우
      else{
        // 화면 지우기
        clear();

        // 배경 그리기
        image(computerScreen3, width/2, height/2, width, height);

        // 타이머 출력
        showTimer(0.1 * width, 0.1 * height);
        
        // 인벤토리 위치 여기서만 이동
        inventory.setPosX(785);
        // inventory 출력
        inventory.show();
        
        // back 버튼 이미지 파일 배열 가져옴
        imgArr = backBtn.getImgArr();
        // back 버튼의 중심 x좌표, y좌표
        backBtnX = 0.1 * width;
        backBtnY = 0.9 * height;
        // back 버튼 표시하는 사각형 그리기 (stroke 느낌으로)
        strokeWeight(2);
        stroke(242,255,85);
        rect(backBtnX-backBtn1.width/2 - 1, backBtnY - backBtn1.height/2 - 1, backBtn1.width+2, backBtn1.height+2, 10);
        // back 버튼 그리기
        image(imgArr[0], backBtnX, backBtnY);
        strokeWeight(0);
    
        
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);

        // back 버튼 이미지 파일 배열 가져옴
        imgArr = backBtn.getImgArr();
        if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
          // back버튼
          image(backBtn2, backBtnX, backBtnY);
          // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
          showMousePointer(false);
        }

        // 인벤토리 아이템 마우스 오버
        inventoryMouseOver();
      }
      break;
    // 통로 잠금장치 화면
    case 19:
      // 통로 잠금장치를 푼 경우
      if(pathLockSolved){
        // 화면 지우기
        clear();

        // 배경 그리기: 해결한 화면으로 변경
        image(pathUnlockScreen, width/2, height/2, width, height);

        // 타이머 출력
        showTimer(0.1 * width, 0.1 * height);

        // inventory 출력
        inventory.show();
        // 인벤토리 아이템 마우스 오버
        inventoryMouseOver();

        // back 버튼 이미지 파일 배열 가져옴
        imgArr = backBtn.getImgArr();
        // back 버튼의 중심 x좌표, y좌표
        backBtnX = 0.1 * width;
        backBtnY = 0.9 * height;
        // back 버튼 표시하는 사각형 그리기 (stroke 느낌으로)
        strokeWeight(2);
        stroke(242,255,85);
        rect(backBtnX-backBtn1.width/2 - 1, backBtnY - backBtn1.height/2 - 1, backBtn1.width+2, backBtn1.height+2, 10);
        // back 버튼 그리기
        image(imgArr[0], backBtnX, backBtnY);
        strokeWeight(0);

        // 잠금장치 그리기
        textSize(20);
        textFont(pathLockFont);
        // 버튼 그리기
        for (let b of pathLockAlphabets) {
          b.draw();
        }
        pathLockResetBtn.draw();    // 잠금장치 리셋 버튼
        pathLockEnterBtn.draw();    // 잠금장치 입력 확인 버튼

        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);

        // back 버튼 mouseOver
        if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
          // back버튼
          image(backBtn2, backBtnX, backBtnY);
          // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
          showMousePointer(false);
        }
      }
      // 통로 잠금장치를 못 푼 경우
      else{
        // 타이머 출력
        showTimer(0.1 * width, 0.1 * height);

        // inventory 출력
        inventory.show();
        // 인벤토리 아이템 마우스 오버
        inventoryMouseOver();

        // back 버튼 이미지 파일 배열 가져옴
        imgArr = backBtn.getImgArr();
        // back 버튼의 중심 x좌표, y좌표
        backBtnX = 0.1 * width;
        backBtnY = 0.9 * height;
        // back 버튼 그리기
        image(imgArr[0], backBtnX, backBtnY);

        // 잠금장치 그리기
        textSize(20);
        textFont(pathLockFont);
        // 버튼 그리기
        for (let b of pathLockAlphabets) {
          b.draw();
        }
        pathLockResetBtn.draw();    // 잠금장치 리셋 버튼
        pathLockEnterBtn.draw();    // 잠금장치 입력 확인 버튼

        // 입력값 출력
        textSize(30);
        for (var i = 0; i < pathLockInputArr.length; i++) {
          text(pathLockInputArr[i], 275 + 35 * i, 95);
        }

        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);

        // back 버튼 mouseOver
        if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
          // back버튼
          image(backBtn2, backBtnX, backBtnY);
          // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
          showMousePointer(false);
        }

        // thumbItem을 사용한 경우
        if(thumbItem != null && thumbItem.used == true){
          image(thumbImg1, 494, 377);
        }
      }
      break;
    // 자동차 잠금장치 화면
    case 20:
      // 자동차 잠금장치를 해제한 경우
      if(carLockSolved){
        // 화면 지우기
        clear();

        // 배경 그리기: 해결한 화면으로 변경
        image(carUnlockScreen, width/2, height/2, width, height);

        // 타이머 출력
        showTimer(0.08 * width, 0.07 * height);

        // back 버튼 이미지 파일 배열 가져옴
        imgArr = backBtn.getImgArr();
        // back 버튼의 중심 x좌표, y좌표
        backBtnX = 0.1 * width;
        backBtnY = 0.9 * height;
        // back 버튼 표시하는 사각형 그리기 (stroke 느낌으로)
        strokeWeight(2);
        stroke(242,255,85);
        rect(backBtnX-backBtn1.width/2 - 1, backBtnY - backBtn1.height/2 - 1, backBtn1.width+2, backBtn1.height+2, 10);
        // back 버튼 그리기
        image(imgArr[0], backBtnX, backBtnY);
        strokeWeight(0);

        // 잠금장치 그리기
        textSize(40);
        textFont(carLockFont);
        // 버튼 그리기
        for (let b of carLockAlphabets) {
          b.draw();
        }
        carLockResetBtn.draw();    // 잠금장치 리셋 버튼
        carLockEnterBtn.draw();    // 잠금장치 입력 확인 버튼

        // 입력값 출력
        textSize(40);
        text("L", 322, 80);
        text("I", 322 + 107 * 1, 80);
        text("E", 322 + 107 * 2, 80);
        text("S", 322 + 107 * 3, 80);

        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);

        // back 버튼 mouseOver
        if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
          // back버튼
          image(backBtn2, backBtnX, backBtnY);
          // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
          showMousePointer(false);
        }
      }
      // 자동차 잠금장치를 해제하지 않은 경우
      else{
        // 타이머 출력
        showTimer(0.08 * width, 0.07 * height);

        // back 버튼 이미지 파일 배열 가져옴
        imgArr = backBtn.getImgArr();
        // back 버튼의 중심 x좌표, y좌표
        backBtnX = 0.1 * width;
        backBtnY = 0.9 * height;
        // back 버튼 그리기
        image(imgArr[0], backBtnX, backBtnY);
        
        // hintBtn 버튼 이미지 파일 배열 가져옴
        imgArr = hintBtn.getImgArr();
        // hintBtn 버튼의 중심 x좌표, y좌표
        hintBtnX = 766;
        hintBtnY = 140;
        // hintBtn 버튼 그리기
        image(imgArr[0], hintBtnX, hintBtnY);

        // 잠금장치 그리기
        textSize(40);
        textFont(carLockFont);
        // 버튼 그리기
        for (let b of carLockAlphabets) {
          b.draw();
        }
        carLockResetBtn.draw();    // 잠금장치 리셋 버튼
        carLockEnterBtn.draw();    // 잠금장치 입력 확인 버튼

        // 입력값 출력
        textSize(40);
        for (var i = 0; i < carLockInputArr.length; i++) {
          text(carLockInputArr[i], 322 + 107 * i, 80);
        }

        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);

        // back 버튼 mouseOver
        if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
          // back버튼
          image(backBtn2, backBtnX, backBtnY);
          // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
          showMousePointer(false);
        }

        // hintBtn 버튼 이미지 파일 배열 가져옴
        imgArr = hintBtn.getImgArr();
        // hint 버튼 위에 마우스가 있는 경우
        if (mouseOver(hintBtnX-21.5, hintBtnX+21.5, hintBtnY+13, hintBtnY-13)) {
          // hintBtn 버튼 그리기
          image(imgArr[1], hintBtnX, hintBtnY);
          // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
          showMousePointer(false);
        }

      }
      break;
    // 게임 실패 화면
    case 21:      
      // 게임 플레이 음악 재생 중지
      gamePlayMusic.stop();
      // 게임 오버 효과음(리들러의 조롱) 재생
      if(!gameOverSE.isPlaying() && gameOverIdx == 0){
        gameOverSE.play();
      }
      else if(gameOverSE.isPlaying()){
        gameOverIdx++;
      }

      // 게임 오버 텍스트
      fill(255, 255, 255);
      textSize(50);
      textFont(riddlerFont); // riddler font로 폰트 설정
      text("GAME OVER", width / 2, height / 2.5);

      //restart 버튼 이미지 파일 배열 가져옴
      imgArr = restartBtn.getImgArr();
      // restart 버튼 중심 x,y 좌표
      restartBtnX = width/2;
      restartBtnY = height/1.7;
      
      // restart 버튼 그리기
      image(imgArr[0], restartBtnX, restartBtnY);

      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // restart 버튼 위에 마우스 오버
      if (mouseOver(
          restartBtnX - imgArr[0].width / 2,
          restartBtnX + imgArr[0].width / 2,
          restartBtnY + imgArr[0].height / 2,
          restartBtnY - imgArr[0].height / 2
        )) {
        // 새로운 이미지로 덮기
        image(imgArr[1], restartBtnX, restartBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      break;
    // 게임 결말 화면#2
    case 22:
      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);
      
      // downBtn
      imgArr = downBtn.getImgArr();
      downBtnX = 770;
      downBtnY = 420;
      image(imgArr[0], downBtnX, downBtnY, 30, 30);
      if (mouseOver(755, 785, 430, 405)) {
        // 버튼
        image(imgArr[1], downBtnX, downBtnY, 30, 30);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      break;
    // 게임 결말 화면#3
    case 23:
      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // downBtn
      imgArr = downBtn.getImgArr();
      downBtnX = 770;
      downBtnY = 420;
      image(imgArr[0], downBtnX, downBtnY, 30, 30);
      if (mouseOver(755, 785, 430, 405)) {
        // 버튼
        image(imgArr[1], downBtnX, downBtnY, 30, 30);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      break;
    // 게임 결말 화면#4
    case 24:
      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // downBtn
      imgArr = downBtn.getImgArr();
      downBtnX = 770;
      downBtnY = 420;
      image(imgArr[0], downBtnX, downBtnY, 30, 30);
      if (mouseOver(755, 785, 430, 405)) {
        // 버튼
        image(imgArr[1], downBtnX, downBtnY, 30, 30);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      break;
    // 게임 결말 화면#5
    case 25:
      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // downBtn
      imgArr = downBtn.getImgArr();
      downBtnX = 770;
      downBtnY = 420;
      image(imgArr[0], downBtnX, downBtnY, 30, 30);
      if (mouseOver(755, 785, 430, 405)) {
        // 버튼
        image(imgArr[1], downBtnX, downBtnY, 30, 30);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      break;
    // 게임 클리어 화면
    case 26:
      console.log("You are El Rata Alada");

      //restart 버튼 이미지 파일 배열 가져옴
      imgArr = restartBtn.getImgArr();
      // restart 버튼 중심 x,y 좌표
      restartBtnX = (width*3) / 4;
      restartBtnY = (height*3) / 4;
      // restart 버튼 그리기
      image(imgArr[0], restartBtnX, restartBtnY);

      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // restart 버튼 위에 마우스 오버
      if (mouseOver(
          restartBtnX - imgArr[0].width / 2,
          restartBtnX + imgArr[0].width / 2,
          restartBtnY + imgArr[0].height / 2,
          restartBtnY - imgArr[0].height / 2
        )) {
        // 새로운 이미지로 덮기
        image(imgArr[1], restartBtnX, restartBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      break;
    // 자동차 잠금장치 힌트 화면
    case 27:
      // 타이머 출력
      showTimer(0.1 * width, 0.1 * height);
      
      // back 버튼 이미지 파일 배열 가져옴
      imgArr = backBtn.getImgArr();
      // back 버튼의 중심 x좌표, y좌표
      backBtnX = 0.9 * width;
      backBtnY = 0.1 * height;
      // back 버튼 그리기
      image(imgArr[0], backBtnX, backBtnY);
      
      // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
      showMousePointer(false);

      // back 버튼 이미지 파일 배열 가져옴
      imgArr = backBtn.getImgArr();
      if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
        // back버튼
        image(backBtn2, backBtnX, backBtnY);
        // 마우스 포인터를 클릭하지 않은 경우 (매개변수: 클릭 여부)
        showMousePointer(false);
      }
      break;
  }
}

// 마우스를 클릭한 경우의 화면들
function mouseClicked(){
  // Data 객체 Array의 각 요소마다의 Image 파일 Array를 담을 변수
  let imgArr;

  switch (stage) {
    // 게임 시작
    case 0:
      // 시작 버튼의 중심 x좌표, y좌표
      let startBtnX = width / 2;
      let startBtnY = (height * 3) / 4;
  
      // 마우스가 버튼 위에 있는 경우: 회색 버튼 보이기
      if (mouseOver(
        startBtnX - startBtn1.width / 2,
        startBtnX + startBtn1.width / 2,
        startBtnY + startBtn1.height / 2,
        startBtnY - startBtn1.height / 2
        )) {
        image(startBtn3, startBtnX, startBtnY);
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);
        // 다음 stage로
        stage = 1;
      }
      // 마우스가 버튼 위에 없는 경우
      else {
        showMousePointer(true);
      }
      break;
    // 시놉시스
    case 1:
      // next 버튼의 중심 x좌표, y좌표(next 버튼 위치)
      nextBtnX = (width * 4) / 5;
      nextBtnY = (height * 5) / 6;

      // 현재 마우스의 위치랑 nextBtn의 중심 좌표와의 거리
      d = dist(mouseX, mouseY, nextBtnX, nextBtnY);

      // 마우스가 버튼 위에 있는 경우:
      if (d < 50) {
        // 클릭된 next 버튼 보이기
        image(nextBtn3, nextBtnX, nextBtnY);
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);
        // 다음 stage로
        stage = 2;
      }
      // 마우스가 next 버튼 위에 없는 경우
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);
      }
      break;
    // 게임 설명
    case 2:
      // next 버튼의 중심 x좌표, y좌표(next 버튼 위치)
      nextBtnX = (width * 4) / 5;
      nextBtnY = (height * 5) / 6;

      // 현재 마우스의 위치랑 nextBtn의 중심 좌표와의 거리
      d = dist(mouseX, mouseY, nextBtnX, nextBtnY);

      // 마우스가 버튼 위에 있는 경우:
      if (d < 50) {
        // 클릭된 next 버튼 보이기
        image(nextBtn3, nextBtnX, nextBtnY);
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);
        // 다음 stage로
        stage = 3;
      }
      // 마우스가 next 버튼 위에 없는 경우
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);
      }      
      break;
    // 지도
    case 3:
      // 시장의 집 이미지의 중심 x좌표, y좌표
      let mayorHouseX = 775;
      let mayorHouseY = 55;
      // restart 버튼의 중심 x좌표, y좌표
      restartBtnX = 60;
      restartBtnY = 450;

      // 마우스가 시장의 집 위에 있는 경우
      if (mouseOver(
          mayorHouseX - mayorHouse.width / 2,
          mayorHouseX + mayorHouse.width / 2,
          mayorHouseY + mayorHouse.height / 2,
          mayorHouseY - mayorHouse.height / 2
        )) {
        // 시장의 집 위를 클릭한 경우 다음 stage로
        stage = 4;
      }
      // 시장의 집이 아닌 곳에 커서가 올라간 경우
      else {
        showMousePointer(true);
      }

      // 컴퓨터에 USB를 연결하여 모든 문제를 푼 경우
      if(computerSolved){
        // 이때 입력한 시간 값이 맞아야함
        if (mouseOver(175, 225, 140, 80) && correctTime) {
          // 결말 스테이지로 이동
          stage = 11;
        }
        // 시간을 입력하지 않은 채 클릭한 경우
        if (mouseOver(175, 225, 140, 80)) {
          timer -= 10;
        }
        // 다른 집을 클릭했을 때 시간 감소
        // 건물 2 마우스 함수
        if (mouseOver(460, 540, 140, 85)) {
          timer -= 10;
          // 마우스 포인터 그리기
          showMousePointer(true);
        }
        //건물3 마우스함수
        if (mouseOver(315, 390, 80, 15)) {
          timer -= 10;
          // 마우스 포인터 그리기
          showMousePointer(true);
        }
        //건물4 마우스함수
        if (mouseOver(305, 400, 230, 170)) {
          timer -= 10;
          // 마우스 포인터 그리기
          showMousePointer(true);
        }
        //건물5 마우스함수
        if (mouseOver(365, 410, 315, 260)) {
          timer -= 10;
          // 마우스 포인터 그리기
          showMousePointer(true);
        }
        //건물6 마우스함수
        if (mouseOver(250, 340, 410, 355)) {
          timer -= 10;
          // 마우스 포인터 그리기
          showMousePointer(true);
        }
        //건물7 마우스함수
        if (mouseOver(195, 245, 345, 290)) {
          timer -= 10;
          // 마우스 포인터 그리기
          showMousePointer(true);
        }
        //건물8 마우스함수
        if (mouseOver(110, 165, 240, 195)) {
          timer -= 10;
          // 마우스 포인터 그리기
          showMousePointer(true);
        }
      }
      break;
    // 거실
    case 4:
      // 왼쪽 버튼의 중심 x좌표, y좌표
      leftBtnX = 45;
      leftBtnY = 240;
      // 오른쪽 버튼의 중심 x좌표, y좌표
      rightBtnX = 808;
      rightBtnY = 240;
      // 맵 버튼의 중심 x좌표, y좌표
      mapBtnX= 0.1*width, mapBtnY = 0.94*height;

      // 편지 위에 마우스가 있는 경우
      if(!letter.obtained && mouseOver
        (letter.dataX - letterImg1.width/2, 
        letter.dataX + letterImg1.width/2, 
        letter.dataY + letterImg1.height/2, 
        letter.dataY - letterImg1.height/2
        )) {
        // 클릭된 이미지 보여주기
        image(letterImg3, letter.dataX, letter.dataY, letterImg3.width*1.1, letterImg3.height*1.1);

        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);

        // Page에서 해당 객체 삭제하기
        for(let j=0; j<Pages[stage].evidenceArr.length; j++){ // 현재 페이지의 증거물 목록 중에서
          if(Pages[stage].evidenceArr[j].name === letter.name){ // 확인한 증거물의 이름이 letter의 이름과 같은 경우
            // 편지 증거물을 획득 했음을 표시
            letter.obtained = true;
            // 현재 Page의 Evidence Array에서 편지를 제외
            Pages[stage].evidenceArr.splice(j,1);
            break;
          }
        }

        // 인벤토리에 추가
        inventory.inventoryArr.push(new InventoryItem(letter, inventory));
      }
      // 편지 위에 마우스가 없는 경우
      else{          
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);    
      }

      // 엄지 위에 마우스가 있는 경우
      if(!thumb.obtained && mouseOver
        (thumb.dataX - thumbImg1.width/2, 
        thumb.dataX + thumbImg1.width/2, 
        thumb.dataY + thumbImg1.height/2, 
        thumb.dataY - thumbImg1.height/2
        )) {
        // 클릭된 이미지 보여주기
        image(thumbImg3, thumb.dataX, thumb.dataY, thumbImg3.width*1.1, thumbImg3.height*1.1);

        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);
                    
        // Page에서 해당 객체 삭제하기
        for(let j=0; j<Pages[stage].evidenceArr.length; j++){ // 현재 페이지의 증거물 목록 중에서
          if(Pages[stage].evidenceArr[j].name === thumb.name){ // 확인한 증거물의 이름이 thumb의 이름과 같은 경우
            // 엄지 증거물을 획득 했음을 표시
            thumb.obtained = true;
            // 현재 Page의 Evidence Array에서 엄지를 제외
            Pages[stage].evidenceArr.splice(j,1);
            break;
          }
        }
        // thumb으로 인벤토리 객체 생성
        thumbItem = new InventoryItem(thumb, inventory);

        // 인벤토리에 추가
        inventory.inventoryArr.push(thumbItem);  
      }
      // 엄지 위에 마우스가 없는 경우
      else{          
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);    
      }

      // 마우스가 왼쪽 전환 버튼 위에 있는 경우
      if (mouseOver(0,45,480,0)) {
        // pathLock 해결한 경우: 통로방으로 이동
        if(pathLockSolved){
          // carLock도 해결한 경우: 통로방(열림, 차 열림)으로 이동
          if(carLockSolved){
            stage = 8;
          }
          // 통로방(열림, 차 닫힘)으로 이동
          else{
            stage = 7;
          }
        }
        // pathLock 해결하지 않은 경우: 통로방(닫힘)로 이동
        else{
          stage = 6;
        }
      }
      // 마우스가 왼쪽 전환 버튼 위에 없는 경우
      else{          
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);    
      }

      // 마우스가 오른쪽 전환 버튼 위에 있는 경우
      if (mouseOver(805,850,480,0)) {
        // 서재로 이동
        stage = 5;
      }
      // 마우스가 오른쪽 전환 버튼 위에 없는 경우
      else{          
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);    
      }

      // 맵 버튼 위에 마우스 오버
      if (computerSolved 
        && mouseOver(mapBtnX-mapBtn1.width/2, mapBtnX+mapBtn1.width/2, mapBtnY+mapBtn1.height/2, mapBtnY-mapBtn1.height/2)) {
        // 지도 stage로
        stage = 3;
      }
      // 마우스가 맵 버튼 위에 없는 경우
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }

      // 인벤토리 클릭
      inventoryMouseClick();
      break;
    // 서재
    case 5:
      // 왼쪽 버튼의 중심 x좌표, y좌표
      leftBtnX = 45;
      leftBtnY = 240;
      // 오른쪽 버튼의 중심 x좌표, y좌표
      rightBtnX = 808;
      rightBtnY = 240;
      // 맵 버튼의 중심 x좌표, y좌표
      mapBtnX= 0.1*width, mapBtnY = 0.94*height;
      // 컴퓨터의 중심 x좌표, y좌표
      let computerX = width / 2;
      let computerY = (height / 2) - 10;

      // 암호표 위에 마우스가 있는 경우
      if(!cipher.obtained && mouseOver
        (cipher.dataX - cipherImg1.width/2, 
        cipher.dataX + cipherImg1.width/2, 
        cipher.dataY + cipherImg1.height/2, 
        cipher.dataY - cipherImg1.height/2
        )) {
        image(cipherImg3, cipher.dataX, cipher.dataY, cipherImg3.width*1.1, cipherImg3.height*1.1);

        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);
                    
        // Page에서 해당 객체 삭제하기
        for(let j=0; j<Pages[stage].evidenceArr.length; j++){ // 현재 페이지의 증거물 목록 중에서
          if(Pages[stage].evidenceArr[j].name === cipher.name){ // 확인한 증거물의 이름이 cipher 이름과 같은 경우
            // 암호표 증거물을 획득 했음을 표시
            cipher.obtained = true;
            // 현재 Page의 Evidence Array에서 편지를 제외
            Pages[stage].evidenceArr.splice(j,1);
            break;
          }
        }
        
        // 인벤토리에 추가
        inventory.inventoryArr.push(new InventoryItem(cipher, inventory));
      }
      // 암호표 위에 마우스가 없는 경우
      else{
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }

      // 마우스가 왼쪽 버튼 위에 있는 경우
      if (mouseOver(0, 45, 480, 0)) {
        // 거실로 이동
        stage = 4;
      }
      // 마우스가 왼쪽 버튼 위에 없는 경우
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }

      // 마우스가 오른쪽 버튼 위에 있는 경우
      if (mouseOver(805, 850, 480, 0)) {
        // pathLock 해결한 경우: 통로방으로 이동
        if(pathLockSolved){
          // carLock도 해결한 경우: 통로방(열림, 차 열림)으로 이동
          if(carLockSolved){
            stage = 8;
          }
          // 통로방(열림, 차 닫힘)으로 이동
          else{
            stage = 7;
          }
        }
        // pathLock 해결하지 않은 경우: 통로방(닫힘)로 이동
        else{
          stage = 6;
        }
      }
      // 마우스가 오른쪽 버튼 위에 없는 경우
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }

      // 컴퓨터 위에 마우스 오버
      if (mouseOver(
          computerX - computerImg.width / 2,
          computerX + computerImg.width / 2,
          computerY + computerImg.height / 2,
          computerY - computerImg.height / 2
        )) {
          // 컴퓨터 화면으로 넘어가기
          stage = 18;
      }
      // 마우스가 버튼 위에 없는 경우
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }

      // 맵 버튼 위에 마우스 오버
      if (computerSolved && mouseOver(mapBtnX-mapBtn1.width/2, mapBtnX+mapBtn1.width/2, mapBtnY+mapBtn1.height/2, mapBtnY-mapBtn1.height/2)) {
        // 지도 stage로
        stage = 3;
      }
      // 마우스가 맵 버튼 위에 없는 경우
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }

      // 인벤토리 클릭
      inventoryMouseClick();
      break;
    // 통로 (잠김)
    case 6:
      // 잠금장치 중심 x좌표, y좌표
      pathLockX = 600;
      pathLockY = 211;
      // map 버튼 중심 x좌표, y좌표
      mapBtnX= 0.1*width, mapBtnY = 0.94*height;

      // 마우스가 왼쪽 버튼 위에 있는 경우
      if (mouseOver(0, 45, 480, 0)) {
        // 서재로 이동
        stage = 5;
      }

      // 마우스가 오른쪽 버튼 위에 있는 경우
      if (mouseOver(805, 853, 480, 0)) {
        // 거실 이동
        stage = 4;
      }

      // 잠금장치 이미지 파일 배열 가져옴
      imgArr = pathLock.getImgArr();
      // 잠금장치 위에 마우스 오버
      if (mouseOver(
          pathLockX - imgArr[0].width / 2,
          pathLockX + imgArr[0].width / 2,
          pathLockY + imgArr[0].height / 2,
          pathLockY - imgArr[0].height / 2
        )) {
        // 잠금장치 스크린 이미지 stage로 변환
        stage = 19;
      }

      // 맵 버튼 위에 마우스 오버
      if (computerSolved && mouseOver(mapBtnX-mapBtn1.width/2, mapBtnX+mapBtn1.width/2, mapBtnY+mapBtn1.height/2, mapBtnY-mapBtn1.height/2)) {
        // 지도 stage로
        stage = 3;
      }
      // 마우스가 맵 버튼 위에 없는 경우
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }

      // 인벤토리 클릭
      inventoryMouseClick();
      break;
    // 통로 (열림), 차 닫힘
    case 7:
      // 잠금장치 중심 x좌표, y좌표
      pathLockX = 600;
      pathLockY = 211;
      // map 버튼 중심 x좌표, y좌표
      mapBtnX= 0.1*width, mapBtnY = 0.94*height;

      // 잠금장치 이미지 파일 배열 가져옴
      imgArr = pathLock.getImgArr();
      // 잠금장치 위에 마우스 오버
      if (mouseOver(
          pathLockX - imgArr[0].width / 2,
          pathLockX + imgArr[0].width / 2,
          pathLockY + imgArr[0].height / 2,
          pathLockY - imgArr[0].height / 2
        )) {
          // 잠금장치 스크린 이미지 stage로 변환
          stage = 19;
      }
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);
      }
      
      // 마우스가 왼쪽 버튼 위에 있는 경우
      if (mouseOver(0, 45, 480, 0)) {
        // 서재로 이동
        stage = 5;
      }
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);
      }

      // 마우스가 오른쪽 버튼 위에 있는 경우
      if (mouseOver(805, 853, 480, 0)) {
        // 거실 이동
        stage = 4;
      }
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);
      }

      // 차고 부분 위에 마우스 오버 시, 해당 부분 따로 표시
      if(mouseOver(100, 495, 333, 120)){
        if(carLockSolved){
          stage = 10;
        }
        else{
          stage = 9;
        }
      }
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);
      }

      // 맵 버튼 위에 마우스 오버
      if (computerSolved && mouseOver(mapBtnX-mapBtn1.width/2, mapBtnX+mapBtn1.width/2, mapBtnY+mapBtn1.height/2, mapBtnY-mapBtn1.height/2)) {
        // 지도 stage로
        stage = 3;
      }
      // 마우스가 맵 버튼 위에 없는 경우
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }

      // 인벤토리 클릭
      inventoryMouseClick();
      break;
    // 통로 (열림), 차 열림
    case 8:
      // 잠금장치 중심 x좌표, y좌표
      pathLockX = 600;
      pathLockY = 211;
      // map 버튼 중심 x좌표, y좌표
      mapBtnX= 0.1*width, mapBtnY = 0.94*height;

      // 잠금장치 이미지 파일 배열 가져옴
      imgArr = pathLock.getImgArr();
      // 잠금장치 위에 마우스 오버
      if (mouseOver(
          pathLockX - imgArr[0].width / 2,
          pathLockX + imgArr[0].width / 2,
          pathLockY + imgArr[0].height / 2,
          pathLockY - imgArr[0].height / 2
        )) {
          // 잠금장치 스크린 이미지 stage로 변환
          stage = 19;
      }
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);
      }

      // 마우스가 왼쪽 버튼 위에 있는 경우
      if (mouseOver(0, 45, 480, 0)) {
        // 서재로 이동
        stage = 5;
      }
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);
      }

      // 마우스가 오른쪽 버튼 위에 있는 경우
      if (mouseOver(805, 853, 480, 0)) {
        // 거실 이동
        stage = 4;
      }
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);
      }

      // 맵 버튼 위에 마우스 오버
      if (computerSolved && mouseOver(mapBtnX-mapBtn1.width/2, mapBtnX+mapBtn1.width/2, mapBtnY+mapBtn1.height/2, mapBtnY-mapBtn1.height/2)) {
        // 지도 stage로
        stage = 3;
      }
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);
      }

      // 차고 부분 위에 마우스 오버 시, 해당 부분 따로 표시
      if(mouseOver(100, 495, 333, 120)){
        stage = 10;
      }
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);
      }

      // 인벤토리 클릭
      inventoryMouseClick();
      break;
    // 차고, 차 닫힘
    case 9:
      // return 버튼의 중심 x좌표, y좌표
      returnBtnX = 0.05*width;
      returnBtnY = 450;
      // 자동차 잠금장치 중심 x좌표, y좌표
      carLockX = 550;
      carLockY = 300;

      // 인벤토리
      inventoryMouseClick();

      // 자동차 잠금장치 이미지 파일 배열 가져옴
      imgArr = carLock.getImgArr();
      // 마우스가 자동차 잠금장치 위에 있는 경우
      if (mouseOver(
          carLockX - imgArr[0].width / 2,
          carLockX + imgArr[0].width / 2,
          carLockY + imgArr[0].height / 2,
          carLockY - imgArr[0].height / 2
        )) {
        // 마우스 포인터를 클릭한 경우
        showMousePointer(true);
        // stage 이동
        stage = 20;
      }
      // 마우스가 자동차 잠금장치 위에 없는 경우
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }

      // return 버튼 위에 마우스 오버
      if (mouseOver(returnBtnX-32, returnBtnX+32, returnBtnY+17, returnBtnY-17)) {
        // 마우스 포인터를 클릭한 경우
        showMousePointer(true);
        // 통로 (열림), 차 문 닫힘 으로 이동
        stage = 7;
      }
      // 마우스가 return 버튼 위에 없는 경우
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }
      break;
    // 차고, 차 열림
    case 10:
      // return 버튼의 중심 x좌표, y좌표
      returnBtnX = 0.05*width;
      returnBtnY = 450;

      // 인벤토리 클릭
      inventoryMouseClick();

      // USB 위에 마우스가 있는 경우
      if(!usb.obtained && mouseOver
        (usb.dataX - usbImg.width/2, 
        usb.dataX + usbImg.width/2, 
        usb.dataY + usbImg.height/2, 
        usb.dataY - usbImg.height/2
        )) {
        image(usbImg, usb.dataX, usb.dataY, usbImg.width*1.1, usbImg.height*1.1);

        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);
                    
        // Page에서 해당 객체 삭제하기
        for(let j=0; j<Pages[stage].evidenceArr.length; j++){ // 현재 페이지의 증거물 목록 중에서
          if(Pages[stage].evidenceArr[j].name === usb.name){ // 확인한 증거물의 이름이 USB 이름과 같은 경우
            // usb 증거물을 획득 했음을 표시
            usb.obtained = true;
            // 현재 Page의 Evidence Array에서 편지를 제외
            Pages[stage].evidenceArr.splice(j,1);
            break;
          }
        }

        // usb로 인벤토리 객체 생성
        usbItem = new InventoryItem(usb, inventory);
        
        // 인벤토리에 추가
        inventory.inventoryArr.push(usbItem);
      }
      // USB 위에 마우스가 없는 경우
      else{
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }

      // return 버튼 위에 마우스 오버
      if (mouseOver(returnBtnX-32, returnBtnX+32, returnBtnY+17, returnBtnY-17)) {
        // 마우스 포인터를 클릭한 경우
        showMousePointer(true);
        // 통로(열림), 차 열림으로 이동
        stage = 8;
      }
      // 마우스가 return 버튼 위에 없는 경우
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }
      break;
    // 게임 결말 화면#1
    case 11:
      if(mouseOver(755, 785, 430, 405)){
        stage = 22;
      }
      else{
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }
      break;
    // 편지 화면
    case 12:
      // back 버튼의 x좌표, y좌표
      backBtnX = 0.9 * width;
      backBtnY = 0.1 * height;
      // hintBtn 버튼의 중심 x좌표, y좌표
      hintBtnX = 622;
      hintBtnY = 428;
      // explain 버튼의 중심 x좌표, y좌표
      explainBtnX = 393;
      explainBtnY = 420;

      // anagramExplain 버튼 위에 마우스가 있는 경우
      if (mouseOver(explainBtnX-16, explainBtnX+16, explainBtnY+20.5, explainBtnY-20.5)) {
        stage = 13;
      }
      else{
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }

      // hint 버튼 위에 마우스가 있는 경우
      if (mouseOver(hintBtnX-21.5, hintBtnX+21.5, hintBtnY+13, hintBtnY-13)) {
        stage = 14;
      }
      else{
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }

      // back 버튼 위에 마우스가 있는 경우
      if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
        stage = prevStage;
      }
      else{
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }
      break;
    // 편지 애너그램 설명 화면
    case 13:
      // back 버튼의 중심 x좌표, y좌표
      backBtnX = 0.9 * width;
      backBtnY = 0.1 * height;

      // back 버튼 위에 마우스가 있는 경우
      if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
        // 편지 화면으로 돌아감
        stage = 12;
      }
      else{
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }
      break;
    // 편지 힌트 화면
    case 14:
      // back 버튼의 중심 x좌표, y좌표
      backBtnX = 0.9 * width;
      backBtnY = 0.1 * height;

      // back 버튼 위에 마우스가 있는 경우
      if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
        // 편지 화면으로 돌아감
        stage = 12;
      }
      else{
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }
      break;
    // 엄지 화면
    case 15:
      // back 버튼의 중심 x좌표, y좌표
      backBtnX = 0.9 * width;
      backBtnY = 0.1 * height;

      // back 버튼 위에 마우스가 있는 경우
      if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
        // 이전 화면으로 돌아감
        stage = prevStage;
      }
      else{
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }
      break;
    // 암호표 화면
    case 16:
      // 암호표를 해독한 경우
      if (cipherSolved) {
        clear();

        // back 버튼의 중심 x좌표, y좌표
        backBtnX = 0.9 * width;
        backBtnY = 0.1 * height;

        // back 버튼 위에 마우스가 있는 경우
        if (mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)) {
          stage = prevStage;
        }
        // back 버튼 위에 마우스가 없는 경우
        else {
          // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
          showMousePointer(true);
        }
      }
      // 암호표를 아직 해독하지 못한 경우
      else {
        // back 버튼의 중심 x좌표, y좌표
        backBtnX = 0.9 * width;
        backBtnY = 0.1 * height;

        // back 버튼 위에 마우스가 있는 경우
        if (mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)) {
          stage = prevStage;
        }
        // explain 버튼 위에 마우스가 없는 경우
        else {
          // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
          showMousePointer(true);
        }
      }
      break;
    // usb 화면
    case 17:
      // back 버튼의 중심 x좌표, y좌표
      backBtnX = 0.9 * width;
      backBtnY = 0.1 * height;

      // back 버튼 위에 마우스가 있는 경우
      if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
        // 이전 화면으로 돌아감
        stage = prevStage;
      }
      else{
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }
      break;
    // 컴퓨터 화면
    case 18:
      // back 버튼의 중심 x좌표, y좌표
      backBtnX = 0.1 * width;
      backBtnY = 0.9 * height;

      // 인벤토리
      inventoryMouseClick();
        
      // 뒤로가기 버튼 클릭
      if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
        // 서재로 돌아가기
        stage = 5;
      }
      else{
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }
      break;
    // 통로 잠금장치 화면
    case 19:
      // 통로 잠금장치를 푼 경우
      if(pathLockSolved){
        // 인벤토리 클릭
        inventoryMouseClick();

        // back 버튼의 중심 x좌표, y좌표
        backBtnX = 0.1 * width;
        backBtnY = 0.9 * height;

        // back 버튼 위에 마우스가 있는 경우
        if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
          // 열린 통로 화면으로 돌아감
          // 자동차 잠금장치를 푼 경우
          if(carLockSolved){
            stage = 8;
          }
          // 자동차 잠금장치를 풀지 못한 경우
          else{
            stage = 7;
          }
        }
        else{
          // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
          showMousePointer(true);  
        }
      }
      // 통로 잠금장치를 못 푼 경우
      else{
        // 인벤토리 클릭
        inventoryMouseClick();

        // back 버튼의 중심 x좌표, y좌표
        backBtnX = 0.1 * width;
        backBtnY = 0.9 * height;

        // 버튼 클릭 작업 진행: 클릭한 버튼의 값을 입력 문자 배열에 추가
        for (let b of pathLockAlphabets) {
          b.clicked();
        }
        pathLockResetBtn.clicked();
        pathLockEnterBtn.clicked();

        // back 버튼 위에 마우스가 있는 경우
        if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
          // 닫힌 통로 화면으로 돌아감
          stage = 6;

          // 잠금장치 초기화
          for (let b of pathLockAlphabets) {
            b.color = color(204,204,204);
          }
          // 입력 문자 배열 초기화
          pathLockInputArr = [];
          // 원래 자리로
          if(thumbItem != null){
            thumbItem.used = false;
          }
        }
        else{
          // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
          showMousePointer(true);  
        }
      }
      break;
    // 자동차 잠금장치 화면
    case 20:
      // 자동차 잠금장치를 푼 경우
      if(carLockSolved){
        // back 버튼의 중심 x좌표, y좌표
        backBtnX = 0.1 * width;
        backBtnY = 0.9 * height;

        // back 버튼 위에 마우스가 있는 경우
        if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
          // 차고, 열린 차로 돌아감
          stage = 10;
        }
        else{
          // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
          showMousePointer(true);  
        }
      }
      // 자동차 잠금장치를 못 푼 경우
      else{
        // back 버튼의 중심 x좌표, y좌표
        backBtnX = 0.1 * width;
        backBtnY = 0.9 * height;
        // hintBtn 버튼의 중심 x좌표, y좌표
        hintBtnX = 766;
        hintBtnY = 140;

        // 버튼 클릭 작업 진행: 클릭한 버튼의 값을 입력 문자 배열에 추가
        for (let b of carLockAlphabets) {
          b.clicked();
        }
        carLockResetBtn.clicked();
        carLockEnterBtn.clicked();

        // hint 버튼 위에 마우스가 있는 경우
        if (mouseOver(hintBtnX-21.5, hintBtnX+21.5, hintBtnY+13, hintBtnY-13)) {
          // 자동차 힌트 화면으로 넘어감
          stage = 27;
        }
        else{
          // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
          showMousePointer(true);  
        }

        // back 버튼 위에 마우스가 있는 경우
        if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
          for (let b of carLockAlphabets) {
            b.color = color(204,204,204);
          }
          // 입력 문자 배열 초기화
          carLockInputArr = [];
          
          // 자동차 잠금 장치를 해제한 경우
          if(carLockSolved){
            stage = 10;
          }
          // 자동차 잠금 장치를 해제하지 못한 경우
          else{
            stage = 9;
          }
        }
        else{
          // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
          showMousePointer(true);  
        }
      }
      break;
    // 게임 실패 화면
    case 21:
      // restart 버튼 중심 x,y 좌표
      restartBtnX = width/2;
      restartBtnY = height/1.7;
      //restart 버튼 이미지 파일 배열 가져옴
      imgArr = restartBtn.getImgArr();

      // restart 버튼 위에 마우스 오버
      if (mouseOver(
          restartBtnX - imgArr[0].width / 2,
          restartBtnX + imgArr[0].width / 2,
          restartBtnY + imgArr[0].height / 2,
          restartBtnY - imgArr[0].height / 2
        )) {
        // 새로운 이미지로 덮기
        image(imgArr[2], restartBtnX, restartBtnY);

        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);

        // 시작 stage로
        stage = 0;

        // timer 재설정 (왜냐면 지금 종료조건으로 timer가 500으로 초기화하기 전에 stage가 21에 계속 머물러서)
        timer = 500;
      }
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);
      }
      break;
    // 게임 결말 화면#2
    case 22:
      if (mouseOver(755, 785, 430, 405))
        stage = 23;
      break;
    // 게임 결말 화면#3
    case 23:
      if (mouseOver(755, 785, 430, 405))
        stage = 24;
      break;
    // 게임 결말 화면#4
    case 24:
      if (mouseOver(755, 785, 430, 405))
        stage = 25;
      break;
    // 게임 결말 화면#5
    case 25:
      if (mouseOver(755, 785, 430, 405))
        stage = 26;
      break;
    // 게임 클리어 화면
    case 26:
      // restart 버튼 중심 x,y 좌표
      restartBtnX = (width*3) / 4;
      restartBtnY = (height*3) / 4;
      //restart 버튼 이미지 파일 배열 가져옴
      imgArr = restartBtn.getImgArr();

      // restart 버튼 위에 마우스 오버
      if (mouseOver(
          restartBtnX - imgArr[0].width / 2,
          restartBtnX + imgArr[0].width / 2,
          restartBtnY + imgArr[0].height / 2,
          restartBtnY - imgArr[0].height / 2
        )) {
        // 새로운 이미지로 덮기
        image(imgArr[2], restartBtnX, restartBtnY);

        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);

        // 시작 stage로
        stage = 0;
      } 
      // restart 버튼 위에 마우스가 없는 경우
      else {
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);
      }
      break;
    // 자동차 잠금장치 힌트 화면
    case 27:
      // back 버튼의 중심 x좌표, y좌표
      backBtnX = 0.9 * width;
      backBtnY = 0.1 * height;

      // back 버튼 위에 마우스가 있는 경우
      if(mouseOver(backBtnX-46, backBtnX+46, backBtnY+23, backBtnY-23)){
        // 자동차 잠금장치 화면으로 돌아감
        stage = 20;
      }
      else{
        // 마우스 포인터를 클릭한 경우 (매개변수: 클릭 여부)
        showMousePointer(true);  
      }
      break;
    }
}

function mouseOver(leftX, rightX, downY, upY) {
  // 주어진 범위 내 마우스(mouseX, mouseY)가 있는 경우
  if (mouseX >= leftX && mouseX <= rightX && mouseY <= downY && mouseY >= upY) {
    return true;
  } else {
    return false;
  }
}

// 인벤토리를 mouseOver 했을때 해당 위치에 있는 아이템 확대
function inventoryMouseOver(){
  for(var i=0; i<inventory.inventoryArr.length; i++){
    if(mouseOver(
      inventory.posX - inventory.slotLength/2,
      inventory.posX + inventory.slotLength/2,
      inventory.firstSlotY + inventory.gap * i + inventory.slotHeight/2,
      inventory.firstSlotY + inventory.gap * i - inventory.slotHeight/2
      )){
        // 현재 아이템을 사용 중이라면 안 보이게
        if(inventory.inventoryArr[i].used == false){
          // USB인 경우 너무 크게하면 이상해서 조금 변형
          if(inventory.inventoryArr[i].name == "USB"){
            image(inventory.inventoryArr[i].imgArray[0], inventory.posX, inventory.firstSlotY + inventory.gap * i + 10, 
              inventory.inventoryArr[i].imgArray[0].width * 1.2, inventory.inventoryArr[i].imgArray[0].height * 1.2);
            // 마우스 포인터 보이기
            showMousePointer(false);
          }
          else{
            image(inventory.inventoryArr[i].imgArray[0], inventory.posX, 
              inventory.firstSlotY + inventory.gap * i + 10, inventory.slotLength*1.1,
              inventory.slotHeight*1.1);  
            // 마우스 포인터 보이기
            showMousePointer(false);
          }
        }
    }  
  }
}

// 인벤토리 아이템을 클릭했을 때 관련 화면으로 전환
function inventoryMouseClick(){
  for(var i=0; i<inventory.inventoryArr.length; i++){
    if(mouseOver(
      inventory.posX - inventory.slotLength/2,
      inventory.posX + inventory.slotLength/2,
      inventory.firstSlotY + inventory.gap * i + inventory.slotHeight/2,
      inventory.firstSlotY + inventory.gap * i - inventory.slotHeight/2
      )){
        // 인벤토리 클릭 할 때
        if(inventory.inventoryArr[i].name == "리들러의 편지"){
          stage = 12;
        }
        else if(inventory.inventoryArr[i].name == "잘려있는 엄지"){
          // 통로 잠금 장치 화면에서 클릭한 경우 (아이템 사용)
          if(stage == 19){
            inventory.inventoryArr[i].used = true;
          }
          else{
            stage = 15;
          }
        }
        else if(inventory.inventoryArr[i].name == "암호표"){
          stage = 16;
        }
        else if(inventory.inventoryArr[i].name == "USB"){
          // 컴퓨터 화면에서 클릭한 경우 (아이템 사용)
          if(stage == 18){
            inventory.inventoryArr[i].used = true;
            computerSolved = true;
          }
          else{
            stage = 17;
          }
        }
    }  
  }
}

// 마우스 포인터 그리기 (클릭된 여부에 따라 다르게)
function showMousePointer(clicked) {
  // click 여부 값을 전달받음
  if (mouseIsPressed) {
    push(); // STACK에 현재 좌표를 담음
    translate(mouseX, mouseY); // 원점을 새로운 지점(mouseX, mouseY)으로 이동
    imageMode(CORNER);

    image(mouseClick, 0, 0); // 새롭게 설정된 원점을 기준으로 이미지 그리기
    pop();
    imageMode(CENTER);
  } else {
    push(); // STACK에 현재 좌표를 담음
    translate(mouseX, mouseY); // 원점을 새로운 지점(mouseX, mouseY)으로 이동
    imageMode(CORNER);
    image(mouseNoClick, 0, 0); // 새롭게 설정된 원점을 기준으로 이미지 그리기
    pop();
    imageMode(CENTER);
  }
}

// 타이머 출력 함수
function showTimer(posX, posY){
    fill(4, 229, 3);     // 폰트 색상
    textAlign(CENTER, CENTER);
    textSize(50);
    text(timer, posX, posY);
}

// 암호표 입력창 확인하는 함수
function check() {
  var pw = cipherInput.value();
  var noWhitespacePw = pw.replace(/\s/g, '');
  var finalPw = noWhitespacePw.toUpperCase();
  cipherInput.value("");

  if (finalPw == "HELIESSTILL") {
    // 다른 화면으로 넘어가게 stage 값을 바꾼다
    cipherSolved = true;
  }
}

// 시간 입력창 값 확인하는 함수
function checkTime(){
  var time = resultTime.value();
  var minute = resultMinute.value();
  var finalTime = time.replace(/\s/g, '');
  var finalMinute = minute.replace(/\s/g, '');
  if(finalTime == "21" && finalMinute == "00"){
    correctTime = true;
    resultTime.hide();
    resultMinute.hide();
    resultBtn.hide();
    resultTime.value("");
    resultMinute.value("");
  }
  else{
    resultTime.value("");
    resultMinute.value("");
    timer -= 15;
  }
}

class myButton {
  constructor(type, label, x, y, w, h) {
    this.color = color(204,204,204);
    this.type = type;
    this.label = label;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw() {
    fill(this.color);
    rectMode(CORNER);
    stroke(0);
    strokeWeight(1);
    rect(this.x, this.y, this.w, this.h);
    fill(0);
    strokeWeight(0);
    text(this.label, this.x + this.w / 2, this.y + this.h / 2);
  }

  clicked() {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      // 통로 잠금장치 알파벳 버튼인 경우
      if (this.type == "pathLockInput" && pathLockInputArr.length < 8) {
        this.color = 120;
        setTimeout(resetAlphabetBtn, 150);

        // 입력 문자 배열에 현재 입력한 문자 추가
        pathLockInputArr.push(this.label);
        }
      // 통로 잠금장치 reset 버튼인 경우
      else if (this.type == "pathLockReset") {
        this.color = 120;
        setTimeout(resetEnterResetBtn, 150);

        for (let b of pathLockAlphabets) {
          b.color = color(204,204,204);
        }
        // 입력 문자 배열 초기화
        pathLockInputArr = [];
        // 원래 자리로
        if(thumbItem != null){
          thumbItem.used = false;
        }
      }
      // 통로 잠금장치 enter 버튼인 경우
      else if(this.type == "pathLockEnter"){
        this.color = 120;
        setTimeout(resetEnterResetBtn, 150);

        // 입력 문자 배열로 비밀번호 입력 문자열 만들기
        pathLockPwStr = "";
        for(var ch of pathLockInputArr){
          pathLockPwStr += ch;
        }
        var noWhitespacePassword = pathLockPwStr.replace(/\s/g, '');
        var finalPassword = noWhitespacePassword.toUpperCase();
        
        // 비밀번호가 일치하는 경우
        if(finalPassword == "DRIVE" && thumbItem != null && thumbItem.used){
          // pathlock 성공
          pathLockSolved = true;

          for (let b of pathLockAlphabets) {
            b.color = color(204,204,204);
          }
          // 입력 문자 배열 초기화
          pathLockInputArr = [];
          
          // 원래 자리로
          if(thumbItem != null){
            thumbItem.used = false;
          }
        }
        // 입력값이 틀린 경우
        else {
          // 시간 감소
          timer -= 15;
          for (let b of pathLockAlphabets) {
            b.color = color(204,204,204);
          }
          // 입력 문자 배열로 비밀번호 입력 문자열 만들기
          pathLockPwStr = "";
          // 입력 문자 배열 초기화
          pathLockInputArr = [];
          // 원래 자리로
          if(thumbItem != null){
            thumbItem.used = false;
          }
        }
      }
      // 자동차 잠금장치 알파벳 버튼인 경우
      else if(this.type == "carLockInput" && carLockInputArr.length <4){
        this.color = 120;
        setTimeout(resetAlphabetBtn, 150);

        // 입력 문자 배열에 현재 입력한 문자 추가
        carLockInputArr.push(this.label);
      }
      // 자동차 잠금장치 reset 버튼인 경우
      else if(this.type == "carLockReset"){
        this.color = 120;
        setTimeout(resetEnterResetBtn, 150);

        for (let b of carLockAlphabets) {
          b.color = color(204,204,204);
        }
        // 입력 문자 배열 초기화
        carLockInputArr = [];
      }
      // 자동차 잠금장치 enter 버튼인 경우
      else if(this.type == "carLockEnter"){
        this.color = 120;
        setTimeout(resetEnterResetBtn, 150);

        // 입력 문자 배열로 비밀번호 입력 문자열 만들기
        carLockPwStr = "";
        for(var ch of carLockInputArr){
          carLockPwStr += ch;
        }
        var noWhitespacePassword = carLockPwStr.replace(/\s/g, '');
        var finalPassword = noWhitespacePassword.toUpperCase();
        
        // 비밀번호가 일치하는 경우
        if(finalPassword == "LIES"){
          // carlock 성공
          carLockSolved = true;

          for (let b of carLockAlphabets) {
            b.color = color(204,204,204);
          }
          // 입력 문자 배열 초기화
          carLockInputArr = [];
        }
        // 입력값이 틀린 경우
        else {
          // 시간 감소
          timer -= 15;
          for (let b of carLockAlphabets) {
            b.color = color(204,204,204);
          }
          // 입력 문자 배열 초기화
          carLockInputArr = [];
        }

      }
    }
  }
}

function keyPressed() {
  if(stage == 26){
    if (keyCode == BACKSPACE) {
      pressedKeys = "";
    } 
    else if (keyCode == ENTER) {
      if (pressedKeys == 'rataalada.com') {
        endingMusic.stop();
        stage = 28;
        playVideo();
        pressedKeys = "";
      }
    }
    else{
      pressedKeys += key;
    }
  }

  if(keyCode == ESCAPE){
    stage = 0;
  }
}

function playVideo() {
  easterEggVid.show();
  easterEggVid.play();
}

function resetEnterResetBtn(){
  if(stage == 19){
    pathLockEnterBtn.color = color(204,204,204);
    pathLockResetBtn.color = color(204,204,204);
  }
  else if(stage == 20){
    carLockEnterBtn.color = color(204,204,204);
    carLockResetBtn.color = color(204,204,204);
  }
}

function resetAlphabetBtn(){
  if(stage == 19){
    for (let b of pathLockAlphabets) {
      b.color = color(204,204,204);
    }
  }
  else if(stage == 20){
    for (let b of carLockAlphabets) {
      b.color = color(204,204,204);
    }
  }
}
