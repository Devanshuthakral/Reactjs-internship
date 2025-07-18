import { createContext, useContext} from "react";

export const ThemeContext = createContext({
    darkTheme : true, // variable
    setDarkTheme: () => {}, //functions
});
                
export const useTheme = () => {
    return useContext(ThemeContext);
}
export const ThemeProvider = ThemeContext.Provider;