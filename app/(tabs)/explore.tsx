import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Button, Appearance } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { changeTheme } from '../redux/action-creators';

import { ThemeActionTypes } from '../redux/actions/actionTypes';
import { Dispatch } from '@reduxjs/toolkit';

export default function TabTwoScreen() {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch<Dispatch<ThemeActionTypes>>();

  const toggleTheme = () => {
    dispatch(changeTheme(theme === 'light' ? 'dark' : 'light'));
    
  };
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
     
      <Button title='Toggle' onPress={toggleTheme}></Button>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
