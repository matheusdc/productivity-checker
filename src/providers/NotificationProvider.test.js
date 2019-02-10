import React from 'react';
import NotificationProvider, {
  PRODUCTIVIY_CHECKER_KEY
} from './NotificationProvider';
import { shallow } from 'enzyme';

describe('<NotificationProvider />', () => {
  const defaultConfig = {
    message: 'Are you productive right now?',
    intervalInMinutes: 60,
    active: false
  };

  const defaultProps = {};
  const setupProvider = overridenProps =>
    shallow(<NotificationProvider {...defaultProps} {...overridenProps} />);

  global.Notification = jest.fn();
  const localStorageGetItem = jest.spyOn(Storage.prototype, 'getItem');
  const localStorageSetItem = jest.spyOn(Storage.prototype, 'setItem');

  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
    localStorage.clear();
  });

  describe('When mounting', () => {
    it('Should load default configuration when none are available', () => {
      const providerRenderer = setupProvider();

      expect(localStorageGetItem).toHaveBeenCalledWith(PRODUCTIVIY_CHECKER_KEY);
      expect(providerRenderer.state()).toEqual(defaultConfig);
    });

    it('Should load configurations from local storage', () => {
      const mockPreferences = { ...defaultConfig, message: 'test' };
      localStorage.setItem(
        PRODUCTIVIY_CHECKER_KEY,
        JSON.stringify(mockPreferences)
      );

      const providerRenderer = setupProvider();

      expect(localStorageGetItem).toHaveBeenCalledWith(PRODUCTIVIY_CHECKER_KEY);
      expect(providerRenderer.state()).toEqual(mockPreferences);
    });

    it('Should set notification interval', () => {
      const providerRenderer = setupProvider();

      expect(setInterval).toHaveBeenCalled();
    });
  });

  describe('When it is time to notify user', () => {
    it('Should send a Notification with the message saved on state', () => {
      const providerRenderer = setupProvider();
      const message = providerRenderer.state().message;

      jest.advanceTimersByTime(60 * 60 * 1000);
      expect(Notification).toHaveBeenCalledWith('Productivity Checker', {
        body: message
      });
    });
  });

  describe('When saving new preferences', () => {
    it('Should update localStorage accordingly', () => {
      const providerRenderer = setupProvider();

      providerRenderer.instance().enableNotifications();

      expect(localStorageSetItem).toHaveBeenCalledWith(
        PRODUCTIVIY_CHECKER_KEY,
        JSON.stringify(providerRenderer.state())
      );
    });
  });

  describe('When disabling notifications', () => {
    it('Should update localStorage accordingly', () => {
      const providerRenderer = setupProvider();

      providerRenderer.instance().disableNotifications();

      expect(localStorageSetItem).toHaveBeenCalledWith(
        PRODUCTIVIY_CHECKER_KEY,
        JSON.stringify(providerRenderer.state())
      );
    });

    it('Should clear the interval', () => {
      const providerRenderer = setupProvider();

      providerRenderer.instance().disableNotifications();

      expect(clearInterval).toHaveBeenCalled();
    });
  });

  describe('When unmounting', () => {
    it('Should clear interval timer', () => {
      const providerRenderer = setupProvider();

      providerRenderer.instance().componentWillUnmount();

      expect(clearInterval).toHaveBeenCalled();
    });
  });
});
