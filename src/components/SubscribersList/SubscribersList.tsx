import { AppHeading } from "../Typography/AppHeading";
import { UserElem } from "../UI/UserElem/UserElem";
import { userElemData } from "./data";

export const SubscribersList = () => {
  return (
    <div className="List">
      <div className="List__title">
        <AppHeading headingText={"Подписки"} headingType={"h2"} />
        <span className="count">123</span>
      </div>
      {userElemData && userElemData.map((elem)=> (
        <UserElem
          imgSource={elem.imgSource}
          altText={elem.altText}
          mainText={elem.mainText}
          secondaryText={elem.secondaryText}
          badgeNumber={elem.badgeNumber}
        />
      ))}
    </div>
  );
};
