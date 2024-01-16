export type iconName = 'arrow' | 'email' | 'sun' | 'moon' ; 

export type icon = {
    path:string[];
    viewBox:string,
    fill:string,
    stroke?:string,
    strokeWidth?:number,
    strokeMiterlimit?:number,
    strokeLineCap?:string,
    strokeLineJoin?:string,
    fillRule?:string,
    clipRule?:string
}

export const IconSet:Record<iconName,icon> = {
    arrow:{
        path:["M1 13.5L5.93936 8.56061C6.5227 7.97728 6.5227 7.02274 5.93936 6.4394L1 1.5"],
        viewBox:"0 0 8 15",
        fill:"none",
        stroke:"#292D32",
        strokeWidth:2,
        strokeMiterlimit:10,
        strokeLineCap:"round",
        strokeLineJoin:"round"
    },
    email:{
        path:["M20.4118 23H7.47059C3.58824 23 1 21.0588 1 16.5294V7.47059C1 2.94118 3.58824 1 7.47059 1H20.4118C24.2941 1 26.8824 2.94118 26.8824 7.47059V16.5294C26.8824 21.0588 24.2941 23 20.4118 23Z","M20.4119 8.11768L16.3613 11.353C15.0284 12.4141 12.8413 12.4141 11.5084 11.353L7.4707 8.11768","M20.4119 8.11768L16.3613 11.353C15.0284 12.4141 12.8413 12.4141 11.5084 11.353L7.4707 8.11768"],
        viewBox:"0 0 28 24",
        fill:"none",
        stroke:"#292D32",
        strokeWidth:2,
        strokeMiterlimit:10,
        strokeLineCap:"round",
        strokeLineJoin:"round"
    },
    sun:{
        path:["M0 0h24v24H0z","M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"],
        viewBox:"0 0 24 24",
        fill:"currentColor"
    },
    moon:{
        path:["M0 0h24v24H0z","M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"],
        viewBox:"0 0 24 24",
        fill:"currentColor"
    },
}