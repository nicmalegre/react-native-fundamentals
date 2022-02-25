import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  StyleSheet,
  SectionList,
  TouchableWithoutFeedback,
} from 'react-native';

import {SECTIONS} from '../constants';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    padding: 16,
    backgroundColor: '#ececec',
  },
  container: {
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#ececec',
  },
  title: {
    fontSize: 24,
  },
});

const Item = ({title}) => (
  <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableWithoutFeedback>
);

export const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <SectionList
          sections={SECTIONS}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
          renderItem={({item}) => <Item title={item} />}
          st
        />
      </View>
    </SafeAreaView>
  );
};
