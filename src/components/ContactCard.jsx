// ContactCard.jsx
import { deleteDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react';
import { FaUserCircle, FaUserEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { db } from '../config/firebase';
import AddandUpdateContact from './AddandUpdateContact';
import useDisclouse from '../hooks/useDisclouse';
import { toast } from 'react-toastify';

const ContactCard = ({ contact }) => { 

  const {isOpen, onClose, onOpen, isUpdate} = useDisclouse();

  
  const deleteContact = async (id) => {
    try {
        await deleteDoc(doc(db, "contacts", id));
        toast.success("Contact deleted successfully")
    } catch (error) {
        console.log(error);
    }
}
  
  
  // Destructure contact from props
  return (

    <>
    <div key={contact.id} className="bg-yellow flex justify-between items-center p-2 rounded-lg">
      <div className="flex gap-1">
        <FaUserCircle className="text-4xl text-orange" />

        <div className="">
          <h2 className="font-medium">{contact.name}</h2> 
          <p className="text-sm">{contact.email}</p> 
        </div>
      </div>
      <div className="flex text-3xl">
        <FaUserEdit onClick={onOpen} className='cursor-pointer'/>
        <MdDelete onClick={() => deleteContact(contact.id)} className="text-orange cursor-pointer" />
      </div>
    </div>

    <AddandUpdateContact contact = {contact} isUpdate isOpen= {isOpen} onClose = {onClose}/>
    </>
  );
};

export default ContactCard;
