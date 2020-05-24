import React from 'react';

const PlayerHelper = (props) => {
    return (
        <div
            className="ui stackable doubling two column"
            style={{ width: '-webkit-fill-available' }}
        >
            <div className="ui segment column" style={{ height: '20em' }}>
                <div className="ui active inverted dimmer">{props.content}</div>
            </div>
        </div>
    );
};

export default PlayerHelper;
