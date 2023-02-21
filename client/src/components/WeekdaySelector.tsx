export{}
/* import React, { useState } from 'react';

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function WorkoutDaysSelector() {
  const [weekdaysSelected, setWeekdaysSelected] = useState([]);

  function handleCheckboxChange(event) {
    const weekday = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setWeekdaysSelected([...weekdaysSelected, weekday]);
    } else {
      setWeekdaysSelected(weekdaysSelected.filter((day) => day !== weekday));
    }
  }

  return (
    <div>
      <h3>Select workout days:</h3>
      {weekdays.map((weekday) => (
        <div key={weekday}>
          <input
            type="checkbox"
            id={weekday}
            name={weekday}
            value={weekday}
            checked={weekdaysSelected.includes(weekday)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={weekday}>{weekday}</label>
        </div>
      ))}
      <p>Selected days: {weekdaysSelected.join(', ')}</p>
    </div>
  );
}

export default WorkoutDaysSelector; */