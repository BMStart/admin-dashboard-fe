import React, { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button, Form, FormField, FormItem, Input, Label, Typography } from "@/components/ui";
import { LoadingIcon, MailIcon, ViewIcon, ViewOffIcon } from "@components/icons";
import AuthBox from "@/components/authentication/auth-box";
import FormFooter from "./form-footer";
import FormHeader from "./form-header";

interface UserLoginFormProps extends React.HTMLAttributes<HTMLDivElement> { }

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

const UserLoginForm = ({ className, ...props }: UserLoginFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, control, formState: { errors } } = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  const handlerViewPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px] px-1">
      <FormHeader type="login" />

      <div className={cn("grid gap-6", className)} {...props}>
        <Form form={form} onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
          <div className="grid gap-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label className="sr-only" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isLoading}
                      {...field}
                    />
                    {errors.email && (
                      <Typography.Text className="text-red-500 dark:text-red-700 text-sm">
                        {errors.email.message}
                      </Typography.Text>
                    )}
                  </FormItem>
                )}
              />
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative flex items-center justify-between w-full">
                      <Input
                        type={isPasswordVisible ? "text" : "password"}
                        id="password"
                        placeholder="Enter password"
                        className="pr-10"
                        {...field}
                      />
                      <Button
                        variant="ghost"
                        type="button"
                        size="icon"
                        onClick={handlerViewPassword}
                        className="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-full text-gray-500"
                      >
                        {isPasswordVisible ? (
                          <ViewIcon className="h-4 w-4 text-inherit" />
                        ) : (
                          <ViewOffIcon className="h-4 w-4 text-inherit" />
                        )}
                        <span className="sr-only">Toggle password visibility</span>
                      </Button>
                    </div>

                    {errors.password && (
                      <Typography.Text className="text-red-500 dark:text-red-700 text-sm">
                        {errors.password.message}
                      </Typography.Text>
                    )}
                  </FormItem>
                )}
              />

            </motion.div>

            <motion.div
              className="grid gap-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <Button disabled={isLoading} type="submit">
                {isLoading ? (
                  <LoadingIcon className="mr-2 h-4 w-4 animate-spin text-white dark:text-black" />
                ) : (
                  <MailIcon className="mr-2 h-4 w-4 text-white dark:text-black" />
                )}
                Login to your account
              </Button>
            </motion.div>
          </div>
        </Form>
        <motion.div
          className="grid gap-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          <FormFooter isLoading={isLoading} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.3 }}
      >
        <AuthBox.PrivacyPolicy />
      </motion.div>
    </div>
  );
};

export default UserLoginForm;
