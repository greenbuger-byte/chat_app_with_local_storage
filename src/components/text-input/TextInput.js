import React, {useState} from 'react';
import PropTypes from "prop-types";
import { v4 } from 'uuid';

import Send from "@qex/components/icons/send";

import { SendButton, StyledTextArea, TextInputWrapper } from "./TextInput.styles";

const TextInput = (props) => {
    const { sendMessage, addChatMessage } = props;
    const [ message, setMessage ] = useState("");

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            sendMessageHandler();
            event.preventDefault();
        }
    }

    const sendMessageHandler = () => {
        sendMessage(message);
        addChatMessage({
            id: v4(),
            message,
            type: 'outgoing',
            avatar: null,
            created: Date.now(),
            username: 'User',
        });
        setMessage('');
    }

    return (
        <TextInputWrapper>
            <StyledTextArea
                onKeyDown={handleKeyDown}
                onChange={(ev)=>setMessage(ev.target.value)}
                value={message}
                placeholder="Enter text message..."
            />
            <SendButton
                disabled={!message.length}
                onClick={sendMessageHandler}
            >
                <Send active={message.length} />
            </SendButton>
        </TextInputWrapper>
    );
};

TextInput.propTypes = {
    /** add outgoing message to state **/
    addChatMessage: PropTypes.func,
    /** send message to websocket **/
    sendMessage: PropTypes.func,
}

export default TextInput;