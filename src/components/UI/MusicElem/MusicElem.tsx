interface IMusicElem {
  imgSource: string;
  altText: string;
  mainText: string;
  secondaryText: string;
  isActive: boolean;
}

export const MusicElem = ({
  imgSource,
  altText,
  mainText,
  secondaryText,
  isActive,
}: IMusicElem) => {
  return (
    <div className="MusicElem">
      <img src={imgSource} alt={altText} />
      <div className="music__description">
        <p className="main__text">{mainText}</p>
        <p className="secondary__text">{secondaryText}</p>
      </div>
      <div className={`plus-button ${isActive && "_active"}`}></div>
    </div>
  );
};
