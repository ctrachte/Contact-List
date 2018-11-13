import React from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';


// stateless functional component
// function ListContacts (props) {
//
//   return (
//     <ol className='contact-list'>
//       {props.contacts.map((contact, index) =>
//         <li key={contact.id} className='contact-list-item'>
//           <div className='contact-avatar' style={{
//             backgroundImage: `url(${contact.avatarURL})`
//           }}/>
//           <div className='contact-details'>
//             <p>{contact.name}</p>
//             <p>{contact.email}</p>
//           </div>
//           <button className='contact-remove' onClick={ () => props.onDeleteContact(contact) }>
//             Remove
//           </button>
//         </li>
//        )}
//     </ol>
//   )
// }

// THE BELOW EXAMPLE IS THE SAME FUNCTIONALITY but using class syntax

class ListContacts extends React.Component {
  static PropTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
     this.setState({
       query:query.trim()
     })
  }

  render () {

    const { contacts, onDeleteContact } = this.props
    const { query } = this.state

    let showingContacts
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingContacts = contacts.filter((contact) => match.test(contact.name))
    } else {
      showingContacts = contacts
    }

    showingContacts.sort(sortBy('name'))

    return (
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search Contacts'
            value={query}
            onChange={ (event) => this.updateQuery(event.target.value)}
          />
        </div>
        <ol className='contact-list'>
          {showingContacts.map((contact, index) =>
            <li key={contact.id} className='contact-list-item'>
              <div className='contact-avatar' style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}/>
              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button className='contact-remove' onClick={ () => onDeleteContact(contact) } >
                remove
              </button>
            </li>
           )}
        </ol>
      </div>

    )

  }
  // allows us to specify specific types passed into component, and if they are required or not
  // ListContacts.propTypes = {
  //   contacts: PropTypes.array.isRequired,
  //   onDeleteContact: PropTypes.func.isRequired
  // }
}

export default ListContacts;
