import React, { createContext } from 'react';
export const init = {
  state: {
    unit  :'cm',
    input :1,
    cm    :1,
    mm    :10,
    um    :10000
  },
  dispatch : () => {}
}
export const CalcContext = React.createContext(init);