import PropTypes from "prop-types";

import {
    ChatMessageContent,
    ChatMessageText, ChatMessageTime,
    ChatMessageUsername,
    ChatMessageWrapper,
    MessageAvatar
} from "./ChatMessage.styles";

const ChatMessage = (props) => {
    const { message } = props;

    const formatAMPM = (date) => {
        let hours = new Date(date).getHours();
        let minutes = new Date(date).getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ':' + `0+${minutes}`.slice(-2) + ' ' + ampm;
    }

    const renderAvatar = (message.type === 'incoming' && <MessageAvatar size={60} image={message.avatar} />)
    const renderTitle = (message.type==='incoming' && <ChatMessageUsername>{message.username}</ChatMessageUsername>);

    return (
        <ChatMessageWrapper type={message.type}>
            {renderAvatar}
            <ChatMessageContent type={message.type}>
                {renderTitle}
                <ChatMessageText>
                    {message.message}
                 <ChatMessageTime type={message.type}>{formatAMPM(message.created)}</ChatMessageTime>
            </ChatMessageText>
            </ChatMessageContent>
        </ChatMessageWrapper>
    );
};

ChatMessage.propTypes = {
    /** message from socket **/
    message: PropTypes.shape({
        id: PropTypes.string,
        message: PropTypes.string,
        username: PropTypes.string,
        avatar: PropTypes.string,
        type: PropTypes.oneOf(["outgoing", "incoming"]),
        created: PropTypes.number,
    })
}

export default ChatMessage;