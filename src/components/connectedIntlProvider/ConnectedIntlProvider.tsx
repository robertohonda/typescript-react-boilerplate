import React from "react";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import { messages } from "../../translations/config";

const ConnectedIntlProvider = ({ children, language }: any) => (
  <IntlProvider locale={language} messages={messages[language]}>
    {children}
  </IntlProvider>
);

const mapStateToProps = (state: any) => ({
  language: state._language,
});

export default connect(mapStateToProps)(ConnectedIntlProvider);
