// Modal.tsx
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './SlideUpModal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const SlideUpModal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const [animationClass, setAnimationClass] = useState('');
  
  useEffect(() => {
    if (isOpen) {
      setAnimationClass('modal-open');
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      setAnimationClass('modal-closing');
      const timer = setTimeout(() => {
        setAnimationClass('');
        // Re-enable body scrolling when modal is closed
        document.body.style.overflow = 'auto';
      }, 300); // Match the animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen && animationClass !== 'modal-closing') {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={`modal-container ${animationClass}`}>
      <div className="modal-backdrop" onClick={onClose} aria-hidden="true"></div>
      <div 
        className="modal-content" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-title"
      >
        <div className="modal-header">
          <h2 id="modal-title">{title}</h2>
          <button 
            className="modal-close" 
            onClick={onClose} 
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SlideUpModal;