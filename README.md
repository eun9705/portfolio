# Eunkyoung's Portfolio
제작한 웹 서비스를 모아둔 개인 포트폴리오 사이트 입니다.
<br /><br />
## ✔ 프로젝트 소개
React,Webpack, Styled-components,Typescript,context API,useTheme, useRouter, useIntersectionObserver custom hook을<br />
사용하여 구현한 포트폴리오 사이트입니다.

<p align="center">
  <img src="https://github.com/eun9705/portfolio/assets/38933350/c217c731-8714-40b6-804a-682ceac1e317">
</p>

배포주소: [https://ek-portfolio.netlify.app/](https://ek-portfolio.netlify.app/)
<br /><br />

## 🧾 설치 가이드
```
$ git clone https://github.com/eun9705/portfolio.git
$ npm install
$ npm run dev
```
<br /><br />
## 🛠 기술 스택
### Environment
<div>
  <img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white">  
</div>

### Development
<div>
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">  
  <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">  
</div>

### Deploy
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
<br /><br />

## 💻 화면구성
|메인페이지|소개페이지|
|------|---|
|<p align="center"><img src="https://github.com/eun9705/portfolio/assets/38933350/eec042c0-588d-4263-8378-be685a11c829"></p>|<p align="center"><img src="https://github.com/eun9705/portfolio/assets/38933350/6dad5f87-efe7-4306-9495-c86d32e2a05d"></p>|

|경력기술페이지|프로젝트소개페이지|
|------|---|
|<p align="center"><img src="https://github.com/eun9705/portfolio/assets/38933350/c282ba3b-2d1e-4c5a-b731-9432dd3207b3"></p>|<p align="center"><img src="https://github.com/eun9705/portfolio/assets/38933350/214ded8a-8ece-48a9-8ec5-525837893b61"></p>|

<br /><br />

## 📦 디렉토리 구조
```
src
 ┣ components
 ┃ ┣ Badge.tsx
 ┃ ┣ Banner.tsx
 ┃ ┣ BasicButton.tsx
 ┃ ┣ CareerList.tsx
 ┃ ┣ DotList.tsx
 ┃ ┣ Footer.tsx
 ┃ ┣ Header.tsx
 ┃ ┣ Icon.tsx
 ┃ ┣ MenuList.tsx
 ┃ ┣ ProjectImageCard.tsx
 ┃ ┣ ScrollToTop.tsx
 ┃ ┗ ThemeToggleButton.tsx
 ┣ context
 ┃ ┗ ThemeProvider.tsx
 ┣ dummy
 ┃ ┣ careerData.json
 ┃ ┣ images.js
 ┃ ┣ projectData.js
 ┃ ┗ skillData.json
 ┣ fonts
 ┣ hooks
 ┃ ┣ useIntersectionObserver.ts
 ┃ ┣ useRouter.ts
 ┃ ┗ useTheme.ts
 ┣ images
 ┣ layout
 ┃ ┗ GeneralLayout.tsx
 ┣ pages
 ┃ ┣ AboutMe.tsx
 ┃ ┣ CareerDescription.tsx
 ┃ ┣ Home.tsx
 ┃ ┣ PageNotFound.tsx
 ┃ ┗ ProjectDetail.tsx
 ┣ style
 ┃ ┣ globalFont.ts
 ┃ ┣ globalStyle.ts
 ┃ ┣ responsive.ts
 ┃ ┗ theme.ts
 ┣ ts
 ┃ ┗ path.ts
 ┣ .DS_Store
 ┣ App.tsx
 ┣ custom.d.ts
 ┣ main.tsx
 ┗ router.tsx
```

