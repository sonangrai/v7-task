import { AuthPage, LoginForm } from "../login/Loginform.styled";
import { Alert, Button, Divider, Form, Input } from "antd";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  email: string;
  username: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    username: yup
      .string()
      .required("No password provided.")
      .min(4, "Password is too short - should be 4 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    password: yup
      .string()
      .required("No password provided.")
      .min(6, "Password is too short - should be 6 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  })
  .required();

const Loginform = ({ authStore, signupDispatch }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    signupDispatch(data);
  };
  return (
    <AuthPage>
      <LoginForm>
        <Divider>Sign Up</Divider>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Item label="Email" required={true} wrapperCol={{ span: 24 }}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <Input {...field} />}
            />

            {errors.email && (
              <Alert type="error" message={errors.email?.message} />
            )}
          </Form.Item>

          <Form.Item label="Username" required={true} wrapperCol={{ span: 24 }}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => <Input {...field} />}
            />

            {errors.username && (
              <Alert type="error" message={errors.username?.message} />
            )}
          </Form.Item>

          <Form.Item label="Password" required={true} wrapperCol={{ span: 24 }}>
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

          {authStore.signupError.length > 0 &&
            authStore.signupError.map((er, i) => (
              <Alert key={`er${i}`} type="error" message={er.message} />
            ))}
          {authStore.signupError.length > 0 && <Divider />}

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={authStore.signing}
            >
              {authStore.signing ? "Signing.." : " Sign Up"}
            </Button>
          </Form.Item>
        </form>
      </LoginForm>
    </AuthPage>
  );
};

export default Loginform;
