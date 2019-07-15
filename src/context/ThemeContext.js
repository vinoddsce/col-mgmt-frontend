import React from 'react';
import lightLogo from './../assets/medium_light.png';
import darkLogo from './../assets/medium_dark.png';
export const themeConfig = {
    light: {
        headerBg: '#F7B30C',
        fontColor: 'black',
        bodybg: 'white',
        logo: lightLogo,
        display: 'inherit',
        width: '100%',
        height: '60px'
    },
    dark: {
        headerBg: '#3c3c3c',
        fontColor: 'white',
        bodybg: 'black',
        logo: darkLogo,
        display: 'inherit',
        width: '100%',
        height: '60px'
    }
};
const ThemeContext = React.createContext(themeConfig.light);
export default ThemeContext;