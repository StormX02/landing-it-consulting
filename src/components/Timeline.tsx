import { SECTION_IDS } from '@/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Timeline() {
  return (
    <div
      className='card-gradient-border container relative mt-44 w-11/12 px-0 py-3 shadow-2xl backdrop-blur-sm md:py-8 lg:py-10'
      id={SECTION_IDS.TIMELINE}
    >
      <motion.h2
        className='text-center text-2xl font-extrabold uppercase text-primary'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, bounce: 0.5 },
        }}
        viewport={{ once: true }}
      >
        timeline
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, bounce: 0.5, delay: 0.4 },
        }}
        className='relative h-[200px] w-full select-none sm:h-[380px] lg:h-[550px] xl:h-[650px]'
        viewport={{ once: true }}
      >
        <Image src={'/timeline.png'} className='object-cover' fill alt='' />
      </motion.div>
    </div>
  );
}
