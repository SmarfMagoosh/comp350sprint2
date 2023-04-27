import React, { useState } from "react";

function DropdownMenu() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an schedule</option>
        <option value="schedule 1">Schedule 1</option>
        <option value="schedule 2">Schedule 2</option>
        <option value="schedule 3">Schedule 3</option>
      </select>
      <p>You selected: {selectedOption}</p>
    </div>
  );
}

export default DropdownMenu;
