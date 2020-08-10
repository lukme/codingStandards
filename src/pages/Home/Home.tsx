import React from 'react';
import * as RN from 'react-native';

import styles from './Home.style';

const Home = () => {
  const basicText =
    'Quickly incubate stand-alone methods of empowerment through accurate metrics.';
  return (
    <RN.View style={styles.container}>
      <RN.Text
        style={styles.basicText}
        testID="basic-text">
        { basicText }
      </RN.Text>
    </RN.View>
  );
};

export default Home;