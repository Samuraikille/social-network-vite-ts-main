import { AppHeading } from "../../components/Typography/AppHeading";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { SCLoginPage } from "./LoginPage.styled";
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { useNavigate } from "react-router-dom";

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
  const onLoginSubmit: SubmitHandler<ISubmitProps> = (data) => {
    if (data) {
      navigate("/main");
    } else {
      navigate("/");
    }
    console.log(data);
  };
  return (
    <SCLoginPage>
      <AppHeading headingText="Авторизация" headingType="h1" />
      <form action="#" onSubmit={handleSubmit(onLoginSubmit)}>
        <Controller
          name="useremail"
          control={control}
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Номер телефона"
              inputType="tel"
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
