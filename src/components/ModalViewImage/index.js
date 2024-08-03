import React from 'react';
import './ModalViewImage.scss';

function ModalViewImage(props) {
  const { children, onClose, title = '', className } = props;
  return (
    // <div id='modal-one' className='modal open'>
    //   <div id='content-one' className='modal-content open'>
    //     <button className='close-button' onClick={onClose}>
    //       <span aria-hidden='true' class='line'></span>
    //       <span className='sr-only'>Cerrar Modal</span>
    //     </button>
    //     {children}
    //   </div>
    // </div>
    <div className={`modal-overlay ${className}`}>
      <div className='modal-wrapper'>
        <div className='modal'>
          <div className='modal-header'>
            <h4>{title}</h4>
            <button
              type='button'
              className='modal-close-button'
              onClick={onClose}
            >
              <span>&times;</span>
            </button>
          </div>
          <div className='modal-body'>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default ModalViewImage;
