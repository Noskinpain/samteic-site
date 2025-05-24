import { useState, useEffect } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";
import logo from './assets/logo.png';
import profile from './assets/profile.JPG';
import profile2 from './assets/profile2.JPG';
import { IoMdPlay } from "react-icons/io";
import Button from './components/Button';
import { FiGithub, FiInstagram, FiLinkedin, FiCodepen, FiTwitter } from "react-icons/fi";
import SectionHeader from './components/SectionHeader';
import Building from './components/Building';
import ProjectsSection from './components/ProjectsSection';
import { Link } from 'react-scroll';

function App() {

  // State to manage the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);
  // State to manage the visibility of the navbar
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Effect to handle scroll events and toggle navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and not at the very top
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);


  // Navigation links for the navbar
  const navLinks = [
    { id: '01', label: 'About', target: 'about' },
    { id: '02', label: 'Experience', target: 'experience' },
    { id: '03', label: 'Work', target: 'work' },
    { id: '04', label: 'Contact', target: 'contact' },
  ];

  const technologies = [
    { id: "01", label: "JavaScript" },
    { id: "02", label: "React" },
    { id: "03", label: "Node.js" },
    { id: "04", label: "TypeScript" },
    { id: "05", label: "MongoDB" },
    { id: "06", label: "Nextjs" },
  ]

  const renderedTechStack = technologies.map((tech) => (
    <div key={tech.id} className='text-[#8892b0] text-sm'>
      <p className=' select-none flex items-center gap-2'>
        <IoMdPlay className='text-[7px] text-[#64ffda]' />
        {tech.label}
      </p>

    </div>
  ));

  // Render navigation links dynamically
  const renderedNavLinks = navLinks.map((link) => (
    <Link
      key={link.id}
      to={link.target} // target section ID
      smooth={true}
      duration={500}
      offset={-50} // optional: to handle fixed navbar offset
      onClick={() => setIsOpen(false)}
      className="cursor-pointer text-[#a8b2d1] hover:text-[#64ffda] transition-colors duration-200"
    >
      <span className="text-[#64ffda] select-none font-mono">{link.id}</span>. {link.label}
    </Link>
  ));


  // Function to toggle the mobile menu
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle email link click
  const handleClick = () => {
    window.location.href = "mailto:ebukasam108@gmail.com";
  };

  return (
    <div className='bg-[#0a192f]  relative px-6 md:px-12'>

      {/* Desktop Navbar */}
      <nav
        className={`fixed w-full shadow-sm bg-[#0a192f] z-50 pt-4 top-0 left-0 md:pl-12 pl-6 md:pr-12 transition-transform duration-300 z-100 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
          } `}
      >

        <div className='hidden md:flex items-center justify-between text-sm'>
          <img src={logo} alt="logo" className='w-20 h-20 hidden md:block relative top-0 left-0' />
          <div className='flex gap-8 items-center'>
            {renderedNavLinks}
            {/* Resume button */}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button text="Resume" className="py-2 px-4" />
            </a>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className='flex justify-between items-center md:hidden'>
          <img src={logo} alt="logo" className='w-12 h-12 relative top-0 left-0' />
          <div className='block md:hidden text-3xl text-[#64ffda] absolute right-0 z-80 pr-6'>
            {/* Toggle between menu open and close icons */}
            {isOpen ? (
              <RiCloseLargeFill className='cursor-pointer' onClick={handleMenuToggle} />
            ) : (
              <HiMenuAlt3 className='cursor-pointer' onClick={handleMenuToggle} />
            )}
          </div>
        </div>
      </nav>



      {/* Mobile Menu */}
      <div className={`${isOpen ? "translate-x-0 " : "translate-x-full"} z-10 transition-transform 
      duration-300 flex flex-col items-center font-mono text-lg gap-12 pt-24 md:hidden bg-[#0f213c] fixed h-full w-4/5 top-0 right-0`}>
        {renderedNavLinks}
        {/* Resume button in mobile menu */}
        <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
        <Button text="Resume" className="py-2 px-4" />
        </a>
      </div>





      {/* Main Content */}
      <div className='pt-12 md:flex md:justify-between'>

        {/* Social Media Links (Left Sidebar) */}
        <div className='md:flex hidden items-center flex-col text-[#8892b0] text-xl gap-6 justify-end fixed bottom-0 left-0 pl-12'>
          <FiGithub />
          <FiInstagram />
          <FiTwitter />
          <FiLinkedin />
          <FiCodepen />
          {/* Vertical line */}
          <div className="w-px bg-[#8892b0] h-24"></div>
        </div>

        {/* Introduction Section */}
        <div className='md:px-16 xl:px-36 lg:px-24 pt-16 md:mt-0'>
          <p className='text-[#64ffda] font-mono text-sm md:text-lg tracking-wide'>Hi, my name is</p>
          <div className='text-[38px] md:text-[42px] font-sans lg:text-[60px] font-bold leading-tight pt-4'>
            <h1 className='text-[#a8b2d1] brightness-125'>Ofordile Samuel.</h1>
            <h1 className='text-[#8892b0]'>I build things for the web.</h1>
          </div>
          <p className='text-[#8892b0] pt-6 sm:w-[30rem] font-sans'>
            I’m a frontend-focused developer building fast, responsive websites with React and Tailwind.
            I help brands and creators turn ideas into clean, scalable digital products.
            Currently focused on mastering full-stack development and <span className='text-[#64ffda]'>launching real-world projects</span>.
          </p>
          {/* Call-to-action button */}
          <Button text="Let’s Work Together" className="mt-16 text-sm py-4 px-6 tracking-widest" onClick={handleClick} />

          {/* About Me Section */}
          <section id='about'>
            <div className='pt-36 flex flex-col lg:flex-row w-full gap-0'>
              <div className='w-full text-[#8892b0] text-md'>
                {/* Section Header */}
                <SectionHeader number="01" title="About Me" />
                <div className='w-full lg:w-4/5'>
                  <p className=''>
                    Hello! My name is Samuel, and I love building useful and creative things
                    for the web. My journey into web development began in 2023 when I started
                    exploring how to create digital products and monetize online.
                    Turns out figuring out how to build faceless brands with code taught me
                    a lot about frontend development and problem-solving!
                  </p>
                  <p className='mt-5'>
                    Fast-forward to today, and I’ve been building in public from launching
                    <span className='text-[#64ffda]'> solo web projects, AI-powered tools,
                      and monetizable digital products</span> to growing a presence on
                    <span className='text-[#64ffda]'> X by sharing dev insights and real-time
                      progress</span>. My current focus is crafting clean, scalable web
                    experiences with modern stacks like React, Next.js, and Tailwind CSS.
                  </p>

                  <p className='mt-5'>
                    I’m currently focused on sharpening my full-stack skills through real-world
                    projects and sharing what I learn along the way, from building web apps
                    with modern frameworks to exploring the intersection of AI and development.
                  </p>

                  <p className='mt-5'>
                    Here are a few technologies I’ve been working with recently:
                  </p>
                  <div className='grid grid-cols-2 gap-2 mt-5 w-96'>
                    {renderedTechStack}
                  </div>
                </div>
              </div>
              {/* Placeholder content */}

              <div className="group flex relative mt-24 left-12 md:left-0 md:right-16 border-2
               border-[#64ffda] rounded-md text-white transition-transform 
               duration-300 transform hover:-translate-y-2 hover:-translate-x-2 
               w-[18rem] h-[18rem] lg:w-[28rem] lg:h-[18rem]">
                {/* Shared size class applied to wrapper */}

                {/* First Image (default) */}
                <img
                  src={profile2}
                  alt="profile"
                  className="absolute right-4 bottom-4 object-cover rounded-md transition-all duration-300 transform opacity-100 group-hover:opacity-0 group-hover:translate-x-2 group-hover:translate-y-2 w-full h-full"
                />

                {/* Second Image (on hover) */}
                <img
                  src={profile}
                  alt="profile-hover"
                  className="absolute right-4 bottom-4 object-cover rounded-md transition-all duration-300 transform opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:translate-y-2 w-full h-full"
                />
              </div>

            </div>
          </section>

          {/* Experience Section */}
          <section className='py-24' id='experience'>

            {/* <SectionHeader number="02" title="What I’m Building" /> */}

            <Building />
          </section>

          <section id='work'>
            <ProjectsSection />
          </section>

          <section className='py-36 text-center text-[#64ffda]' id='contact'>
            <p className='font-mono'>04. What’s Next?</p>
            <h1 className='text-[#a8b2d1] text-3xl md:text-5xl brightness-125 font-bold mt-4'>Get In Touch</h1>
            <p className='text-[#8892b0]  mt-6 sm:px-10 md:px-28 lg:px-48'>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <Button text="Say Hello" className="mt-16 text-sm py-4 px-6 tracking-widest" onClick={handleClick} />
          </section>
          <div className='flex md:hidden items-center pb-10 text-[#8892b0] brightness-125 text-xl gap-6 justify-center'>
            <FiGithub className='hover:text-[#64ffda] cursor-pointer' />
            <FiInstagram className='hover:text-[#64ffda] cursor-pointer' />
            <FiTwitter className='hover:text-[#64ffda] cursor-pointer' />
            <FiLinkedin className='hover:text-[#64ffda] cursor-pointer' />
            <FiCodepen className='hover:text-[#64ffda] cursor-pointer' />
          </div>
          <div className='text-center cursor-pointer hover:text-[#64ffda] pb-5 md:pb-10 text-[#8892b0] text-[12px] font-mono'>
            <p>Designed & Built by Samteic</p>
            <p className=''>© 2023</p>

          </div>
        </div>

        {/* Email (Right Sidebar) */}
        <div className='md:flex hidden items-center flex-col text-[#8892b0] text-2xl gap-6 justify-end fixed bottom-0 right-0 pr-12'>
          <p className="writing-mode-vertical-rl tracking-widest font-mono text-sm">ebukasam108@gmail.com</p>
          {/* Vertical line */}
          <div className="w-px bg-[#8892b0] h-24"></div>
        </div>
      </div>
    </div>
  );
}

export default App;