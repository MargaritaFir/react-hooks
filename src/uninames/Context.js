import React, {useContext} from 'react';

const JediContext = React.createContext();

const Display = () => {
    const value = useContext(JediContext);
return <div>{value}, I am your Father</div>
}

const MyContext = () => {
    return (
        <JediContext.Provider value={'Luke'}>
            <Display/>
        </JediContext.Provider>
    )
}

export default  MyContext;