import { AppHeading } from "../../components/Typography/AppHeading";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { SCLoginPage } from "./LoginPage.styled";
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLoginUserMutation } from "../../store/api/authApi";

interface ISubmitProps {
  useremail: string;
  userpassword: string;
}
const loginFormSchema = yup.object({
  useremail: yup
    .string()
    .email("Введите почту в правельном формате")
    .required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(8, "Пароль должен содержать как минимум 8 символа!")
    .required("Обязательное поле!"),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
  });

  const navigate = useNavigate();
  const [loginUser, { data }] = useLoginUserMutation();
  const onLoginSubmit: SubmitHandler<ISubmitProps> = (data) => {
    loginUser({ email: data.useremail, password: data.userpassword });
  };

  useEffect(() => {
    console.log(data);

    if (data?.user_id) {
      navigate("/profile");
      localStorage.setItem("user_id", `${data?.user_id}`)
    }
  }, [data, navigate]);
  return (
    <SCLoginPage>
      <AppHeading headingText="Авторизация" headingType="h1" />
      <form action="#" onSubmit={handleSubmit(onLoginSubmit)}>
        <Controller
          name="useremail"
          control={control}
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Введите почту"
              inputType="text"
              isError={errors.useremail ? true : false}
              errorMessage={errors.useremail?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="userpassword"
          control={control}
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Пароль"
              inputType="password"
              isError={errors.userpassword ? true : false}
              errorMessage={errors.userpassword?.message}
              {...field}
            />
          )}
        />

        <AppButton buttonType="submit" buttonText="Войти" />
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo linkPath="/registration" />
    </SCLoginPage>
  );
};
