import React, { useState, useRef, useEffect } from 'react';
import close from '../assets/images/active.svg';
import open from '../assets/images/active.svg';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isOpen]);

  return (
    <div
      className={`accordion-item text-white mb-2 rounded-[15px] cursor-pointer  py-3 px-5 transition-all duration-500 ease-in-out bg-[#0B3635]`}
    >
      <div
        className="accordion-header flex justify-between Brockmann text-lg"
        onClick={onClick}
      >
        <span className="self-center Brockmann">{title}</span>
        <span>{!isOpen ? <img src={close} className='w-[40px] max-w-[40px]' alt="close" /> : <img src={open} className='w-[40px] max-w-[40px] rotate-180	' alt="open" />}</span>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight, opacity: isOpen ? 1 : 0 }}
        className="accordion-content overflow-hidden transition-all duration-500 ease-in-out pl-5 Gilroy capitalize "
      >
        <div className='mt-3'>
          {content}
        </div>
      </div>
    </div>
  );
};

const CustomAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default CustomAccordion;
