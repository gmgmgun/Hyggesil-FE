
# Hyggesil 프로젝트 소개

- 서울 지역 한정 호캉스 예약 호스팅 사이트 구현 프로젝트
- 초기 세팅부터 백엔드와 협업하여 호텔 데이터, 예약 가능 유무 및 결제 기능구현

## 개발 인원 및 기간

- 개발기간: 23/2/27 ~ 23/3/10 (2주)
- 팀원: FE - 김한솔, 이동민, 강승찬(Product Manager) BE - 박세희(Product Manager), 이한재

# 적용 기술 및 주요 기능

## 적용기술

- FE : React.js , Styled-component , Github

## 주요 기능

### 공유하기 (김한솔)

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/120270709/224230327-3ae75f2e-631f-4495-8c5b-db81cd94d7be.gif)

- 카카오 외부API 사용하여 상세페이지에서 현재페이지 공유가능

### 필터 기능(강승찬)

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/120270709/224231097-4e426c08-d4b3-4a01-9f2f-38ed8b294371.gif)

### 호스팅 기능(이동민)

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/120270709/224231583-6fd584e6-cc6a-4135-a914-a7a19fcd4585.gif)

### 로그인 기능(강승찬)

![ezgif com-video-to-gif (2)](https://user-images.githubusercontent.com/120270709/224232096-fdf31a02-9668-4caa-a20e-dbeb08fc4feb.gif)

### 상세페이지 (김한솔)

![ezgif com-video-to-gif (3)](https://user-images.githubusercontent.com/120270709/224232710-9e6dadc7-cb82-471e-b8cf-cefe1c2e19e7.gif)

- 상세페이지 datepicker로 예약 페이지 구현 
- moment라이브러리와 datepicker 프로퍼티로 체크인 날짜와 체크아웃 날짜 'YYYY-MM-DD'형식으로 백엔드에 전달
- 현재 날짜 이전 날짜와 객실이 꽉찬 날짜 예약 불가능하게 하는 기능 구현
- 결제페이지에서 예약 요청 버튼시 백엔드에 체크인, 체크아웃, 총합계 데이터 전달 유효성검사 이후 결제 



