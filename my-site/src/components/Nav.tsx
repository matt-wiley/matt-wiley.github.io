interface INavItem {
  text: string,
  link: string
}

interface INavProps{
  navItems: INavItem[]
}

const Nav = (props: INavProps) => {

  const containerStyle = 'w-full flex flex-row justify-start align-middle'
  const linkStyle = 'inline-block p-4'

  return (
    <div className={containerStyle}>
      {
        props.navItems.map((item, index) => {
          return (
            <a href={ '/#'+item.link } className={linkStyle} key={index}>{item.text}</a>
          )
        })
      }
    </div>
  );
};

export default Nav;