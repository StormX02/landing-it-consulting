import React from 'react';
import GradualSpacing from './ui/gradual-spacing';
import { SECTION_IDS } from '@/constants';
import RulesMobile from '@/assets/RulesMobile';
import RulesDesktop from '@/assets/RulesDesktop';

const Rules = () => {
  return (
    <div
      className='card-gradient-border container mt-44 w-11/12 rounded-lg py-3 shadow-2xl backdrop-blur-sm sm:px-10 md:px-20 md:py-8 lg:py-10'
      id={SECTION_IDS.RULES}
    >
      <div className='grid grid-cols-4 gap-y-4'>
        <div className='col-span-4 flex max-lg:justify-center lg:col-span-1'>
          <GradualSpacing
            text='Rules'
            className='text-2xl font-extrabold uppercase !text-primary'
          />
        </div>
        <div className='col-span-4 lg:col-span-3'>
          <p className='text-justify text-base italic'>
            &quot;Teams select a case study from the challenge provided by the
            organizers, then analyze and design ideas and solutions to address
            the identified issues. Awards will be given to ideas that are
            feasible, creative, and exemplify strong teamwork.&quot;
          </p>
        </div>
      </div>
      <div className='pointer-events-none relative h-max w-full select-none'>
        <RulesDesktop className='hidden w-full sm:block' />
        <RulesMobile className='w-full sm:hidden' />
      </div>
    </div>
  );
};

export default Rules;
