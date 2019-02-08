import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Counter from "../../components/counter/Counter";
import { persistor, store } from "../../store/config";
// import ConnectedIntlProvider from "../ConnectedIntlProvider";
// import AppRouter from "../../routes/AppRouter";

// import { MuiThemeProvider } from '@material-ui/core'
// import theme from '../../styles/theme'

const App = () => (
  // <MuiThemeProvider theme={theme}>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <ConnectedIntlProvider> */}
      {/* <AppRouter /> */}
      {/* </ConnectedIntlProvider> */}
      <Counter />
    </PersistGate>
  </Provider>
  // </MuiThemeProvider>
);

export default App;
