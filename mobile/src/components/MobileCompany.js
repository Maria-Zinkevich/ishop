import React from 'react';

import MobileClient from './MobileClient';
import { deleteClient, editClient } from './events';

class MobileCompany extends React.PureComponent {
  state = {
    clients: [
      { id: 1, surname: 'Smith', name: 'John', balance: 1000, isActive: true },
      { id: 2, surname: 'Johnson', name: 'John', balance: -15, isActive: false },
      { id: 3, surname: 'Williams', name: 'John', balance: 1500, isActive: true },
    ],
    filter: 'all',
  };

  componentDidMount = () => {
    deleteClient.addListener('deleteClient', this.handleDeleteClient);
    editClient.addListener('editClient', this.handleEditClient);
  }

  componentWillUnmount = () => {
    deleteClient.removeListener('deleteClient', this.handleDeleteClient);
    editClient.removeListener('editClient', this.handleEditClient);
  }

  handleFilterChange = (filter) => {
    this.setState({ filter });
  }

  handleAddClient = () => {
    const { clients } = this.state;
    const newClient = { id: clients.length + 1, surname: window.prompt("surname"), name: window.prompt("name"), balance:window.prompt("balance"), isActive: false};
    this.setState({ clients: [...clients, newClient] });
  }

  handleDeleteClient = (id) => {
    let newClients = this.state.clients.filter((client) => client.id !== id)

    this.setState({ clients: newClients })
  }

  handleEditClient = (id) => {

  }
  handleValueChange = (newValue) => {
    console.log('Новое значение:', newValue);
  }
  render() {
    console.log("MobileCompany render");
    const { clients, filter } = this.state;
    return (
      <>
        <div>
            <button onClick={this.handleAddClient}>Add Client</button>
            <button onClick={() => this.handleFilterChange('all')}>All</button>
            <button onClick={() => this.handleFilterChange('active')} >Active</button>
            <button onClick={() => this.handleFilterChange('blocked')}>Blocked</button>
        </div>
        
        <table>
          <thead> 
            <tr>
                <th>Surname</th>
                <th>Name</th>
                <th>Balance</th>
                <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {clients.filter((client) => {
              if (filter === 'all') return true;
              if (filter === 'active') return client.isActive;
              if (filter === 'blocked') return !client.isActive;}).map((client, index) => <MobileClient
                  id={client.id} 
                  key={client.id} 
                  client={client}
                />
            )}
          </tbody>
        </table>
      </>
    )
  }
}

export default MobileCompany;