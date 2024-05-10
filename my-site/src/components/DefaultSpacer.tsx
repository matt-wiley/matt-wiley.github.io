import React from 'react';

interface IDefaultSpacerProps {

}

const DefaultSpacer = (props: IDefaultSpacerProps) => {
  return (
    <div className=" h-1">
      &nbsp;
    </div>
  );
};

export default DefaultSpacer;