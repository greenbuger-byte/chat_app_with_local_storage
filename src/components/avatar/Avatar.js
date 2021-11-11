import React from 'react';
import PropTypes from "prop-types"
import { AvatarImage, AvatarWrapper } from "./Avatar.styles";

const Avatar = (props) => {
    const { size, image } = props;
    return (
        <AvatarWrapper size={size} {...props}>
            <AvatarImage size={size} src={image}/>
        </AvatarWrapper>
    );
};

Avatar.propTypes = {
    /** size of avatar **/
    size: PropTypes.number,
    /** file of avatar **/
    image: PropTypes.string
}

export default Avatar;