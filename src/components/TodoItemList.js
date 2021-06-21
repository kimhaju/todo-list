import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  //->보여주는 리스트가 동적인 경우에는 클래스 컴포넌트로 작성하는 것이
  // 최적화 하는데 좋다.
  shouldComponentUpdate(nextProps, nextState){
    return this.props.todos !== nextProps.todos;
  }
  
  render() {
    const {todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(
      ({id, text, checked})=>(
        <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
        />
      )
    );
    return (
      <div>
        {todoList}
      </div>
    );
  }
}
export default TodoItemList;