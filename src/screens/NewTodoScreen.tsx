import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import useNewTodoController from '../view-controllers/useNewTodoController';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header } from '../components';
const NewTodoScreen = () => {
  const { todoText, onChangeText, onClickCreate, onGoBack } = useNewTodoController();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <Header
          onPress={() => onGoBack()}
          title='New TODO' />

        <View style={styles.inputView}>
          <TextInput
            value={todoText}
            style={styles.input}
            multiline={true}
            numberOfLines={5}
            placeholder="Enter text ..."
            onChangeText={(text: string) => onChangeText(text)}
          />
          <Button
            backgroundColor='#0476D0'
            title='Create'
            onPress={() => onClickCreate()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  background: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  heading: {
    fontSize: 28,
    fontWeight: '500',
    marginLeft: 20,
  },
  headingView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputView: {
    marginVertical: 24,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    borderRadius: 8,
    marginVertical: 8,
  },
});

export default NewTodoScreen;