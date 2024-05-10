import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import useUpdateTodoController from '../view-controllers/useUpdateTodoController';
import { TodoItemType } from '../types/genericTypes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components';

interface UpdateTodoScreenProps {
  route: { params: { todoItem: TodoItemType } };
}

const UpdateTodoScreen = (props: UpdateTodoScreenProps) => {
  const { todoItem } = props.route.params;

  const { todoText, onChangeText, onClickDelete, onClickUpdate, onGoBack } =
    useUpdateTodoController(todoItem);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <Header
          onPress={() => onGoBack()}
          title='Update TODO' />
        <View style={styles.inputView}>
          <TextInput
            value={todoText}
            style={styles.input}
            onChangeText={(text: string) => onChangeText(text)}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              onClickUpdate();
            }}>
            <Text style={styles.btnText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.btn, backgroundColor: '#D00410' }}
            onPress={() => {
              onClickDelete();
            }}>
            <Text style={styles.btnText}>Delete</Text>
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
    alignItems: 'center',
  },
  btn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#0476D0',
    alignItems: 'center',
    marginVertical: 8,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 8,
    color: '#fff'
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

export default UpdateTodoScreen;