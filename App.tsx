import {StatusBar, StyleSheet, View} from 'react-native';
import {BLACK, WHITE} from './src/Color';
import SignInScreen from './src/screens/SignInScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={BLACK} />
      <SignInScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
});

export default App;
