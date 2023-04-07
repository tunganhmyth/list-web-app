import React, { useState } from "react";

interface AccordionProps {
  title: React.ReactNode;
  children: React.ReactNode;
  isEditing: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  isEditing,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isEditing) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleClick}>
        <div className="accordion-title">{title}</div>
        <div className="accordion-icon text-primary">{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
