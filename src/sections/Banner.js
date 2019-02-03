import React from 'react';

const Banner = ({
  setNofiticationAlert,
  disableNotificationAlerts,
  isActive
}) => {
  const buttonLabel = isActive
    ? 'Turn off notifications'
    : 'Turn on notifications';

  const toggleNotification = () => {
    if (isActive) {
      disableNotificationAlerts();
      return;
    }
    setNofiticationAlert();
  };

  return (
    <div className="banner">
      <div className="header">
        <span>Are you</span>
        <span>productive</span>
        <span>right now?</span>
      </div>

      <div className="controls">
        <button className="button white" onClick={toggleNotification}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Banner;
