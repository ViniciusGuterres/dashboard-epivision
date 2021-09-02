import React from 'react';

// styled components
import Modules from './MenuNav.js';
const {Aside, Li, Ul} = Modules;

export default function MenuNav(props) {
    return (
        <Aside>
            <nav>

                <Ul>
                    <Li>test</Li>
                    <Li>test</Li>
                    <Li>test</Li>
                    <Li>test</Li>
                    <Li>test</Li>
                </Ul>

            </nav>
        </Aside>
    )
}

