import React, { useState } from "react"
import { motion } from "framer-motion"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { cn } from "@/lib/utils"
import { Button, Form, FormField, FormItem, Input, Label, Typography } from "@/components/ui"
import { LoadingIcon, MailIcon, ViewIcon, ViewOffIcon } from "@components/icons"
import AuthBox from "@/components/authentication/auth-box"
import FormFooter from "./form-footer"
import FormHeader from "./form-header"

interface UserRegisterFormProps extends React.HTMLAttributes<HTMLDivElement> { }

const formSchema = z.object({
  first_name: z.string().min(2).max(100),
  last_name: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(6).max(100),
  repeat_password: z.string().min(6).max(100),
});

const UserRegisterForm = ({ className, ...props }: UserRegisterFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      repeat_password: "",
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
      <FormHeader type="register" />

      <div className={cn("grid gap-6", className)} {...props}>
        <Form form={form} onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
          <div className="grid gap-2 grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <FormField
                control={control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <Label className="sr-only" htmlFor="first_name">
                      First Name
                    </Label>
                    <Input
                      id="first_name"
                      placeholder="Joe"
                      type="text"
                      autoCapitalize="none"
                      autoCorrect="off"
                      disabled={isLoading}
                      {...field}
                    />
                    {errors.first_name && (
                      <Typography.Text type="danger" className="text-sm text-red-500 dark:text-red-700">
                        {errors.first_name.message}
                      </Typography.Text>
                    )}
                  </FormItem>
                )}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <FormField
                control={control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <Label className="sr-only" htmlFor="last_name">
                      Last Name
                    </Label>
                    <Input
                      id="last_name"
                      placeholder="Doe"
                      type="text"
                      autoCapitalize="none"
                      autoCorrect="off"
                      disabled={isLoading}
                      {...field}
                    />
                    {errors.last_name && (
                      <Typography.Text type="danger" className="text-sm text-red-500 dark:text-red-700">
                        {errors.last_name.message}
                      </Typography.Text>
                    )}
                  </FormItem>
                )}
              />
            </motion.div>
          </div>

          <motion.div
            className="grid gap-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
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
                    placeholder="joedoe@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    {...field}
                  />
                  {errors.email && (
                    <Typography.Text type="danger" className="text-sm text-red-500 dark:text-red-700">
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
            transition={{ delay: 0.6, duration: 0.3 }}
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
                    <Typography.Text type="danger" className="text-sm text-red-500 dark:text-red-700">
                      {errors.password.message}
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
            transition={{ delay: 0.8, duration: 0.3 }}
          >
            <FormField
              control={control}
              name="repeat_password"
              render={({ field }) => (
                <FormItem>
                  <div className="relative flex items-center justify-between w-full">
                    <Input
                      type={isPasswordVisible ? "text" : "password"}
                      id="repeat_password"
                      placeholder="Repeat password"
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
                  {errors.repeat_password && (
                    <Typography.Text type="danger" className="text-sm text-red-500 dark:text-red-700">
                      {errors.repeat_password.message}
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
            transition={{ delay: 1, duration: 0.3 }}
          >

            <Button disabled={isLoading} className="w-full" type="submit">
              {isLoading ? (
                <LoadingIcon className="mr-2 h-4 w-4 animate-spin text-white dark:text-black" />
              ) : (
                <MailIcon className="mr-2 h-4 w-4 text-white dark:text-black" />
              )}
              Sign Up with Email
            </Button>

          </motion.div>
        </Form>
        <motion.div
          className="grid gap-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.3 }}
        >
          <FormFooter isLoading={isLoading} />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.3 }}
      >
        <AuthBox.PrivacyPolicy />
      </motion.div>
    </div>
  )
}

export default UserRegisterForm;
