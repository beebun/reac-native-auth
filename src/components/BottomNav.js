import React from 'react';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomNav = (props) => {
  return (<BottomNavigation
    labelColor="#333"
    rippleColor="white"
    backgroundColor="#efefef"
    onTabChange={(newTabIndex) => props.onTabChange(newTabIndex)}
    style={{ 
      width: '100%',
      height: 56, 
      elevation: 8,
      left: 0, 
      bottom: 0, 
      right: 0 }}
  >
  <Tab label="meReport" />
  <Tab label="Order Now" />
  <Tab label="Settings" />
</BottomNavigation>);
};

export default BottomNav;
