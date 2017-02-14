import React from 'react';

export default (Component)=> ({ ...props, params })=> React.createElement(
  Component,
  ({ ...params, ...props })
);
