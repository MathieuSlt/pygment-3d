import React from 'react';

const Artist = (props) => {
    return (
        <div className='artist'>

            <div className="profile" >
                <img src={props.photo} alt="Profile Image" />
                <div className="info" style={{ background: props.color }}>
                    <h2>{props.name}</h2>
                    <p>Techno Acidulée</p>
                </div>

            </div>


        </div>
    );
};

export default Artist;