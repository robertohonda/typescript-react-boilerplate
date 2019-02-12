import React from "react";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import IStore from "../../store/interfaces";
import { messages } from "../../translations/config";

export interface IConnectedIntlProviderProps {
  children: React.ReactChild;
  language: string;
}

const ConnectedIntlProvider: React.SFC<IConnectedIntlProviderProps> = ({ language, children }) => (
  <IntlProvider locale={language} messages={messages[language]}>
    {children}
  </IntlProvider>
);

const mapStateToProps = (state: IStore) => ({
  language: state._language,
});

export default connect(mapStateToProps)(ConnectedIntlProvider);
