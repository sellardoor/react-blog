import React from 'react';
import { Redirect } from 'umi';

const Wrapper:React.FC = props => {
  const Authorization = localStorage.getItem('Authorization');
  if (Authorization) return <>{props.children}</>;
  else return <Redirect to="/login"></Redirect>;
}


export default Wrapper;
