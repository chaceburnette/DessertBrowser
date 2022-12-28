import React from 'react';
import { Text } from 'react-native';
import { styles as s } from 'react-native-style-tachyons';

const colorStyle = { color: '#666' };

const SectionTitle = ({ children }) => {
  return <Text style={[s.f5, s.mv3, colorStyle]}>{children}</Text>;
};

export default React.memo(SectionTitle);
