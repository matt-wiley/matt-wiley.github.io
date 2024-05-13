import React, { Fragment } from 'react';
import Section from '../components/Section';
import DefaultSpacer from '../components/DefaultSpacer';
import RoleSummary from '../components/RoleSummary';
import { ExperienceDataService } from '../services/ExperienceDataService';
import List, { ListType } from '../components/List';


import { DataPresentationService as presenter } from '../services/DataPresentationService';
import NamePlate from '../components/NamePlate';

interface IExperienceProps {
}

const Experience = (props: IExperienceProps) => {
  return (
    <>
      <div className="max-w-4xl m-auto pl-5 pr-5 relative">
        <div className=" h-fit w-full border-b-2 print:border-gray-400 pb-4">
          {/* HEADER */}
          <NamePlate
            name="Matt Wiley"
            labelLine="Software Engineer | Tech Lead | Mentor"
            phone="859.206.0007"
            email="matt.wiley@fastmail.com"
            location="Fort Thomas, KY"
          />
        </div>
        <div className='flex flex-row w-full mt-4'>
          <div className='flex-none w-full pr-6'>
            {/* MAIN CONTENT */}
            <Section headerText="Experience">
              {
                ExperienceDataService.getExperienceData().map((employer, index) => {
                  return (
                    <Fragment key={index}>
                      <List type={ListType.None} items={employer.roles.map((role, index) => {
                        return (
                          <Fragment key={index}>
                            <RoleSummary
                              role={'' + role.title}
                              company={'' + employer.name}
                              startDate={presenter.presentDate(role.start_date)}
                              endDate={presenter.presentDate(role.end_date)}
                              synopsis={'' + role.description}
                              accomplishments={role.notes.map((note, index) => {
                                return (
                                  <div key={index}>{note.summary}</div>
                                )
                              })}
                            />
                            <DefaultSpacer heightClass='h-8' />
                          </Fragment>
                        )
                      })} />
                    </Fragment>
                  )
                })
              }
            </Section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;