import { AppHeading } from "../Typography/AppHeading"
import { UserElem } from "../UI/UserElem/UserElem"

export const SubscribersList = () => {
  return (
    <div className="List">
      <div className="List__title">
        <AppHeading headingText={"Подписки"} headingType={"h2"} />
        <span className="count">123</span>
      </div>
      <UserElem/>
      
    </div>
  );
};
