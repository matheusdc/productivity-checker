import React from 'react';

const Configuration = ({
  handleMessageUpdate,
  handleTimeUpdate,
  setNofiticationAlert,
  disableNotificationAlerts
}) => {
  return (
    <div id="customize" className="configuration">
      <h1>Customize...</h1>
      <div className="line">
        <label>How would you like to be notified?</label>
        <input
          onChange={handleMessageUpdate}
          className="input"
          type="text"
          placeholder="Notification message"
        />
      </div>

      <div className="line">
        <label>After how many minutes would you like to be notified?</label>
        <input
          onChange={handleTimeUpdate}
          className="input"
          type="text"
          placeholder="60"
        />
      </div>

      <div className="line">
        <button
          className="button margin-right"
          type="button"
          onClick={setNofiticationAlert}
        >
          Save and activate :)
        </button>
        <button
          className="button margin-right"
          type="button"
          onClick={disableNotificationAlerts}
        >
          Turn off notifications :(
        </button>
      </div>
    </div>
  );
};

export default Configuration;
