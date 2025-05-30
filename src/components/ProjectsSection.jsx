import React from 'react';
import SectionHeader from './SectionHeader';

const projects = [
  {
    name: 'QuoteFlow AI',
    emoji: '✨',
    description: 'Inspirational quote generator powered by OpenAI. Lets users generate AI-powered quotes for content inspiration.',
    tech: ['React', 'OpenAI API', 'Tailwind CSS'],
    live: 'https://quote-generatorai.vercel.app', 
    github: 'https://github.com/Noskinpain/quote-generator',  
  },
  {
    name: 'LinkMaster',
    emoji: '🔗',
    description: 'A mini Link-in-Bio tool for creators. Users can create and save custom link pages (like Linktree).',
    tech: ['React', 'Tailwind', 'localStorage'],
    live: 'Coming soon',
    github: 'Coming soon',
  },
  {
    name: 'AuthFlex',
    emoji: '🔐',
    description: 'Authentication UI system with login, signup, and reset. Fully responsive with form validation.',
    tech: ['React', 'Tailwind', 'Formik', 'Yup'],
    live: 'Coming soon',
    github: 'Coming soon',
  },
  {
    name: 'Weather-App',
    emoji: '🌤️',
    description: 'A responsive weather application to display real-time weather data for any location. Includes a search bar, current weather display, and temperature details.',
    tech: ['React', 'Tailwind'],
    live: 'Coming soon',
    github: 'Coming soon',
  },
  {
    name: 'Dev Notes Blog (in progress)',
    emoji: '📘',
    description: 'Personal blog to document your dev journey. Showcases writing, logs, and learnings.',
    tech: ['Next.js', 'MDX', 'Tailwind'],
    live: 'Coming soon',
    github: 'Coming soon',
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4">
      <SectionHeader number="03" title="Some Things I’ve Built" lineWidth="md:max-w-[20rem] max-w-[5rem]" />

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#112240] rounded-lg p-6 shadow-md border border-[#233554]">
            <h3 className="text-xl font-semibold text-[#64ffda] mb-1 flex items-center gap-2">
              <span>{project.emoji}</span> {project.name}
            </h3>
            <p className="text-[#8892b0] mb-2">{project.description}</p>

            <div className="mb-2">
              <span className="text-sm font-mono text-[#64ffda]">Built with:</span>{' '}
              <span className="text-sm text-[#8892b0]">
                {project.tech.join(', ')}
              </span>
            </div>

            <div className="flex gap-4 text-sm mt-3">
              {project.live.startsWith('http') ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64ffda] hover:underline"
                >
                  🔗 Live Site
                </a>
              ) : (
                <span className="text-[#8892b0]">🔗 {project.live}</span>
              )}

              {project.github.startsWith('http') ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64ffda] hover:underline"
                >
                  📂 GitHub
                </a>
              ) : (
                <span className="text-[#8892b0]">📂 {project.github}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
