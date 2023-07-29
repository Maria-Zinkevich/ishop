import React from 'react';
import { deleteClient } from './events'
class MobileClient extends React.PureComponent {

  delete = (id) => {
    deleteClient.emit('deleteClient', id)
  };

  render() {
    const { client } = this.props;
    console.log("MobileClient render");
    
    return (
        <tr >
            <td>{client.surname}</td>
            <td>{client.name}</td>
            <td>{client.balance}</td>
            <td>{client.isActive === true ? 'active' : 'blocked'}</td>
            <td><button>Edit</button></td>
            <td><button onClick={()=>{this.delete(client.id)}}>Delete</button></td>
        </tr>
    );

  }

}

export default MobileClient;