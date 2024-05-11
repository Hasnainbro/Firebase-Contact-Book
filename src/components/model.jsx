// Model.jsx
import { createPortal } from 'react-dom';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const Model = ({ onClose, isOpen, children }) => {
  return createPortal(
    isOpen && (
      <div className='grid place-items-center backdrop-blur h-screen w-screen absolute top-0 z-40'>
        <div className='z-50 relative m-auto min-h-[200px] min-w-[80%] bg-white p-4'>
          <div className='flex justify-end'>
            <IoIosCloseCircleOutline onClick={onClose} className='self-end text-2xl' />
          </div>
          <div>{children}</div>
        </div>
      </div>
    ),
    document.getElementById("model-root")
  );
};

export default Model;
