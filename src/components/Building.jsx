import React, {useState} from 'react'
import SectionHeader from './SectionHeader';


const projects = [
    {
      id: 1,
      label: '🛠️ DigitalRichAI',
      subLabel: 'Founder & Content Creator',
      date: 'Feb 2025 – Present',
      content: [
        'Building a faceless AI brand that shares daily short-form content around AI tools, smart money strategies, and digital products. ',
        'Selling viral content kits and digital products for creators and entrepreneurs. ',
        'Growing presence on Instagram, X (Twitter), and Pinterest by creating high-value, niche content consistently. ',
        'Leveraging AI tools like InVideo, ChatGPT, and Pictory for scalable content creation. ',
      ],
    },                      
    {
        id: 2,
        label: '💻 Self-Taught Software Developer',
        subLabel: 'Solo Dev & Public Learner',
        date: 'Jan 2023 – Present',
        content: [
          'Learning React, Redux, Tailwind CSS, and building real projects weekly. ',
          'Writing Dev Notes to document progress and help others follow the journey. ',
          'Focused on mastering full-stack development and launching micro-SaaS tools. ',
          'Sharing the process daily on X to grow an audience and network with other devs.',
        ],
      },  
      {
        id: 3,
        label: '💡 Current Focus',
        subLabel: '',
        date: '',
        content: [
          'Building a portfolio of mini-projects to showcase practical skills. ',
          'Growing on X by teaching daily lessons from my coding and brand-building journey. ',
          'Grew presence on Instagram, X (Twitter), and Pinterest by creating high-value, niche content consistently. ',
          'Preparing to launch my first public SaaS micro-product.',
        ],
      },  
  ];

  const renderedItems = projects.map((project) => (
    <div className='flex  gap-10' key={project.id}>
        {project.label}
    </div>     
  ))
const Building = () => {
    const [activeId, setActiveId] = useState(1);
  return (
    <div className='w-full max-w-4xl mx-auto py-10'>
    {/* Header */}
    <SectionHeader number="02" title="What I'm Building"/>

    {/* Tab Buttons */}
    <div className='flex gap-4 justify-center mb-6 flex-wrap'>
      {projects.map((project) => (
        <button
          key={project.id}
          onClick={() => setActiveId(project.id)}
          className={`px-4 py-2 rounded-md border text-sm font-semibold transition duration-300
            ${
              activeId === project.id
                ? 'bg-[#64ffda] text-[#0a192f]'
                : 'border-[#64ffda] text-[#64ffda] hover:bg-[#233554] hover:text-white'
            }`}
        >
          {project.label}
        </button>
      ))}
    </div>

    {/* Content Area */}
    <div className='text-center text-[#ccd6f6] bg-[#112240] p-6 rounded-lg shadow-lg min-h-[120px] transition-all duration-300'>
      <p className='text-sm font-mono leading-relaxed '>
        {projects.find((p) => p.id === activeId).content}
      </p>
    </div>
  </div>
  )
}

export default Building