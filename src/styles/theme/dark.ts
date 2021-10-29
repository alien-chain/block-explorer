const backgroundDefault = '#16264F';
const surfaceOne = '#1E3163';
const surfaceTwo = '#2D46B9';
const fontOne = '#FFFFFF';
const fontTwo = '#FFFFFF';
const fontThree = '#FFFFFF';

/** Custom theme overrides for dark mode */
export const darkThemeOverride = {
  mixins: {
    tableCell: {
      background: surfaceOne, // surface one
      '&.odd': {
        background: surfaceTwo, // surface two
      },
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#F037A5',
      contrastText: '#fff',
    },
    background: {
      default: backgroundDefault,
      paper: surfaceOne,
    },
    divider: '#F037A5',
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
    },
    custom: {
      general: {
        background: backgroundDefault, // same as background default
        surfaceOne, // same as background paper
        surfaceTwo, // striped tables
      },
      fonts: {
        fontOne,
        fontTwo,
        fontThree,
        fontFour: '#FFFFFF',
        highlight: '#F037A5', // links
      },
      primaryData: {
        one: '#2D46B9',
        two: '#2D46B9',
        three: '#2D46B9',
        four: '#2D46B9',
      },
      results: {
        pass: '#1EC490',
        fail: '#FD3B4C',
      },
      condition: {
        zero: '#E6E6E6',
        one: '#1EC490',
        two: '#FF9338',
        three: '#FF608A',
      },
      tokenomics: {
        one: '#F76F68',
        two: '#FFFFFF',
        three: '#9AA2A8',
      },
      charts: {
        zero: '#2D46B9',
        one: '#F76F68',
        two: '#9AA2A8',
        three: '#000000',
        four: '#FFFFFF',
        five: '#FF241C',
      },
    },
  },
  overrides: {
    MuiTableBody: {
      root: {
        '& .MuiTableRow-root': {
          '&:nth-child(odd)': {
            backgroundColor: surfaceTwo, // surface two
          },
        },
        '& .MuiTableCell-root': {
          color: fontTwo, // font two
        },
      },
    },
    MuiTabs: {
      root: {
        '& .MuiTab-textColorInherit': {
          color: fontThree, // font three
        },
        '& .MuiTab-textColorInherit.Mui-selected': {
          color: fontOne, // font one
        },
        '& .MuiTabs-indicator': {
          backgroundColor: fontOne, // font one (?)
        },
      },
    },
  },
};
