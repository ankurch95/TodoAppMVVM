import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import useNewTodoController from '../view-controllers/useNewTodoController';
import { SafeAreaView } from 'react-native-safe-area-context';
const NewTodoScreen = () => {
  const { todoText, onChangeText, onClickCreate,onGoBack } = useNewTodoController();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.headingView}>
          <Text
            style={{ ...styles.heading, fontSize: 15 }}
            onPress={() => {
              onGoBack();
            }}>Back</Text>
          <Text style={styles.heading}>Todo</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            value={todoText}
            style={styles.input}
            placeholder="Enter text ..."
            onChangeText={(text: string) => onChangeText(text)}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              onClickCreate();
            }}>
            <Text style={styles.btnText}>Create</Text>
          </TouchableOpacity>
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
  btn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#0476D0',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 8,
    color:'#fff'
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