import React from 'react';

import { ExperienceDataService } from '../services/ExperienceDataService';
import { DataPresentationService as presenter } from '../services/DataPresentationService';


import DefaultSpacer from '../components/DefaultSpacer';
import List, { ListType } from '../components/List';
import NamePlate from '../components/NamePlate';
import RoleSummary from '../components/RoleSummary';
import Section from '../components/Section';
import WebLink from '../components/WebLink';


interface IResumeProps {

}



const WebLinksList = () => {

  const fa_base = 'fa-lg fa-fw'

  const links = [
    {
      icon: `${fa_base} fa-brands fa-github`,
      link: 'https://github.com/matt-wiley',
      text: 'matt-wiley'
    },
    {
      icon: `${fa_base} fa-brands fa-linkedin`,
      link: 'https://www.linkedin.com/in/matt-b-wiley',
      text: 'in/matt-b-wiley'
    },
    {
      icon: `${fa_base} fa-brands fa-instagram`,
      link: 'https://www.instagram.com/matt.wiley.person',
      text: '@matt.wiley.person'
    },
    {
      icon: `${fa_base} fas fa-globe`,
      link: 'https://matt-wiley.github.io',
      text: 'matt-wiley.github.io'
    }
  ]

  const webLinkElements = (() => {
    return links.map((link, index) => {
      return (
        <div className='pb-0.5'>
          <WebLink key={index} icon={link.icon} link={link.link} text={link.text} />
        </div>
      )
    })
  })()

  return (
    <List type={ListType.None} items={webLinkElements} />
  )
}

const SecondaryInfo = () => {
  return (
    <>
      <Section headerText="Education">
        <div className=' font-semibold'>BS in Computer Science</div>
        <div>Northern Kentucky University</div>
        <div>College of Informatics</div>
        <div>December 2012</div>
      </Section>
      <DefaultSpacer />
      <Section headerText="Strengths">
        <List type={ListType.None} items={[
          "Leadership",
          "Coaching",
          "Strategic Thinking",
          "Process Improvement",
        ]} />
        <DefaultSpacer />
        <List type={ListType.None} items={[
          "Java",
          "Python",
          "Git",
          "Shellscript",
          "Linux",
          "VS Code",
          "IntelliJ IDEA",
          "GitHub Actions"
        ]} />
      </Section>
      <DefaultSpacer />
      <Section headerText="Hobbies & Interests">
        <List type={ListType.None} items={[
          "Reading",
          "Drawing, Painting, Making",
          "Writing",
          "Learning",
          "Solving puzzles"
        ]} />
        <DefaultSpacer />
        <List type={ListType.None} items={[
          "Physics & Cosmology",
          "Fiction & Sci-Fi",
          "PBS Spacetime",
          "PBS Eons"
        ]} />
      </Section>
      <DefaultSpacer />
      <Section headerText='Links'>
        <WebLinksList />
      </Section>
    </>
  )
}


const Home = (props: IResumeProps) => {
  return (
    <>
      <div className="max-w-4xl m-auto pl-5 pr-5 relative">
        <a
          href="/downloads/Resume_Wiley.pdf"
          className='absolute top-0 right-0 text-sm text-gray-500 print:hidden pr-7'
          title="Printable Version"
        >🖨️<span className='hidden md:inline'> Printable Version</span></a>
        <div className=" h-fit w-full border-b-2 print:border-gray-400 pb-4">
          {/* HEADER */}
          <NamePlate
            name="Matt Wiley"
            labelLine="Software Engineer | Tech Lead | Mentor"
            phone="859.206.0007"
            email="matt.wiley@fastmail.com"
            location="Fort Thomas, KY"
          />
          <div className='text-justify'>
            <Section headerText="Summary">
              Software engineer with a passion for continuous improvement and automation and over ten years experience across the full software development stack. Seeking opportunity to join a diverse team of engineers to learn from, lead and mentor while delivering well-crafted solutions to business problems.
            </Section>
          </div>
        </div>
        <div className='flex flex-row w-full mt-4'>
          <div className='flex-none w-full md:w-9/12 print:w-9/12 pr-6'>
            {/* MAIN CONTENT */}
            <Section headerText="Experience">
              {
                ExperienceDataService.getExperienceData().map((employer, index) => {
                  return (
                    <div key={index}>
                      <div className='font-semibold'>{employer.name}</div>
                      <div>{employer.location}</div>
                      <div>{employer.start_date} - {employer.end_date}</div>
                      <List type={ListType.None} items={employer.roles.map((role, index) => {
                        return (
                          <RoleSummary 
                            key={index} 
                            role={''+role.title} 
                            company={''+employer.name}
                            startDate={presenter.presentDate(role.start_date)}
                            endDate={presenter.presentDate(role.end_date)}
                            synopsis={''+role.description}
                            accomplishments={role.notes.map((note, index) => {
                              return (
                                <div key={index}>{note}</div>
                              )
                            })}
                            />
                        )
                      })} />
                      <DefaultSpacer />
                    </div>
                  )
                })
              }
            </Section>
            <div className='border-t-2 mb-20 md:hidden print:hidden'>
              <DefaultSpacer />
              <SecondaryInfo />
            </div>
          </div>
          <div className='flex-none w-0 invisible md:visible md:w-3/12 md:border-l-2 print:visible print:border-gray-400 md:pl-2'>
            {/* SIDEBAR */}
            <SecondaryInfo />
          </div>
        </div>
      </div>
    </>
  );
}


export default Home;