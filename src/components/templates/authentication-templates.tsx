import React from 'react';
import { motion } from 'framer-motion';
import { HeroHighlight } from '@/components/ui/hero-highlight';
import { BriefcaseDollarIcon } from '@/components/icons';
import { FlipWords } from '@/components/ui/flip-words';
import { ScrollArea } from '@/components/ui/scroll-area';
import Typography from '@/components/ui/typography';

import { Link, useLocation } from 'react-router-dom'

import { cn } from '@/lib/utils'
import { buttonVariants } from "@/components/ui/button"
import { ModeToggle } from '../shader/theme/theme-toggle'
import { LoginIcon, PermanentJobIcon } from '../icons'
import { LOGIN_PATH, REGISTER_PATH } from '@/utils/paths'
import { UserLoginForm, UserRegisterForm } from '@/components/authentication';
import { useMediaQuery, useElementOffset } from '@/hooks';
import { breakpoints } from '@/utils/constants';


type AuthenticationLayoutProps = {
  infoBox: React.ReactNode;
};

const AuthenticationTemplates: React.FC<AuthenticationLayoutProps> = (props) => {
  const { infoBox } = props;
  const location = useLocation();

  const smHeight = useMediaQuery({ maxHeight: breakpoints.sm });
  const { offsetTop, elementRef } = useElementOffset();
  const boxHeight = `calc(95vh - ${offsetTop}px)`;

  const words = ["F.M.C. Inc", "2024", "OprDan"];

  return (
    <>
      <motion.div
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 50
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{ duration: 0.6 }}
        className={cn(
          'absolute top-0 flex justify-between p-9 w-full lg:w-[50%] sm:w-[100%] z-10',
          location.pathname === REGISTER_PATH ? 'left-0' : 'right-0',
        )}
      >
        <Link
          to={location.pathname === REGISTER_PATH ? LOGIN_PATH : REGISTER_PATH}
          className={cn(
            buttonVariants({ variant: "ghost" }),
          )}
        >
          {location.pathname === REGISTER_PATH
            ? <LoginIcon className='text-inherit' />
            : <PermanentJobIcon className='text-inherit' />
          }
          <Typography.Text className="ml-2">
            {location.pathname === REGISTER_PATH ? 'Login' : 'Register'}
          </Typography.Text>
        </Link>
        <ModeToggle />
      </motion.div>

      <div className="container relative h-[100vh] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <HeroHighlight containerClassName={
          cn(
            "h-full hidden lg:flex",
            location.pathname === REGISTER_PATH ? "order-2" : "order-1"
          )
        } className="h-full">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden flex-col h-full justify-between text-white lg:flex p-10"
          >
            <div className="flex items-center text-lg font-medium">
              <BriefcaseDollarIcon className="text-inherit text-black dark:text-white" />
              <Typography.Title as="h4" className="ml-2 text-black dark:text-white">
                F.M.C. Inc
              </Typography.Title>
            </div>

            {infoBox}

            <Typography.Text className="font-normal text-neutral-700 dark:text-neutral-500 italic">
              (c)
              <FlipWords words={words} className="text-neutral-700 dark:text-neutral-500 italic" />
            </Typography.Text>
          </motion.div>
        </HeroHighlight>

        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}

          className={cn(
            "lg:p-8",
            location.pathname === REGISTER_PATH ? "order-1" : "order-2",
          )}
        >
          <ScrollArea
            ref={elementRef}
            className={cn(
              smHeight ? "pt-16" : "0",
            )}
            style={{ height: smHeight ? boxHeight : 'auto' }}
          >
            {location.pathname === REGISTER_PATH
              ? <UserRegisterForm />
              : <UserLoginForm />
            }
          </ScrollArea>
        </motion.div>
      </div>
    </>
  )
}

export default AuthenticationTemplates;