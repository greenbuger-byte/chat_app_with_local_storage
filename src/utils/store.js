import { connect } from "react-redux";

import {
    createWebSocketConnection,
    addChatMessage,
    sendMessage, loadChatHistory,
} from "@qex/store/chat";

function mapCommonStates (Component) {
    const mapGlobalStateToProps = (state) => ({
        chatState: state.chatSlice,
    });
    const mapGlobalDispatchToProps = (dispatch) => ({
        createWebSocketConnection: () => dispatch(createWebSocketConnection()),
        sendMessage: (payload) => dispatch(sendMessage(payload)),
        addChatMessage: (payload) => dispatch(addChatMessage(payload)),
        loadChatHistory: () => dispatch(loadChatHistory()),
    });

    return connect(mapGlobalStateToProps, mapGlobalDispatchToProps)(Component);
}

export default mapCommonStates;

