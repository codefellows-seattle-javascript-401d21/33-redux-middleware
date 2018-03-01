import React from 'react';

class Modal extends React.Component{
  constructor(props){
    super(props)
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(){
    this.props.onClose();
  }
  render(){
    return (
      <div>
      <section className="modal-display">
      <span className="modal-close" onClick={this.handleClose}>x</span>
        {this.props.children}
      </section>
      </div>
    );
  }
}

export default Modal