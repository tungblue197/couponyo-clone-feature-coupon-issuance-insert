import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore, StateType } from '@hooks';
import AuthProvider from '@base/AuthProvider';
import BaseLayout from '@base/layout';
import {ThemeProvider} from "@mui/styles";
import {theme} from "@styles/theme";

interface Props extends AppProps {
  pageProps: {
    reduxState: StateType;
  };
}
const App = ({ Component, pageProps }: Props): JSX.Element => {
  const store = useStore(pageProps.reduxState);

  return (
    <Provider store={store}>
      <PersistGate persistor={store.__PERSISTOR as Persistor} loading={null}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
          </ThemeProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
