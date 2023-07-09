import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const Popup = ({ onClose, text,onEdit }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const [inputValue2, setInputImage] = useState(null);
  const handleImageChange = (event) => {
    setInputImage(event);
  };
  return createPortal(
    <div className="popup-overlay">
      <div className="popup-content">
        
        <input placeholder='new Name'  type="text" value={inputValue} onChange={handleInputChange} />
       
       
       <div>
        <input
        className='pl-5 ml-5'
                type="file"
                name="image"
                required
                onChange={handleImageChange}
              />
          </div>
        <div>
        <button onClick={onClose}>Close</button>
        <button onClick={() => onEdit(inputValue,inputValue2)}>edit</button>
        </div>

      </div>
    </div>,
    document.body
  );
};

export default Popup;
