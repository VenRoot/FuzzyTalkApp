/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import Main from './src/Pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast, {ToastConfig, ToastConfigParams, ToastPosition, ToastShowParams, ToastType} from 'react-native-toast-message';
import ChatWindow from './src/Pages/ChatWindow';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ExampleGiftedChat from "./src/examples/giftedChat/chat";
import OwnGiftedChat from "./src/Components/Chat/giftedChat/GiftedChat";

const Stack = createNativeStackNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function OldCode({isDarkMode, backgroundStyle}:{isDarkMode: boolean, backgroundStyle: any}) 
{
  return (
    <>
    <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
      </>
  )
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        {/* We can either pass the component via the component prop */}
        <Stack.Screen name="Main" component={Main} options={{animation: "fade", headerShown: false}} />
        {/* Or we can pass it as a children to specify our own props if needed */}
        {/* <Stack.Screen name="ChatWindow" options={{ animation: "fade", headerShown: false }}>
          {(props) => <ChatWindow navigationProps={props} name={""} lastSeen={props.navigation.lastSeen}/>}
        </Stack.Screen> */}
        <Stack.Screen name="ChatWindow" component={ChatWindow} options={{animation: "fade", headerShown: false}} />
        <Stack.Screen name="ExampleTest" options={{ animation: "fade", headerShown: false }}>
          {(props) => <OwnGiftedChat/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    <Toast config={toastConfig} />
    </SafeAreaProvider>
    </>
    
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


const toastConfig: ToastConfig = {
  //@ts-ignore
  message: ({ position, type, isVisible, text1, text2, show, hide, onPress, props }: { position: ToastPosition, type: ToastType, isVisible: boolean, text1: string, text2: string, show: (params: ToastShowParams) => void, hide: (params: ToastShowParams) => void, onPress: () => void, props: any}) => (
    <View>
      {/* 
      Profile Picture on the left, Name on the top, Message below
      */}
    </View>
  )
  
}


//    position: ToastPosition;
// type: ToastType;
// isVisible: boolean;
// text1?: string;
// text2?: string;
// show: (params: ToastShowParams) => void;
// hide: (params: ToastHideParams) => void;
// onPress: () => void;
// props: Props;

export default App;
