import React, { Component } from 'react';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';

import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    screen: 'create', // list, create
    contacts: []
  }

  componentDidMount () {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts: contacts });
    })
  }

  removeContact =  (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }));
    ContactsAPI.remove(contact);
  }

  render() {
    return (
      <div>
        {this.state.screen === 'list' && (
          <ListContacts
            onDeleteContact={this.removeContact}
            contacts={this.state.contacts}
            onNavigate={() => {
              this.setState({ screen: 'create' })
            }}
          />
        )}
        {this.state.screen === 'create' && (
          <CreateContact/>
        )}
        <a
          href='#create'
          onClick={this.props.onNavigate}
          className='add-contact'
        >Add Contact</a>
      </div>
    )
  }
}
export default App;
