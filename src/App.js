import { Global } from "@qex/theme/global";
import Chat from "@qex/components/chat-container";
import { Provider } from "react-redux";
import createStore from "@qex/store";

const  App = () => {
  const store = createStore();
  return (
    <Provider store={store}>
     <Global />
     <Chat />
    </Provider>
  );
}

export default App;
