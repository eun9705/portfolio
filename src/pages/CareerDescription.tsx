import styled from "styled-components";
import { Container } from "../style/globalStyle";
import { KorFont500, SubFont, SubPageTitle } from "../style/globalFont";
import careerDummy from '../dummy/careerData.json';
import CareerList from "../components/CareerList";

export interface CareerInfoDetailType {
    role:string;
    title:string;
    term:string;
    done:string[];
    stack:string[]
}

export interface CareerInfoType {
    company:string;
    description:string;
    period:string;
    detail: CareerInfoDetailType[];
}

const CareerDescription = () => {
    return <CareerDescriptionWrapper>
        <CareerConatiner>
        <SubPageTitle highlight={"#2F80ED"}>Work <span>Experience</span></SubPageTitle>
        {careerDummy.map((item:CareerInfoType)=>{
            return <>
                <p className="company-name">{item.company}</p>
                <span className="company-description">
                    {item.description}
                    <br />
                    {item.period}    
                </span>
                <br />
                <CareerListWrapper>
                    {item.detail.map((info)=>{
                        return <CareerList listInfo={info}/> 
                    })}
                </CareerListWrapper>
            </>
        })}
        </CareerConatiner>
    </CareerDescriptionWrapper>  
} 

const CareerDescriptionWrapper = styled.div`
    display:grid;place-items:center;width:100vw;padding:25rem 0 7rem;overflow-x:hidden;
`

const CareerConatiner = styled(Container)`
    .company-name { 
        margin:2.5em 0 .25em;
        ${KorFont500}
        font-size:4rem;
    }
    .company-description { 
        margin-bottom:5rem;font-size:2.2rem;
        ${SubFont}
    }
    
`

const CareerListWrapper = styled(Container)`
    margin: 2.5em 0 18rem;
    &::before,&::after { content:'';display:block;width:calc(100% + 40rem);height:.2em; }
    &::before { border-radius: .5rem 0 0 .5rem;background-color:#219653; }
    &::after { position:relative;left:-40rem;border-radius: 0 .5rem .5rem 0;background-color:#EB5757; }
`

export default CareerDescription;