import React from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';
import {MODES} from "../constants";

const AppFooter = ({mode = MODES.ARTICLES}) => (
    <Footer>
        <FooterTab>
            <Button active = {mode === MODES.ARTICLES}>
                <Text>Статьи</Text>
            </Button>
            <Button active = {mode === MODES.PODCAST}>
                <Text>Подкасты</Text>
            </Button>
        </FooterTab>
    </Footer>
);
export default AppFooter;