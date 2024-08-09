import React from 'react';
import { motion } from 'framer-motion';
import { FlipWords } from '@/components/ui/flip-words';
import Typography from '@/components/ui/typography';
import { Link, useLocation } from 'react-router-dom';

const LoginLeft = () => {
  const location = useLocation();
  const words = ["communicate", "collaborate", "manage"];
  return (
    <motion.div
      className="flex justify-center items-center px-4"
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Typography.Text className="text-4xl font-semibold mx-auto text-neutral-600 dark:text-neutral-400">
        Now, you can
        <FlipWords words={words} className='font-bold' /> <br />
        your money from any corner of the world!
      </Typography.Text>
    </motion.div>
  );
};

const PrivacyPolicy: React.FC = () => {
  return (
    <Typography.Text className="px-8 text-center text-sm text-muted-foreground">
      By clicking continue, you agree to our{" "}
      <Link
        to="/tens"
        className="underline underline-offset-4 hover:text-primary"
      >
        Terms of Service
      </Link>{" "}
      and{" "}
      <Link
        to="/privacy"
        className="underline underline-offset-4 hover:text-primary"
      >
        Privacy Policy
      </Link>
      .
    </Typography.Text>
  );
};

const AuthBox = {
  LoginLeft,
  PrivacyPolicy,
};

export default AuthBox;
