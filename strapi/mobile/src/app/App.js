import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/Store';
import Authentication from './components/Authentication';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <PaperProvider>
                    <Authentication />
                </PaperProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;