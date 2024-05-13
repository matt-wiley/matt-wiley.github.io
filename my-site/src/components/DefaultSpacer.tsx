import React from 'react';

interface IDefaultSpacerProps {
  heightClass?: string;
}

const DefaultSpacer = (props: IDefaultSpacerProps) => {
  const heightClass = props.heightClass || 'h-1';
  return (
    <div className={heightClass}>
      &nbsp;
    </div>
  );
};

export default DefaultSpacer;