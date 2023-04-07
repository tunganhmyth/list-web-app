import React from "react";
import Button from "../../Button/Button";

export interface BulkActionProps {
  handleClearAll?: () => void;
}

const BulkAction: React.FC<BulkActionProps> = ({ handleClearAll }) => {
  return (
    <div className="bulk-sticky">
      <div className="bulk-item" >
        <Button margin="0px 24px 0px 0px">Done</Button>
        <Button onClick={handleClearAll}>Remove all</Button>
      </div>
    </div>
  );
};

export default BulkAction;
