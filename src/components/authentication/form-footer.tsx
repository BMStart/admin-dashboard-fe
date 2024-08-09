import React from 'react'

import { Button } from '@/components/ui'
import { GithubIcon, GoogleIcon, LoadingIcon, NewTwitterRectangleIcon } from '@/components/icons'

type FormFooterProps = {
  isLoading?: boolean;
}

const FormFooter: React.FC<FormFooterProps> = (props) => {

  const { isLoading } = props;

  return (
    <>
      <div className="relative mb-3">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <Button variant="outline" type="button" disabled={isLoading}>
          {isLoading ? (
            <LoadingIcon className="mr-2 h-4 w-4 animate-spin text-black dark:text-white" />
          ) : (
            <GoogleIcon className="mr-2 h-4 w-4 text-black dark:text-white" />
          )}{" "}
          Google
        </Button>
        <Button variant="outline" type="button" disabled={isLoading}>
          {isLoading ? (
            <LoadingIcon className="mr-2 h-4 w-4 animate-spin text-black dark:text-white" />
          ) : (
            <GithubIcon className="mr-2 h-4 w-4 text-black dark:text-white" />
          )}{" "}
          GitHub
        </Button>
        <Button variant="outline" type="button" disabled={isLoading}>
          {isLoading ? (
            <LoadingIcon className="mr-2 h-4 w-4 animate-spin text-black dark:text-white" />
          ) : (
            <NewTwitterRectangleIcon className="mr-2 h-4 w-4 text-black dark:text-white" />
          )}{" "}
          Twitter
        </Button>
      </div>
    </>
  )
}

export default FormFooter;