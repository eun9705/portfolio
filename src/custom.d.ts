/* font declare */
declare module '*.woff';
/* image declare */
declare module '*.webp';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import React = require('react');
    export const ReactComponent:React.FunctionComponent<React.SVGProps<SVGAElement>>;
    const src:string;
    export default src;
}
declare module '*.json';
declare module '*.js';