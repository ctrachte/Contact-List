import React from 'react';
import PropTypes from 'prop-types';


// stateless functional component
function ListContacts (props) {
  return (
    <ol className='contact-list'>
      {props.contacts.map((contact, index) =>
        <li key={contact.id} className='contact-list-item'>
          <div className='contact-avatar' style={{
            backgroundImage: `url(${contact.avatarURL})`
          }}/>
          <div className='contact-details'>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
          </div>
          <button className='contact-remove' onClick={ () => props.onDeleteContact(contact) }>
            Remove
          </button>
        </li>
       )}
    </ol>
  )
}

// allows us to specify specific types passed into component, and if they are required or not
ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}

// THE BELOW EXAMPLE IS THE SAME FUNCTIONALITY but using class syntax

// class ListContacts extends React.Component {
//   render () {
//     return (
//       <ol className='contact-list'>
//         {this.props.contacts.map((contact, index) =>
//           <li key={contact.id} className='contact-list-item'>
//             <div className='contact-avatar' style={{
//               backgroundImage: `url(${contact.avatarURL})`
//             }}/>
//             <div className='contact-details'>
//               <p>{contact.name}</p>
//               <p>{contact.email}</p>
//             </div>
//             <button className='contact-remove'>
//               remove
//             </button>
//           </li>
//          )}
//       </ol>
//     )
//
//   }
// }

export default ListContacts;
