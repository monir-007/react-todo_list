import React, {Component} from 'react';

export default class TodoInput extends Component {
  render(){
    const {item, handleChange, handleSubmit, editItem} = this.props;


    return (
      <div className="card card-body my-3">
        <form action="" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i class="far fa-clipboard"></i>
              </div>
            </div>
            <input type="text" className="form-control text-capitalize" placeholder="add item" value={item} onChange={handleChange}/>
          </div>
          <button className="btn btn-block btn-primary mt-3 text-uppercase">add item</button>
        </form>
        <h1>Hello from Todo Input</h1>
      </div>
    );
  }
}
