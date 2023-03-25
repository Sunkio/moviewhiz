const GenerateButton = ({
  isGenerating,
  onClick,
  buttonText = 'Generate',
  disableLoading = false,
}) => {
  return (
    <div className="generate-button-container">
      <a
        className={`${
          isGenerating
            ? 'generate-button loading neon-box'
            : 'generate-button neon-box'
        }`}
        onClick={onClick}
      >
        <div className="generate">
          {isGenerating ? (
            <span className="loader"></span>
          ) : (
            <p className="grow">{buttonText}</p>
          )}
        </div>
      </a>
    </div>
  );
};

export default GenerateButton;