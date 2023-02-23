import React from 'react';
import { LineWave } from 'react-loader-spinner';

export default function Loader() {
  return (
    // <Wrapper>
    <LineWave
      height="150"
      width="150"
      color="grey"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      position="fixed"
      bottom="50px"
    />
  );
}
// {
//   /* </Wrapper> */
// }
