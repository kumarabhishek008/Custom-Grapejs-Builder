import React from 'react';
import Pagebuilder from '../PageBuilder';

const AppContainer = (props) => {
    return (
        <div>
            <Pagebuilder {...props}/>
            {/* <Routes/> */}
        </div>
    )
}

export default AppContainer
