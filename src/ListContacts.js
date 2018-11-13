import React from 'react';

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
          <button className='contact-remove'>
            remove
          </button>
        </li>
       )}
    </ol>
  )
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
