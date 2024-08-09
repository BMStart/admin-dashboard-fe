import React from 'react'
import { Typography } from '@/components/ui';

type FormHeaderProps = {
  type: "login" | "register";
};

const FormHeader: React.FC<FormHeaderProps> = (props) => {

  const { type } = props;

  const text = {
    login: {
      title: "Login to your account",
      subtitle: "Enter your email and password below to login",
    },
    register: {
      title: "Create an account",
      subtitle: "Enter your email below to create your account",
    },
  };

  return (
    <div className="flex flex-col space-y-2 text-center">
      <Typography.Title as="h1" className="text-2xl font-semibold tracking-tight">
        {text[type].title}
      </Typography.Title>
      <Typography.Text className="text-sm text-muted-foreground">
        {text[type].subtitle}
      </Typography.Text>
    </div>
  )
}

export default FormHeader;