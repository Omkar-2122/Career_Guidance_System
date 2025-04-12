import { createContext, useContext } from 'react';

export const userDataContext = createContext({
    dreamRole: '',
    targetYear: '',
    resume: '',
    setDreamRole: (dreamRole: string) => {},
    setTargetYear: (targetYear: string) => {},
});

export const ThemeProvider = userDataContext.Provider;

export default function userData() {
    return useContext(userDataContext);
}

