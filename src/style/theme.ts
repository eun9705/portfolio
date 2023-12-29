type ModeBase = {
    backgroundColor: string;
    subBackgroundColor:string;
    fontColor:string;
    subFontColor:string;
    basicShadow:string;
    buttonShadow:string;
    buttonBackgroundColor:string;
    buttonFontColor:string;
}

const colorVariant = {
    /* ligthModeColor */
    ligthModeBg: '#FFFFFF',
    lightModeSubBg:'#F8F8F8',
    lightModeFontColor: '#222222',
    lightModeSubFontColor:'#777777',
    lightModeShadow:'0 4px 20px rgba(0,0,0,.2)',
    ligthModeButtonShadow:'2px 2px 10px rgba(0,0,0,.3)',
    
    /* darkModeColor */
    darkModeBg: '#333333',
    darkModeSubBg:'#555555',
    darkModeFontColor: '#FAFAFA',
    darkModeSubFontColor: '#DDDDDD',
    darkModeShadow:'0 4px 20px rgba(34,34,34,.9)',
    darkModeButtonShadow:'2px 2px 10px rgba(34,34,34,.9)',
}

export const light:ModeBase = {
    backgroundColor: colorVariant.ligthModeBg,
    subBackgroundColor:colorVariant.lightModeSubBg,
    fontColor: colorVariant.lightModeFontColor,
    subFontColor:colorVariant.lightModeSubFontColor,
    basicShadow:colorVariant.lightModeShadow,
    buttonShadow:colorVariant.ligthModeButtonShadow,
    buttonBackgroundColor:colorVariant.darkModeSubBg,
    buttonFontColor:colorVariant.darkModeFontColor,
}

export const dark:ModeBase = {
    backgroundColor: colorVariant.darkModeBg,
    subBackgroundColor:colorVariant.darkModeSubBg,
    fontColor: colorVariant.darkModeFontColor,
    subFontColor:colorVariant.darkModeSubFontColor,
    basicShadow:colorVariant.darkModeShadow,
    buttonShadow:colorVariant.darkModeButtonShadow,
    buttonBackgroundColor:colorVariant.lightModeSubBg,
    buttonFontColor:colorVariant.lightModeFontColor,
}

const theme = {
    light,
    dark,
    colorVariant
}

export default theme;