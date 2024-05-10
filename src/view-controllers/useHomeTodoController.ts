import {useNavigation} from '@react-navigation/native';
import {TodoItemType} from '../types/genericTypes';
import useTodoViewModel from '../view-models/useTodoViewModel';
import {screenMap} from '../navigation/screenMap';

const useHomeTodoController = () => {
  const navigation = useNavigation();
  const {todos, fetchingTodos} = useTodoViewModel();

  const onPressTodoItem = (todoItem: TodoItemType) => {
    navigation.navigate(screenMap.UpdateTodo, {todoItem});
  };

  const onPressCreate = () => {
    navigation.navigate(screenMap.NewTodo);
  };

  return {
    todos,
    fetchingTodos,
    onPressTodoItem,
    onPressCreate,
  };
};

export default useHomeTodoController;