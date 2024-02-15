import { createContext } from "react";

export const Contecxt = createContext();

const AppContext = ({children}) => {
    return <Contecxt.Provider>{children}</Contecxt.Provider>
};
export default AppContext;