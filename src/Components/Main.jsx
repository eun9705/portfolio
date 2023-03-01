import React, { Component } from "react";
import styled from "styled-components";
import { FlexBox } from "./CommonStyle";

const MainWrapper = styled(FlexBox)`
    opacity: 0;
    &.on { opacity:1;transition:1s; }
`;

class Main extends Component {
    render() {
        return (
            <MainWrapper className={this.props.value ? "on" : ""}>
                <FlexBox width={"100vw"} height={"100vh"}>
                    HELLO
                </FlexBox>
            </MainWrapper>
        );
    }
}

export default Main;