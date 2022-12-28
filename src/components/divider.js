import React from 'react';
import { View } from 'react-native';
import { styles as s } from 'react-native-style-tachyons';

const dividerBorderStyle = { borderColor: '#bbbbbb' };

const Divider = () => <View style={[s.bt, dividerBorderStyle]} />;

export default Divider;
