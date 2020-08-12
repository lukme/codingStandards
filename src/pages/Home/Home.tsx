import React from 'react';
import * as RN from 'react-native';

import styles from './Home.style';

const Home = () => {
  const basicText =
    'Quickly incubate stand-alone methods of empowerment through accurate metrics.';

  const test = { testValue: 123 };

  return (
    <RN.View style={styles.container}>
      <RN.Text
        style={styles.basicText}
        testID="basic-text">
        {basicText}
        {test.testValue}
      </RN.Text>
    </RN.View>
  );
};

export default Home;
