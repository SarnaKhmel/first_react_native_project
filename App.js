import React from 'react';
import {Container, Content} from 'native-base';
import {StyleSheet, Text, View} from 'react-native';
import AppFooter from './components/AppFooter.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {MODES} from './constants';

const initialState = {
    mode: MODES.ARTICLES
};

const store = createStore(reducers, initialState);

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
});

const App = () => (
    <Container>
        <Content>
            <View style={styles.container}>
                <Text>
                    Lorem ipsum...
                </Text>
            </View>
        </Content>
        <AppFooter/>
    </Container>
);
export default App;