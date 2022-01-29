import React from 'react';
import PageBuilder from '../PageBuilder';
import GrapesjsMain from '../../components/GrapesjsMain';
// import './style.scss';

const AppContainer = (props) => {
    return (
        <div>
            <GrapesjsMain {...props}/>
        </div>
    )
}

export default AppContainer
