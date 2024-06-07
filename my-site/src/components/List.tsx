import React from 'react';

export enum ListType {
  Numbered = "numbered",
  Bulleted = "bulleted",
  None = "none"
}

interface IListProps {
  type: ListType;
  items: any[];
  itemStyle?: string;
}


const List = (props: IListProps) => {

  const listType = props.type || ListType.None

  const listStyle = (() => {
    return {
      "numbered": "list-decimal pl-4",
      "bulleted": "list-disc pl-4",
      "none": "list-none"
    }[listType] || ""
  })();

  return (
    <ul className={listStyle}>
      { 
        props.items.map(
          (item, i) => (
            <li key={i} className={props.itemStyle}>{item}</li>
          )
        )
      }
    </ul>
  )
};

export default List;