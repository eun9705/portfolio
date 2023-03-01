import { Component } from "react";
import $ from 'jquery';
import Intro from "./Intro";
import Loading from "./Loading";
import Main from "./Main";



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            startAni:false, //애니메이션 관련 state
            loadingOn: false // 로딩화면 관련 state
        }
    }
    test = () => {
        this.setState({startAni:true});
        setTimeout(()=>{
            document.getElementById('test').style.display = 'none';
        },1000);
        setTimeout(()=>{this.setState({startAni:false})},4000);
        setTimeout(()=>{
            document.getElementById('loadingSection').style.display = 'none';
            this.setState({loadingOn:true});
        },6000);
    }
    render() {
        const { startAni,loadingOn } = this.state;
        return (
            <>
                <Intro fn={this.test} value={startAni}/>
                <Loading value={startAni}/>
                <Main value={loadingOn}/>
            </>
        );
    }
}

export default Home;