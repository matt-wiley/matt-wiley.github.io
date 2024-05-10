import React from 'react';
import { PropsWithChildren } from "react";
import List, { ListType } from "./List";

interface IRoleSummaryProps extends PropsWithChildren {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  synopsis: string;
  accomplishments: string[] | JSX.Element[];
}

const RoleSummary = (props: IRoleSummaryProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:flex-row justify-start">
          <h4 className="font-bold pr-2">{props.role}</h4>
          <span className="inline-block text-gray-500">{props.company}</span>
        </div>
        <div className="inline-block text-gray-500">
          {props.startDate} - {props.endDate}
        </div>
      </div>
      { 
        (props.synopsis !== 'null' && props.synopsis !== 'undefined') ? 
          <div className="pt-2">
            {props.synopsis}
          </div> : ''
      }
      <div className="p-4 test-xs">
        <List 
          type={ListType.Bulleted}
          items={props.accomplishments}
          itemStyle="pb-2"
        />
      </div>
    </div>
  );
};

export default RoleSummary;