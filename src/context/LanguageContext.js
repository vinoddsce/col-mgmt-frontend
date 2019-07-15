import React from 'react';
export const labels = {
    en: {
        themeSelectLabel: 'Toggle theme',
        langSelectLabel: 'Select language',
        body: 'Hey, right now you are in demo page of React context API.'
    },
    fr: {
        themeSelectLabel: 'Toggle theme',
        langSelectLabel: 'Choisir la langue',
        body: "Hé, maintenant vous êtes sur la page de démonstration de l'API de contexte de réaction."
    },
    sp: {
        themeSelectLabel: 'Alternar tema',
        langSelectLabel: 'Seleccione el idioma',
        body: 'Oye, ahora mismo estás en la página de demostración de la API de contexto de React.'
    },
    gr: {
        themeSelectLabel: 'Thema umschalten',
        langSelectLabel: 'Sprache auswählen',
        body: 'Hey, im Moment bist du auf der Demo-Seite von React Context API.'
    }
}
const LangContext = React.createContext(labels.fr);
export default LangContext;