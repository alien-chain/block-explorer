import {
  useEffect,
  useState,
} from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  lightTemplate,
  darkTemplate,
  deuteranopiaTemplate,
  tritanopiaTemplate,
  junoTemplate,
} from '@styles';
import { usePersistedState } from '@hooks';
import {
  Theme,
  ThemeState,
  DateFormatState,
} from './types';

/**
 *
 * @param initialState
 */
export const useTheme = (initialState:ThemeState) => {
  const [theme, setTheme] = useState(initialState.theme);
  const [themeSelection, setThemeSelection] = usePersistedState('themeSelection', initialState.themeSelection);

  const themeList = [
    // 'light',
    'dark',
    // 'deuteranopia',
    // 'tritanopia',
    // 'juno',
  ];

  const themeDictionary = {
    light: lightTemplate,
    dark: darkTemplate,
    deuteranopia: deuteranopiaTemplate,
    tritanopia: tritanopiaTemplate,
    juno: junoTemplate,
  };

  useEffect(() => {
    const isClient = typeof window === 'object';
    if (themeSelection === 'device') {
      if (
        isClient
        && window?.matchMedia('(prefers-color-scheme: dark)')?.matches
      ) {
        setTheme('dark');
      }
    } else if (themeDictionary[themeSelection]) {
      setTheme(themeSelection as Theme);
    } else {
      setTheme('dark');
    }
  }, [themeSelection]);

  const changeTheme = (value: string) => {
    if (themeDictionary[value]) {
      setThemeSelection(value);
    }
  };

  return {
    theme,
    muiTheme: createMuiTheme(themeDictionary[theme] || darkTemplate),
    themeSelection,
    themeList,
    themeDictionary,
    changeTheme,
  };
};

export const useDateFormat = (initialState:DateFormatState) => {
  const [dateSelection, setDateSelection] = usePersistedState('dateFormatSelection', initialState.dateFormat);

  const dateFormatList = [
    'locale',
    'utc',
  ];

  const changeDateFormat = (value: 'locale' | 'utc') => {
    setDateSelection(value);
  };

  return {
    dateFormat: dateSelection,
    changeDateFormat,
    dateFormatList,
  };
};
