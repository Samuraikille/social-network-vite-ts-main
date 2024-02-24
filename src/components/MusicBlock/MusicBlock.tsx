import { AppHeading } from "../Typography/AppHeading";
import { MusicElem } from "../UI/MusicElem/MusicElem";
import { MusicData } from "./data";
export const MusicBlock = () => {
  return (
    <div className="MusicBlock">
      <div className="MusicBlock__title">
        <AppHeading headingText="Вы недавно слушали" headingType="h2"/>
        <span>{MusicData.length}</span>
      </div>
      {MusicData && MusicData.map((elem)=> (
        <MusicElem
          imgSource={elem.imgSource}
          altText={elem.altText}
          mainText={elem.mainText}
          secondaryText={elem.secondaryText}
          isActive={elem.isActive}
        />
      ))}
    </div>
  );
};
