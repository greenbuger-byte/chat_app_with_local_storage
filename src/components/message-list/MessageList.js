import React, { useEffect, useRef } from 'react';
import PropTypes from "prop-types";

import mapCommonStates from "@qex/utils/store";
import ChatMessage from "@qex/components/chat-message";

import { LoadingCover, MessageListWrapper } from "./MessageList.styles";

const MessageList = (props) => {
    const { chatState:{messages, isLoading} } = props;
    const messagesAnchorRef = useRef();

    useEffect( ()=> {
        messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [messages]);

    const renderMessages = (messages && messages.map( message => <ChatMessage key={message.id} message={message} />));

    const renderLoading = (isLoading && <LoadingCover>LOADING ...</LoadingCover>);

    return (
        <MessageListWrapper>
            {renderLoading}
            {renderMessages}
            <div ref={messagesAnchorRef} />
        </MessageListWrapper>
    );
};

MessageList.propTypes = {
    /** chat state **/
    chatState: PropTypes.shape({
        /** chat messages **/
        messages: PropTypes.array,
        /** loading status **/
        isLoading: PropTypes.bool,
    })
}

export default mapCommonStates(MessageList);