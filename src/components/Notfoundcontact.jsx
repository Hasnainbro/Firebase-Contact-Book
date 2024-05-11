import React from 'react';
import handsContactImage from '/Hands Contact.png';

const Notfoundcontact = () => {
  return (
    <div className='flex h-[80vh] justify-center items-center gap-4'>
      <div><img src={handsContactImage} alt="Contact Not Found" /> </div>
      <h3 className='text-white text-2xl font-semibold'>Contact Not Found</h3>
    </div>
  );
}

export default Notfoundcontact;