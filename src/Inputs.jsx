import { useState, useId } from "react";
import "./Inputs.css";

function DateInput() {
  const [untilNow, setUntilNow] = useState(false);
  const [untilNowDate, setUntilNowDate] = useState();
  const dateFromId = useId();
  const dateUntilId = useId();
  const checkboxId = useId();
  const dateUntilHTML = (
    <>
      <label htmlFor={dateUntilId}>Date Until</label>
      <input type="date" id={dateUntilId} name="dateUntil" value={untilNowDate} onChange={onSetUntilNow} />
    </>
  );

  function onToggle() {
    setUntilNow(!untilNow);
  }

  function onSetUntilNow(e) {
    setUntilNowDate(e.target.value);
  }

  return (
    <>
      <div className="horizontal">
        <div>
          <label htmlFor={dateFromId}>Date From</label>
          <input type="date" id={dateFromId} name="dateFrom" />
        </div>
        <div className="checkboxSide">
          <label htmlFor={checkboxId}>Until Now?</label>
          <input type="checkbox" id={checkboxId} name="untilNow" onChange={onToggle}/>
        </div>
      </div>
      {untilNow && dateUntilHTML}
    </>
  );
}

export { DateInput };
