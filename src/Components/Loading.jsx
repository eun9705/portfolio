import { Component } from "react";
import styled from "styled-components";
import { BoldFont, FlexBox, PositionBox } from "./CommonStyle";
import loadingImg from "../images/loading-img.png";


const ContentWrapper = styled(FlexBox)`
    /* @keyframes rotate {
        from { transform:rotate(0deg) }
        to { transform:rotate(360deg); }
    } */
    opacity: 0;
    transition: all 1s;
    img { width:45rem; }
    svg,div { 
        ${PositionBox} 
        /* textpath { animation: rotate 10s infinite ease;transform-origin:center; } */
        /* inset:0;
        margin: auto; */
    }
    div {
        bottom:20px; 
        overflow:hidden; 
    }
    p { 
        ${BoldFont}
        font-size: 2rem;
        letter-spacing: .2rem;
        transform: translateY(100%);
        transition: 1s;
    }
    &.on { 
        opacity: 1;
        transition-delay: 1.5s;
        p { transform: translateY(0);transition:.5s;transition-delay: 2s; }
    }
`;

// const curvedText = (time) => {
//     var tl   = new TimelineMax({ repeat: -1 });
//     var text = document.querySelector('svg textpath'),
//         path = document.querySelector('svg defs path');
  
//     var from = {
//       transformOrigin: 'center center',
//       rotation: 0
//     };
  
//     var to = {
//       rotation: 360,
//       ease: Linear.easeInOut
//     };
  
//     tl.fromTo([text, path], time, from, to);
  
//     return tl;
//   }
  
//   curvedText(20);

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ContentWrapper width={"100vw"} height={"100vh"} className={this.props.value ? "on" : ""} id="loadingSection">
                <img src={loadingImg} alt="로딩화면 이미지" />
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width={502} height={740} viewBox="0 0 502 740" >
                    <defs>
                        <path id="maskCircle" d="M0 370a250 310 0 1 0 500 0a250 310 0 1 0 -500 0" >
                            {/* <animateTransform attributeName="transform" begin={0} dur={"10s"} type={"rotate"} from={"0 251 370"} to={"360 251 370"} repeatCount="indefinite" /> */}
                        </path>
                    </defs>
                    <text>
                        <textPath href="#maskCircle" startOffset="0">
                            eunkyoung's portfolio eunkyoung's portfolio eunkyoung's portfolio eunkyoung's portfolio eunkyoung's portfolio eunkyoung's portfolio eunkyoung's portfolio eunkyoung's portfolio eunkyoung's portfolio eunkyoung's portfolio eunkyoung's portfolio eunkyoung's portfolio
                        </textPath>
                    </text>
                </svg>
                <div>
                    <p>LOADING...</p>
                </div>
            </ContentWrapper>
        )
    }
}
 
export default Loading;