import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ConnectedIntlProvider from "../../components/connectedIntlProvider";
import { persistor, store } from "../../store/config";
import MainRouter from "../routes/MainRouter";

import theme from "../../styles/theme";

const App = () => (
  <MuiThemeProvider theme={createMuiTheme(theme)}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedIntlProvider>
          <MainRouter />
        </ConnectedIntlProvider>
      </PersistGate>
    </Provider>
  </MuiThemeProvider>
);

export default App;
