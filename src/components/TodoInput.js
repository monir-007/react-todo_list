import React, {Component} from 'react';

export default class TodoInput extends Component {
  render(){
    const {item, handleChange, handleSubmit, editItem} = this.props;

    return (
      <div className="card card-body my-3">
        <form action="" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-info text-white">
                <i class="far fa-clipboard"></i>
              </div>
            </div>
            <input type="text" className="form-control text-capitalize" placeholder="add item" value={item} onChange={handleChange}/>
          </div>
          <button type="submit" disabled={item?false:true} className={editItem?"btn btn-block btn-dark mt-3 text-capitalize":"btn btn-block btn-warning mt-3 text-uppercase"}>{editItem? "edit item" : "add item"}</button>
        </form>
      </div>
    );
  }
}
