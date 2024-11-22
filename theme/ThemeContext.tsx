// ThemeContext.tsx
import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { Theme, lightTheme, darkTheme } from './themes';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => setIsDark(prevIsDark => !prevIsDark);

    const theme = useMemo(() => isDark ? darkTheme : lightTheme, [isDark]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
