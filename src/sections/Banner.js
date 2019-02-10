import React, { useContext } from 'react';

import { NotificationContext } from '../providers/NotificationProvider';

import Timer from '../components/Timer';

const Banner = () => {
  const {
    areNotificationsActive,
    enableNotifications,
    disableNotifications
  } = useContext(NotificationContext);

  const buttonLabel = areNotificationsActive()
    ? 'Turn off notifications'
    : 'Turn on notifications';

  const toggleNotification = () => {
    if (areNotificationsActive()) {
      disableNotifications();
      return;
    }
    enableNotifications();
  };

  return (
    <div className="banner">
      <div className="header">
        <span>Are you</span>
        <span>productive</span>
        <span>right now?</span>
      </div>

      <Timer />

      <div className="controls">
        <button className="button white" onClick={toggleNotification}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Banner;
