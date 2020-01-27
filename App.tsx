/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import { Container, Header, Tab, Tabs,Body, Title,Root} from 'native-base';
import KeyGenerator from './src/generatePage/generatePage';
import SavedPage from './src/saved/saved';

const App = () => {
  return (
    <Root>
      <Container>
       <Header hasTabs>  
          <Body>
            <Title> InfoSys </Title>
          </Body>    
        </Header>
        <Tabs>
          <Tab heading="Generate">
            <KeyGenerator/>
          </Tab>
          <Tab heading="Saved" >        
            <SavedPage/>
          </Tab>
        </Tabs>
       </Container>
    </Root>
     
  );
};

export default App;
