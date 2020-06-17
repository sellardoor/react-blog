import React from 'react';
import CssModules from 'react-css-modules';
import styles from './index.less';

const Test = () => {
  return (
    <div>
      <p styleName='a'>111</p>
      <p className='b'>222</p>
    </div>
  );
};

export default CssModules(Test, styles);
