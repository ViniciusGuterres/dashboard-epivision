import React from 'react';

export default function Main(props) {
    return (
        <main style={{
            background: '#F8F9FC',
            gridArea: 'main',
            minHeight: '80vh',
            padding: '30px'
        }}>
            {props.children}
        </main>
    )
};
