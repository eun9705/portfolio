export const projectData = [
    {
        eng:"Myflix",
        kor:"마이플릭스",
        thumbnail:"thumbnail01",
        mockup:["mockup01","mockup02"],
        overview:"TMDB Open API를 이용하여 Netflix와 비슷하게 구현해본 웹 서비스입니다.\nButton, form 요소를 최대한 재사용할 수 있는 방향으로 컴포넌트를 구성해보았으며,\nReact,Recoil,Vite, Styled-components,Typescript, useRouter, useScroll, useDebounce custom hook을 사용하여 구현하였습니다.",
        review:"이번 프로젝트에서는 webpack을 직접 설정하지 않고 vite를 사용해서 프로젝트를 만들어보았습니다.\nwebpack 비해 vite는 설정 아주 편리했습니다.\n이번 프로젝트에서는 useDebounce 라는 custom hook을 통해\napi요청이 적게 들어가게 하거나 scrollY의 값 변경으로 인한 잦은 리렌더링을 방지해보았습니다.\n또한 recoil을 사용하여 로그인 상태, 사용자 uid값을 관리하도록 구현해보았습니다.",
        link:"https://my-flixxx.netlify.app/",
        git:"https://github.com/eun9705/myflix"
    },
    {
        eng:"Renewal-Portfolio",
        kor:"포트폴리오",
        thumbnail:"thumbnail02",
        mockup:["mockup03","mockup04"],
        overview:"제작한 웹 서비스를 모아둔 개인 포트폴리오 사이트입니다.\nReact,Webpack, Styled-components,Typescript,context API,\nuseTheme, useRouter, useIntersectionObserver custom hook을 사용하여 구현하였습니다.",
        review:"CRA(Create React App)를 사용하지 않고 직접 Webpack을 설정해보았습니다.\n다양한 설정이 필요하고 이미지를 불러오는 과정에서도 설정할 것이 있다는 것이 꽤 번거로웠습니다.\n또한 해당 프로젝트에서는 custom hook을 적극 활용하는 것에 초점을 두어,\n 이를 위해 useTheme, useRouter, useIntersectionObserver 등의 custom hook을 적용했습니다.",
        link:"https://ek-portfolio.netlify.app/",
        git:"https://github.com/eun9705/portfolio"
    }
]