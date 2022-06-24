import { AuthPage, LoginForm } from "./Loginform.styled";
import { Alert, Button, Checkbox, Divider, Form, Input } from "antd";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  })
  .required();

const Loginform = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <AuthPage>
      <LoginForm>
        <Divider>Log In</Divider>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Item
            label="Email"
            name="email"
            required={true}
            wrapperCol={{ span: 24 }}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => <Input {...field} />}
            />

            {errors.email && (
              <Alert type="error" message={errors.email?.message} />
            )}
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            required={true}
            wrapperCol={{ span: 24 }}
          >
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input.Password {...field} />}
            />

            {errors.password && (
              <Alert type="error" message={errors.password?.message} />
            )}
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </form>
      </LoginForm>
    </AuthPage>
  );
};

export default Loginform;
