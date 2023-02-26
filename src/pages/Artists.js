import React from 'react';
import Artist from '../components/Artist';
import Navigation from '../components/Navigation';
import kelbail from '../assets/img/Kelbail.png'
import variables from '../styles/_settings.scss';

const Artists = () => {
    return (
        <div className='waves'>
            <Navigation />
            <br />
            <br />
            <br />
            <Artist name="KEKEKEKELBAIL" photo={kelbail} color={variables.newsColor}/>

        </div>
    );
};

export default Artists;