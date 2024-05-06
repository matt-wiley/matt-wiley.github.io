import React from 'react';

import { PropsWithChildren } from "react";

interface ISectionBodyProps extends PropsWithChildren {

}

const SectionBody = (props: ISectionBodyProps) => {
  return (
    <div className="text-sm">
        { (props.children) ? props.children : <span>No content</span>  }
    </div>
  );
};

export default SectionBody;