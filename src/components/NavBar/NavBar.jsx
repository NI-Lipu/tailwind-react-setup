const NavBar = () => {
  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <nav>
      <ul className='flex gap-10'>
        {
            navItems.map(item=><li><a href={item.path}>{item.name}</a></li>)
        }
      </ul>

      {/* <ul className='flex gap-6'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul> */}
    </nav>
  );
};

export default NavBar;
