interface IAppButton {
  buttonText: string;
}

export const AppButton = ({ buttonText }: IAppButton) => {
  return <button>{buttonText}</button>;
};
