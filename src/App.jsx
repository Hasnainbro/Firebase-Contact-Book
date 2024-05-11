// App.jsx
import Navbar from "./components/navbar";
import { FiSearch } from "react-icons/fi";
import { IoMdPersonAdd } from "react-icons/io";
import { useState, useEffect } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddandUpdateContact from "./components/AddandUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notfoundcontact from "./components/Notfoundcontact";



const App = () => {
  const [contacts, setContacts] = useState([]);

  const {isOpen, onClose, onOpen, onChange} = useDisclouse();

  const getContacts = async () => {
    try {
      const contactsRef = collection(db, "contacts");

      onSnapshot(contactsRef, (snapshot) => {
        const contactLists = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactLists);
        return contactLists;
      })
      }
       catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

      onSnapshot(contactsRef, (snapshot) => {
        const contactLists = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const filteredContacts = contactLists.filter((contact) =>
          contact.name.toLowerCase().includes(value.toLowerCase())
        );
        setContacts(filteredContacts);


        return filteredContacts;
      })
    
  }


  return (
    <><div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="relative flex items-center">
          <FiSearch className="absolute ml-1 text-3xl text-white" />
          <input 

            onChange={filterContacts}
            type="text"
            className="flex-grow border bg-transparent border-white rounded-md h-10 pl-9 text-white"
          />
        </div>
        <div >
          <IoMdPersonAdd onClick={onOpen} className="text-4xl text-white cursor-pointer"/>
        </div>
      </div>

      <div className="mt-4 gap-3 flex flex-col">
        {contacts.length <= 0 ? (
            <Notfoundcontact />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
      </div>
    </div>

    <AddandUpdateContact onClose={onClose} isOpen={isOpen} onAddContact={getContacts}/>
      
    <ToastContainer />  
    </>
  );
};

export default App;
