import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { TodoItem } from '../components';
import useHomeTodoController from '../view-controllers/useHomeTodoController';
import { TodoItemType } from '../types/genericTypes';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeTodoScreen = () => {
  const { todos, onPressTodoItem, onPressCreate } = useHomeTodoController();

  const renderTodoList = ({ item }: { item: TodoItemType }) => {
    return (
      <TodoItem title={item.title} onPress={() => onPressTodoItem(item)} />
    );
  };

  return (
    <SafeAreaView style={ styles.container}>
      <View style={styles.background}>
        <View style={styles.headingView}>
          <Text style={styles.heading}>Todo</Text>
          <Pressable style={styles.btn} onPress={onPressCreate}>
            <Text style={styles.btnText}>Create</Text>
          </Pressable>
        </View>
        <View style={styles.todoList}>
          {todos.length === 0 && <View style={styles.emptyContainer}><Text style={{fontSize: 16}}>No Todo</Text></View>}
          <FlatList
            keyExtractor={item => item.id}
            data={todos}
            renderItem={renderTodoList}
          />
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
  },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#0476D0',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 8,
    color:'#fff'
  },
  todoList: {
    marginVertical: 24,
  },
  emptyContainer:{
    justifyContent:'center',
    alignItems:'center',
    height:'100%'
  }
});

export default HomeTodoScreen;