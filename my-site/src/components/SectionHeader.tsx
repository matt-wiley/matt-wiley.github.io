interface ISectionHeaderProps {
  text: string;
}

const SectionHeader = (props: ISectionHeaderProps) => {
  
  return (
    <h4 className="pb-3 text-sm font-bold uppercase tracking-wider">{props.text}</h4>
  );
};

export default SectionHeader;