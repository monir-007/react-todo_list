import React, {Component} from 'react';
import Item from './TodoItem';

export default class TodoList extends Component {
  render(){
    return (
      <section>
        <h4> todo list</h4>
        <Item />
      </section>

    );
  }
}
