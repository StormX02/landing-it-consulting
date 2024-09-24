import { SECTION_IDS } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Organizer = () => {
  return (
    <div className='container mt-40' id={SECTION_IDS.ORGANIZERS}>
      <motion.h2
        className='flex w-full justify-center text-2xl font-extrabold uppercase text-primary'
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            bounce: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        Organizers
      </motion.h2>

      <div className='flex flex-col gap-20'>
        <div className='mt-20 grid grid-cols-3 gap-x-10 gap-y-10'>
          <motion.div
            className='card-gradient-border relative col-span-3 flex h-32 min-w-52 items-center justify-center shadow-lg sm:h-56 md:col-span-1 md:max-w-96'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.2 },
            }}
            viewport={{ once: true }}
          >
            <Image
              src={'/companies/codemely.png'}
              className='object-contain px-6 sm:px-10'
              alt=''
              fill
            />
          </motion.div>
          <div className='col-span-3 md:col-span-2'>
            <motion.p
              className='text-justify text-lg font-light italic leading-[1.3]'
              initial={{
                opacity: 0.2,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, delay: 0.1 },
              }}
              viewport={{ once: true }}
            >
              <span className='font-bold'>Code MeLy</span> is a vibrant IT
              community and launchpad for young talents, especially female
              programmers. Our mission is to foster a dynamic IT GenZ community
              by creating engaging competitions and platforms that enhance
              programming skills and provide top-tier talent for IT projects
              worldwide.
            </motion.p>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-x-10 gap-y-10'>
          <motion.div
            className='card-gradient-border relative col-span-3 flex h-32 min-w-52 items-center justify-center shadow-lg sm:h-56 md:col-span-1 md:max-w-96'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.3, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            <Image
              src={'/companies/netcompany.png'}
              className='object-contain px-6 sm:px-10'
              alt=''
              fill
            />
          </motion.div>
          <div className='col-span-3 md:col-span-2'>
            <motion.p
              className='text-justify text-lg font-light italic leading-[1.3]'
              initial={{
                opacity: 0.2,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.2, delay: 0.2 },
              }}
              viewport={{ once: true }}
            >
              <span className='font-bold'>Netcompany</span> is an IT consulting
              firm founded in 2000 in Copenhagen, Denmark. The company plays a
              crucial role in digital transformation for both public and private
              sectors. Netcompany believes that technology can have a positive
              impact on society and business, and continuously seeks talented IT
              professionals, offering career development opportunities.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizer;
