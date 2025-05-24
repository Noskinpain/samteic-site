import React from 'react';

const SectionHeader = ({
  number = '01',
  title = 'About Me',

}) => {
  return (
    <div className=' text-[#8892b0] items-center gap-2'>
      <p className='text-2xl font-bold brightness-150 pb-10'>
        <span className='text-[#64ffda] font-mono text-lg select-none'>{number}. </span>
        {title}
      </p>
     
    </div>
  );
};

export default SectionHeader;
