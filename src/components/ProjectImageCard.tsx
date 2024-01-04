import { useRouter } from '../hooks/useRouter';
import styled from "styled-components";
import { media } from '../style/responsive';
import { projectData } from '../dummy/projectData.js';
import images from '../dummy/images.js';

type ProjectDummy = {
    thumbnail:string;
}

const ProjectImageCard = () => {
    const { routerTo } = useRouter();
    return <ImageCardWrapper>
        {projectData.map((item:ProjectDummy,index:number)=>{
            return <ImageBackground onClick={()=>routerTo(`/detail/${index + 1}`)} bgUrl={images[item.thumbnail]}/>
        })}
    </ImageCardWrapper>
}

const ImageCardWrapper = styled.div`
    display:grid;grid-template-columns:repeat(2,1fr);grid-gap:2rem;
    ${media.small} {
        grid-template-columns: 1fr;
    }
`
const ImageBackground = styled.div<{bgUrl?:string}>`
    height:29.2vw;
    background:url(${(props)=>props.bgUrl}) no-repeat center / 110%;transition:background-size .5s ease-in-out;
    border-radius:1rem;cursor: pointer;overflow:hidden;
    @media (hover:hover) and (pointer: fine){
        &:hover { background-size:130%; }
    }
    ${media.small} {
        height:50vw;border-radius:.4em;
        &:nth-child(odd) { margin-right:0; }
    }
`

export default ProjectImageCard;