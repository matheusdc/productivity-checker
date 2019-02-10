import React, { useContext } from 'react';
import { NotificationContext } from '../providers/NotificationProvider';

const Configuration = () => {
  const {
    enableNotifications,
    disableNotifications,
    setNotificationPreferences,
    getNotificationPreferences
  } = useContext(NotificationContext);

  const { message, intervalInMinutes } = getNotificationPreferences();

  const handleMessageUpdate = event => {
    setNotificationPreferences({ message: event.target.value });
  };

  const handleTimeUpdate = event => {
    setNotificationPreferences({
      intervalInMinutes: Number(event.target.value)
    });
  };

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
          value={message}
        />
      </div>

      <div className="line">
        <label>After how many minutes would you like to be notified?</label>
        <input
          onChange={handleTimeUpdate}
          className="input"
          type="text"
          placeholder="60"
          value={intervalInMinutes}
        />
      </div>

      <div className="line">
        <button
          className="button margin-right"
          type="button"
          onClick={enableNotifications}
        >
          Save and activate :)
        </button>
        <button
          className="button margin-right"
          type="button"
          onClick={disableNotifications}
        >
          Turn off notifications :(
        </button>
      </div>
    </div>
  );
};

export default Configuration;
