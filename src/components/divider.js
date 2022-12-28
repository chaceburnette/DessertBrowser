import React from 'react';
import { View } from 'react-native';
import { styles as s } from 'react-native-style-tachyons';

const dividerBorderStyle = { borderColor: '#bbbbbb' };

const Divider = () => <View style={[s.bt, s.mt3, dividerBorderStyle]} />;

export default Divider;
