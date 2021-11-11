import React, {useEffect} from 'react';
import PropTypes from "prop-types";

import Header from "@qex/components/header";
import TextInput from "@qex/components/text-input";
import MessageList from "@qex/components/message-list";

import mapCommonStates from "@qex/utils/store";

import { ChatWrapper } from "./ChatContainer.styles";

const ChatContainer = (props) => {
    const { createWebSocketConnection, sendMessage, addChatMessage, loadChatHistory } = props;

    useEffect( () => {
        loadChatHistory();
        createWebSocketConnection();
    }, [createWebSocketConnection, loadChatHistory]);

    return (
        <ChatWrapper>
            <Header />
            <MessageList />
            <TextInput sendMessage={sendMessage} addChatMessage={addChatMessage} />
        </ChatWrapper>
    );
};

ChatContainer.propTypes = {
    /** creating connection with websocket **/
    createWebSocketConnection: PropTypes.func,
    /** send message to websocket **/
    sendMessage: PropTypes.func,
    /** load history from indexedDB **/
    loadChatHistory: PropTypes.func,
    /** create outgoing message and save to indexedDB **/
    addChatMessage: PropTypes.func,
}

export default mapCommonStates(ChatContainer);