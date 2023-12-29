import { useRouter } from '../hooks/useRouter';
import projectDummy from '../dummy/projectData.json';
import styled from "styled-components";
import { media } from '../style/responsive';
import { projectData } from '../dummy/projectData.js';
import images from '../dummy/images.js';

type ProjectDummy = {
    thumbnail:string;
}

const getImgUrl = (url:string) => {

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
    background:url(${(props)=>props.bgUrl}) center / cover;
    border-radius:1rem;cursor: pointer;overflow:hidden;
    ${media.small} {
        height:50vw;border-radius:.4em;
        &:nth-child(odd) { margin-right:0; }
    }
`

export default ProjectImageCard;