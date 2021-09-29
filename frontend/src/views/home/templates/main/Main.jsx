import React from 'react';

export default function Main(props) {
    return (
        <main style={{
            background: '#F8F9FC',
            gridArea: 'main',
            minHeight: '86vh',
            padding: '30px'
        }}>
            {props.children}
        </main>
    )
};
