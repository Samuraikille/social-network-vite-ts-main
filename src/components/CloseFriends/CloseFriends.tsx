import { AppHeading } from "../Typography/AppHeading";
import { UserElem } from "../UI/UserElem/UserElem";
import { friendsData } from "./data";
export const CloseFriends = () => {
  return (
    <div className="List">
      <div className="List__title">
        <AppHeading headingText="Близкие друзья" headingType="h2"/>
        <span className="count">{friendsData.length}</span>
      </div>
      {friendsData && friendsData.map((elem)=> (
        <UserElem
          imgSource={elem.imgSource}
          altText={elem.altText}
          mainText={elem.mainText}
          secondaryText={elem.secondaryText}
          badgeNumber={elem.badgeNumber}
          isOnline={true}
        />
      ))}
    </div>
  );
};
