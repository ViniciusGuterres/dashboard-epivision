import React from 'react';

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faSignOutAlt, faBell } from '@fortawesome/free-solid-svg-icons'

// Styled component
import styledComponents from './Header.js';
const {
    Head,
    HeaderContentLeft,
    CompanyName,
    SearchBar,
    Input,
    SearchIconContainer,
    HeaderContentRight,
    Pipe
} = styledComponents;

export default function Header(props) {

    return (
        <Head>
            <HeaderContentLeft>
                {/* Menu Icon */}
                <FontAwesomeIcon
                    style={{ color: '#000000', cursor: 'pointer', fontSize: '22px' }}
                    icon={faBars}
                />

                {/* Title company name */}
                <CompanyName>Epi Vision</CompanyName>

                {/* Search box */}
                <SearchBar>
                    <Input />

                    {/* Seach icon */}
                    <SearchIconContainer>
                        <FontAwesomeIcon
                            icon={faSearch}
                            style={{ fontSize: '13px', color: '#69707a' }}
                        />
                    </SearchIconContainer>
                </SearchBar>
            </HeaderContentLeft>

            {/* Right div */}
            <HeaderContentRight>
                {/* User logged */}
                <span style={{marginRight: '20px'}}>vinicius C.</span>


                {/* Notifications icon */}
                <div style={{marginRight: '10px'}}>
                <FontAwesomeIcon 
                    icon={faBell}
                    style={{cursor: 'pointer', color: 'rgb(105, 112, 122)', fontSize: '18px'}}
                />
                </div>

                <Pipe></Pipe>
                
                {/* Logout icon */}
                <FontAwesomeIcon
                    icon={faSignOutAlt}
                    style={{cursor: 'pointer', color: 'rgb(105, 112, 122)', fontSize: '20px', marginLeft: '20px'}}
                />
            </HeaderContentRight>
        </Head>
    )
}