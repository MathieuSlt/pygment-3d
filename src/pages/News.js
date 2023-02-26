import React from 'react';
import Navigation from '../components/Navigation';

const News = () => {
    return (
        <div className='waves news'>
            <Navigation />
            <br />
            <br />
            <br />
            <h1>LAST NEWS</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <center>
                <p className='videowrapper'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/yvuq1dqI8q8" title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </p>
            </center>
        </div>
    );
};

export default News;