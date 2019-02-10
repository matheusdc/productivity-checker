import React, { useEffect, useContext } from 'react';
import moment from 'moment';
import { NotificationContext } from '../providers/NotificationProvider';

const Timer = () => {
  const { getNotificationPreferences, areNotificationsActive } = useContext(
    NotificationContext
  );
  const { intervalInMinutes, timerStart } = getNotificationPreferences();

  useEffect(() => {
    const relativeTime = () =>
      moment(timerStart)
        .add(intervalInMinutes, 'minutes')
        .fromNow();

    const updateDOM = () => {
      const message = `You will be notified ${relativeTime()}`;
      if (areNotificationsActive()) {
        document.querySelector('.timer').innerText = message;
        return;
      }

      document.querySelector('.timer').innerText = 'Click on the button below';
      return;
    };

    updateDOM();

    const updateInterval = setInterval(updateDOM, 60 * 1000);

    return () => {
      clearInterval(updateInterval);
    };
  });

  return <span className="timer" />;
};

export default Timer;
