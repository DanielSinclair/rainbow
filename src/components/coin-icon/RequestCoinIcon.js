import PropTypes from 'prop-types';
import React from 'react';
import { CircularProgress } from 'react-native-circular-progress';
import RequestVendorLogoIcon from './RequestVendorLogoIcon';

const RequestCoinIcon = ({ expirationColor, percentElapsed, size }) => (
  <CircularProgress
    fill={percentElapsed}
    lineCap="round"
    prefill={percentElapsed}
    rotation={0}
    size={size}
    tintColor={expirationColor}
    width={2}
  >
    {() => <RequestVendorLogoIcon size={size / 2} />}
  </CircularProgress>
);

RequestCoinIcon.propTypes = {
  expirationColor: PropTypes.string,
  percentElapsed: PropTypes.number,
  size: PropTypes.number,
};

RequestCoinIcon.defaultProps = {
  size: 48,
};

export default RequestCoinIcon;
