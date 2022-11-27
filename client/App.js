import { useState, useEffect, useCallback } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppIsLoaded(true);
    }, 3000)
  }, []);

  const onLayout = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, [appIsLoaded]);

  if (!appIsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider
      style={styles.container}
      onLayout={onLayout}
    >
      <SafeAreaView>
        <View>
          <Text>Hi!</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
  },
});
