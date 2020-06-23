import React, {Component} from 'react';
import {v4 as uuid} from 'uuid'
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

//Showing VPP
class App extends Component {
  state = {
    items: [{ id: 1, title: "Morning"}, { id: 2, title: "Breakfast"}],
    id: uuid(),
    item: "",
    editItem: false
  };
  
  handleChange = (e) =>{
    console.log('handle Change');
  };
  handleSubmit = (e) =>{
    console.log('handle Submit');
  };
  clearList = () =>{
    console.log('Clear List');
  };
  handleDelete = id => {
    console.log(`handle Delete ${id}`);
  };
  handleEdit = id => {
    console.log(`handle Edit ${id}`);
  };

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoList
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoInput
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
