import { Link } from "react-router-dom";
import { AppHeading } from "../../components/Typography/AppHeading";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { SCLoginPage } from "./LoginPage.styled";

export const LoginPage = () => {
  return (
    <SCLoginPage>
      <AppHeading headingText="Авторизация" headingType="h1" />
      <form action="#">
        <AppInput inputPlaceholder="Номер телефона" inputType="tel" />
        <AppInput inputPlaceholder="Пароль" inputType="password" />
        <Link to={"/main"}>
          <AppButton buttonText="Войти" />
        </Link>
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo linkPath="/registration"/>
    </SCLoginPage>
  );
};