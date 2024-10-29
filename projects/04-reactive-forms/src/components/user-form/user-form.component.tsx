import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { schema } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../form-fields";

export type UserFormValues = z.infer<typeof schema>;
const defaultValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}

export const UserForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<UserFormValues>(
        { 
            resolver: zodResolver(schema),
            defaultValues
        }
    );

  const onSubmit: SubmitHandler<UserFormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        name="name"
        label="Name"
        control={control}
        type="text"
        error={errors.name}
      />
      <InputField
        name="email"
        label="Email"
        control={control}
        type="text"
        error={errors.email}
      />
      <InputField
        name="password"
        label="Password"
        control={control}
        type="password"
        error={errors.password}
      />
      <InputField
        name="confirmPassword"
        label="Confirm Password"
        control={control}
        type="password"
        error={errors.confirmPassword}
      />
      <button type="submit"> Submit </button>
    </form>
  );
};
