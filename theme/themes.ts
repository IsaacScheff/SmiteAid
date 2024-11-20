export type Theme = {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    error: string;
    surface: string;
};

export const lightTheme: Theme = {
    background: '#FAFAFA',
    text: '#212121',        
    primary: '#6200EE',     
    secondary: '#018786',  
    error: '#D32F2F',       
    surface: '#FFFFFF',     
};


export const darkTheme: Theme = {
    background: '#1e1e1e',
    text: '#f9f9f9',
    primary: '#BB86FC',
    secondary: '#03DAC6',
    error: '#CF6679',
    surface: '#333333',  
};
