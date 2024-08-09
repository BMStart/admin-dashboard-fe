import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Typography from '@/components/ui/typography';
import { DotsWave } from '@/components/animation';
import { SatelliteRoundedIcon } from '@/components/icons';

const LoadingText: React.FC = () => {
  const dotDelays = [0.2, 0.4, 0.6];

  return (
    <div className="flex text-gray-500 dark:text-gray-400 text-[1.5rem]">
      <Typography.Text className="text-inherit">Loading</Typography.Text>
      {dotDelays.map((delay, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay }}
        >
          <Typography.Text className="text-inherit">.</Typography.Text>
        </motion.div>
      ))}
    </div>
  );
};

const Full: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-8 w-8 animate-spin text-gray-500 dark:text-gray-400" />
        {children}
      </div>
    </div>
  );
};

const LoadingFull: React.FC = () => {
  return (
    <Full>
      <LoadingText />
    </Full>
  );
};

const LoadingWelcome: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, .5, 1] }}
      transition={{ duration: 1.5 }}
    >
      <Full>
        <motion.div
          initial={{ scale: 1, rotate: 0 }}
          animate={{ scale: [1.1, 1, 0.9, 1], rotate: [0, -8, 0, 8, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <SatelliteRoundedIcon className="w-20 h-20 mb-1 dark:text-gray-100" />
        </motion.div>
        <DotsWave dots={4} />
      </Full>
    </motion.div>
  );
};

const Loading = {
  Full: LoadingFull,
  Text: LoadingText,
  Welcome: LoadingWelcome,
};

export default Loading;