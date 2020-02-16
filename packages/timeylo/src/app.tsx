import React, { FunctionComponent } from 'react';
import { Text, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

interface Props {}

const Container = styled.View``;

const App: FunctionComponent<Props> = () => {
  return (
    <Container>
      <SafeAreaView>
        <Text>Hello, world.</Text>
      </SafeAreaView>
    </Container>
  );
};

export default App;
