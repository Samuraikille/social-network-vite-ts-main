interface IAppInput {
  inputType: string;
  inputPlaceholder: string;
}

export const AppInput = ({inputType, inputPlaceholder}: IAppInput) => {
  return (
    <input type={inputType} placeholder={inputPlaceholder} />
  );
};