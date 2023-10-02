import { PropsWithChildren } from "react";

import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";

interface ISectionProps extends PropsWithChildren{
  headerText: string;
}

const Section = (props: ISectionProps) => {
  return (
    <div className="p-2">
      <SectionHeader text={props.headerText} />
      <SectionBody>
        {props.children}
      </SectionBody>
    </div>
  );
};

export default Section;