interface IWebLinkProps {
  icon?: string;
  image?: string;
  link: string;
  text: string;
}

const WebLink = (props: IWebLinkProps) => {

  const defaultIcon = 'fa-globe'

  return (
    <div className="inline-block w-full flex flex-row justify-start align-middle text-black hover:text-blue-400">
      <div className="w-5 h-5 mr-2 text-center">
        { (!props.image) ? 
          <i className={`${props.icon || defaultIcon}`} /> : 
          <img src={`${ props.image }`} className="w-5 h-5 mr-2" /> 
        }
      </div>
      <a href={props.link}>{props.text}</a>
    </div>
  );
};

export default WebLink;