import React from 'react';
import { deleteClient, editClient } from './events'
class MobileClient extends React.PureComponent {
  constructor(props) {
    super(props);
    this.surnameRef = React.createRef()
    this.state = {
      isEditing: false,
      value: props.client.surname
    };
  }

  delete = (id) => {
    deleteClient.emit('deleteClient', id)
  };
  edit = (id) => {
    editClient.emit('editClient', id)
    this.setState({ isEditing: true })
    this.surnameRef.current.focus();

  }
  handleChange = (e) => {
    if (this.state.isEditing) {
      this.setState({ value: this.surnameRef.current.value });
    }
  }
  finishEditing = () => {
    this.setState({ isEditing: false });
  }
  render() {
    const { client } = this.props;
    const { isEditing, value } = this.state;
    console.log("MobileClient render",client.surname);
    
    return (
        <tr >
            <td><input type='text' value={value} ref={this.surnameRef} onChange={this.handleChange}  onBlur={this.finishEditing} style={{border: `solid 1px grey`}}/></td>
            <td>{client.name}</td>
            <td>{client.balance}</td>
            <td>{client.isActive === true ? 'active' : 'blocked'}</td>
            <td><button onClick={()=>{this.edit(client.id)}}>Edit</button></td>
            <td><button onClick={()=>{this.delete(client.id)}}>Delete</button></td>
        </tr>
    );

  }

}

export default MobileClient;