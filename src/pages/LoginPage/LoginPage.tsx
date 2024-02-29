import { Link } from "react-router-dom";
import { AppHeading } from "../../components/Typography/AppHeading";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { SCLoginPage } from "./LoginPage.styled";
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";



interface ISubmitProps {
  useremail: string;
  usepassword: string;
}
const loginFormSchema = yup.object({
  useremail: yup.string().email().required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержать как минимум 4 символа!")
    .required("Обязательное поле!"),
});
const onLoginSubmit: SubmitHandler<ISubmitProps> = () => {
   
}
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
  return (
    <SCLoginPage>
      <AppHeading headingText="Авторизация" headingType="h1" />
      <form action="#">
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

        <Link to={"/main"}>
          <AppButton buttonType="submit" buttonText="Войти" />
        </Link>
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo linkPath="/registration" />
    </SCLoginPage>
  );
};
