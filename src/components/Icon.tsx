import { IconSet,iconName } from "../ts/path"

type IconProps = {
    icon:iconName,
    width?:number,
    height?:number,
}

const Icon = ({icon,width,height}:IconProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width={width ? width: "1em"} height={height ? height : "1em"} viewBox={IconSet[icon].viewBox} fill={IconSet[icon].fill} >
        {IconSet[icon].stroke ?
        <>
            {IconSet[icon].path.map((item,index)=>{
                return <path d={item} stroke={IconSet[icon].stroke} stroke-width={IconSet[icon].strokeWidth} stroke-miterlimit={IconSet[icon].strokeMiterlimit} stroke-linecap={IconSet[icon].strokeLineCap} stroke-linejoin={IconSet[icon].strokeLineJoin} key={index}/>
            })}
        </>
        :
        <>
            <path d={IconSet[icon].path[0]} fill="none"/>
            <path d={IconSet[icon].path[1]} />
        </>
        }
    </svg>
}

export default Icon;