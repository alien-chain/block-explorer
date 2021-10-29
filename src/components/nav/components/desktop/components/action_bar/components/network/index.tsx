import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { useNetworksContext } from '@src/contexts';
import { chainConfig } from '@configs';
import { useStyles } from './styles';

const Network:React.FC<{
  className?: string;
  toggleNetwork: () => void;
}> = ({
  className,
}) => {
  const classes = useStyles();
  const {
    selected,
  } = useNetworksContext();
  return (
    <div
      className={classnames(className, classes.root)}
    >
      <img src={chainConfig.icon} className={classes.icon} alt="icon" />
      <Typography variant="body1">
        {selected}
      </Typography>
    </div>
  );
};

export default Network;
