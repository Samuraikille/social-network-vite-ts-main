import { Link } from "react-router-dom";
import { AppHeading } from "../../components/Typography/AppHeading";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { LoginInfo } from "../../components/LoginInfo/LoginInfo";
import { SCRegistrationPage } from "./RegistrationPage.styled";

export const RegistrationPage = () => {
  return (
    <SCRegistrationPage>
      <AppHeading headingText="Регистрация" headingType="h1" />
      <form action="#">
        <AppInput inputPlaceholder="Имя и фамилия" inputType="text" />
        <AppInput inputType={"tel"} inputPlaceholder={"Номер телефона"} />
        <AppInput inputType={"password"} inputPlaceholder={"Пароль"} />
        <Link to={"/main"}>
          <AppButton buttonText="Зарегистрироваться" buttonType="submit"/>
        </Link>
      </form>
     <LoginInfo linkPath="/"/>
    </SCRegistrationPage>
  );
};
