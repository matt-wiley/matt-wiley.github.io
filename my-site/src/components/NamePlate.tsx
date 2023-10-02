interface INamePlateProps {
  name: string,
  labelLine: string,
  phone: string,
  email: string,
  location: string,
}

const NamePlate = (props: INamePlateProps) => {
  return (
    <div className="p-2 w-full flex flex-col">
      <h1 className="w-full text-4xl text-center font-black uppercase tracking-widest">{props.name}</h1>
      <div className="flex flex-row justify-center align-middle">
        <div className="w-full text-sm text-center uppercase tracking-wider">{props.labelLine}</div>
      </div>
      <div className="flex flex-row justify-center align-middle">
        <div className="text-xs">{props.phone} | {props.email} | {props.location}</div>
      </div>
    </div>
  );
};

export default NamePlate;