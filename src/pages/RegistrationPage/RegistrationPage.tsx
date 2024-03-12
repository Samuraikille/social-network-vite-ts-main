import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AppHeading } from "../../components/Typography/AppHeading";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { LoginInfo } from "../../components/LoginInfo/LoginInfo";
import { SCRegistrationPage } from "./RegistrationPage.styled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../store/api/authApi";
import { useEffect } from "react";
interface ISubmitProps {
  username: string;
  userEmail: string;
  userPhone: string;
  userPassword: string;
  userCity: string;
}
const registrationFormSchema = yup.object({
  username: yup.string().required("Введите имя"),
  userEmail: yup
    .string()
    .email("Введите почту в правельном формате")
    .required("Введите почту"),
  userPhone: yup.string().required("Введите номер телефона"),
  userPassword: yup
    .string()
    .min(8, "Введите должен содержать как минимум 8 символа!")
    .required("Введите пароль"),
  userCity: yup.string().required("Введите город"),
});

export const RegistrationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      userCity: "",
      userEmail: "",
      username: "",
      userPassword: "",
      userPhone: "",
    },
  });

  const navigate = useNavigate();
  const [registerUser, { data }] = useRegisterUserMutation();
  const onRegistrationSubmit: SubmitHandler<ISubmitProps> = (data) => {
    // if (data) {
    //   navigate("/");
    // } else {
    //   navigate("/registration");
    // }

    registerUser({
      email: data.userEmail,
      password: data.userPassword,
      name: data.username,
      phone_number: data.userPhone,
      user_city: data.userCity,
    });
  };
  useEffect(() => {
    if (data?.user_id) {
      navigate("/")
    } else {
      navigate("/registration")
    }
  }, [data]);
  return (
    <SCRegistrationPage>
      <AppHeading headingText="Регистрация" headingType="h1" />
      <form action="#" onSubmit={handleSubmit(onRegistrationSubmit)}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Введите имя"
              inputType="text"
              isError={errors.username ? true : false}
              errorMessage={errors.username?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="userEmail"
          control={control}
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Введите почту"
              inputType="text"
              isError={errors.userEmail ? true : false}
              errorMessage={errors.userEmail?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="userPhone"
          control={control}
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Введите номер телефона"
              inputType="text"
              isError={errors.username ? true : false}
              errorMessage={errors.userPhone?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="userPassword"
          control={control}
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Введите пароль"
              inputType="text"
              isError={errors.userPassword ? true : false}
              errorMessage={errors.userPassword?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="userCity"
          control={control}
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Введите город"
              inputType="text"
              isError={errors.userCity ? true : false}
              errorMessage={errors.userCity?.message}
              {...field}
            />
          )}
        />
        <AppButton buttonText="Зарегистрироваться" buttonType="submit" />
      </form>
      <LoginInfo linkPath="/" />
    </SCRegistrationPage>
  );
};
