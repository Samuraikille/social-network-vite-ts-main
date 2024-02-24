interface IUserElem {
  imgSource:string;
  altText: string;
  mainText: string;
  secondaryText: string;
  badgeNumber: number;
}

export const UserElem = ({imgSource,badgeNumber,altText,mainText,secondaryText}:IUserElem) => {
  return (
    <div className="UserElem">
      <img src={imgSource} alt={altText} />
      <div className="user__description">
        <p className="main__text">{mainText}</p>
        <p className="secondary__text">{secondaryText}</p>
      </div>
      <span className="Badge">{badgeNumber}</span>
    </div>
  );
};
