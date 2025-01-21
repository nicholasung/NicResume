import React from 'react';

interface BoardsProps {
    // Define your component props here if any
}

export const Boards: React.FC<BoardsProps> = () => {
    // Component logic goes here

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>
            Board's Boards
            </h3> 
            <b>Self Employed</b><br/>
            <p style={{fontSize: '14px'}}>Richmond, BC | June 2020 - March 2022</p>
            <hr style={{ width: '100%', border: '1px solid white' }} />
            <p style={{ maxWidth: '400px', textAlign: 'center' }}>
            Founded and operated a small business selling and installing controller modifications that included custom designed PCB's, 3D printed components and simple reverse engineering.
            </p>
        </div>
    );
};