import React from 'react';

import { HeaderContent, HeaderWrapper, StyledAvatar } from "./Header.styles";
import avatar from "@qex/components/icons/avatar.png";

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContent>
                <StyledAvatar size={43} image={avatar} /> Ilon Mask
            </HeaderContent>
        </HeaderWrapper>
    );
};

export default Header;