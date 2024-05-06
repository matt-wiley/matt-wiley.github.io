import React from 'react';

interface IWebLinkProps {
  icon?: string;
  image?: string;
  link: string;
  text: string;
}

const WebLink = (props: IWebLinkProps) => {

  const defaultIcon = 'fas fa-globe'

  return (
    <div className="w-full flex flex-row justify-start align-middle">
      <div className="w-5 h-5 mr-2 text-center">
        { (!props.image) ? 
          <i className={`${props.icon || defaultIcon}`} /> : 
          <img src={`${ props.image }`} alt={props.text} className="w-5 h-5 mr-2" /> 
        }
      </div>
      <a className="text-black hover:text-blue-400" href={props.link}>{props.text}</a>
    </div>
  );
};

export default WebLink;