const GenerateButton = ({
  isGenerating,
  onClick,
  buttonText = 'Generate',
  disableLoading,
}) => {
  return (
    <div className="generate-button-container">
      <a
        className={`generate-button neon-box ${isGenerating ? "loading" : ""}`}
        onClick={!isGenerating ? onClick : undefined}
      >
        <div className="generate">
          {isGenerating && !disableLoading ? (
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