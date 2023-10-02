import DefaultSpacer from '../components/DefaultSpacer';
import List, { ListType } from '../components/List';
import NamePlate from '../components/NamePlate';
import RoleSummary from '../components/RoleSummary';
import Section from '../components/Section';
import WebLink from '../components/WebLink';


interface IHomeProps {

}



const WebLinksList = () => {

  const fa_base = 'fa-lg fa-fw fa-brands'

  const links = [
    {
      icon: `${fa_base} fa-github`,
      link: 'https://github.com/matt-wiley',
      text: '/matt-wiley'
    },
    {
      icon: `${fa_base} fa-linkedin`,
      link: 'https://www.linkedin.com/in/matt-b-wiley',
      text: '/matt-b-wiley'
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


const Home = (props: IHomeProps) => {
  return (
    <>
      <div className="max-w-4xl m-auto pl-5 pr-5 print:p-0 relative">
        <a
          href="/downloads/Resume_Wiley.pdf"
          className='absolute top-0 right-0 text-sm text-gray-500 print:hidden pr-7'
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
          <div className='flex-none w-0 invisible md:visible md:w-3/12'>
            {/* LEFT COLUMN */}
            <SecondaryInfo />
          </div>
          <div className='flex-none w-full md:w-9/12 md:border-l-2 print:border-gray-400 md:pl-2'>
            {/* RIGHT COLUMN */}
            <Section headerText="Experience">
              <DefaultSpacer />
              <RoleSummary
                role="Lead Software Engineer"
                company="84.51º"
                startDate="Aug 2018"
                endDate="Present"
                synopsis="Providing technical leadership and individual contribution across multiple initiatives. Developing tools ranging from the web UI and provisioning API for a cloud-based data science platform to a DevSecOps framework to enable and accelerate application development."
                accomplishments={[
                  "Led a team of co-ops and contractors in delivering the web UI of an internal data science platform, achieving first business-value projects on platform inside 6 months, and mentoring 2 co-ops into full-time positions",
                  "Launched service and automation tools to collect and assess repository metrics enabling migration of 3K+ repos from on premise to cloud, archival of 15K+ repos to inactive storage, and saving nearly 6 months of manual migration effort",
                  "Instituted component discovery portal documenting 60+ reusable components and their usages, and promoting an innersource contribution model for use by the Engineering function at large",
                  "Engineered a YAML-based, declarative CLI tool for easily stamping out new TeamCity pipelines, reducing pipeline construction time by 80%",
                  "Established template-based Docker image build system for creating secure, enterprise- compliant Docker images and reducing lead time on new image creation by 75%"
                ]}
              />
              <DefaultSpacer />
              <RoleSummary
                role="Senior UI Developer"
                company="84.51º"
                startDate="Jul 2015"
                endDate="Aug 2018"
                synopsis="Spearheaded software development efforts for the R&D Studio team. Created bleeding-edge, highly-personalized customer experiences for voice assistant, augmented reality, virtual reality, web and mobile devices."
                accomplishments={[
                  "Created a category management experience showing that virtual reality could allow a category manager to make edits on a specific shelf in a specific store, and leverage forecast analysis to see impact of potential changes",
                  "Delivered an experience for the Microsoft Hololens demonstrating the opportunity to display data in the real world view of a category manager live in the store",
                  "Devised an augmented reality experience to illustrate how a standard paper weekly ad could be enhanced with user data to create a real-time personalized weekly ad"
                ]}
              />
              <DefaultSpacer />
              <RoleSummary
                role="Consultant, Senior I"
                company="Cardinal Solutions Group"
                startDate="Jan 2013"
                endDate="Jul 2015"
                synopsis="Collaborated with stakeholders within businesses to create or enhance applications and unlock critical business value. Worked with various clients to design, build and document solutions to technical problems."
                accomplishments={[
                  "Programmed flexible, Java-based system for ingesting hundreds of gigabytes of data from multiple sources, and transforming them into personalized weekly ad results delivered to over 40 million customers across the US"
                ]}
              />
            </Section>
            <div className='border-t-2 mb-20 md:hidden'>
              <DefaultSpacer />
              <SecondaryInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Home;