import { toast } from 'react-toastify';
import { db } from '../config/firebase';
import Model from './model';
import { addDoc, collection, doc, updateDoc, } from "firebase/firestore";
import { ErrorMessage, Field, Form,Formik} from 'formik';
import * as Yup from "yup";

const contactschema = Yup.object().shape({
    name : Yup.string().required("Name is Required"),
    email : Yup.string().email("Invalid Email").required("Email is Required")
    
})
const AddandUpdateContact = ({isOpen,onClose, isUpdate, contact}) => {

    const addContact = async (contacts) => {
        try {

            const contactsRef = collection(db, "contacts");
            await addDoc(contactsRef, contacts);
            onClose();
            toast.success("Contact Added Successfully")
            
            console.log(contact);
            
        } catch (error) {
            console.log(error);
        }
    
    };

    const updateContact = async (contacts , id) => {
        try {

            const contactsRef = doc(db, "contacts" , id);
            await updateDoc(contactsRef, contacts);
            onClose();
            toast.success("Contact Updated Successfully")
            
            console.log(contact);
            
        } catch (error) {
            console.log(error);
        }
    
    };

  return (
    <div>
      <Model isOpen = {isOpen} onClose = {onClose}>
        <Formik
        validationSchema={contactschema}
        initialValues={ isUpdate ? {
            name: contact.name,
            email: contact.email,
        } :
            {
                name: "",
                email: "",
            }
        }
        onSubmit={(values) => {

            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
        }
        }

        >
            <Form className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <Field name= "name" className = 'border h-10'>
                </Field>
                <div className='text-red-500 text-xs font-medium'>
                    <ErrorMessage name = "name"/>
                </div>
                </div>


                <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <Field name = "email" className = 'border h-10'>
                </Field>
                <div className='text-red-500 text-xs font-medium'>
                    <ErrorMessage name = "email"/>
                </div>
                </div>

                <button type = "submit" className='bg-orange px-3 py-1.5 border self-center'>{isUpdate ? "Update" : "Add"} Contact</button>
            </Form>

        </Formik>

       </Model>
    </div>
  )
}

export default AddandUpdateContact
