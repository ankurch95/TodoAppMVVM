import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import useUpdateTodoController from '../view-controllers/useUpdateTodoController';
import { TodoItemType } from '../types/genericTypes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header } from '../components';

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
            multiline={true}
            numberOfLines={5}
            onChangeText={(text: string) => onChangeText(text)}
          />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1,marginRight:5 }}>
              <Button
                backgroundColor='#004000'
                title='Update'
                onPress={() => onClickUpdate()} />
            </View>
            <View style={{ flex: 1,marginLeft:5 }}>
              <Button
                backgroundColor='#D00410'
                title='Delete'
                onPress={() => onClickDelete()} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  background: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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