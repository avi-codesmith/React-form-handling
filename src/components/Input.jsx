export default function Input({ inputIdentifier, error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={inputIdentifier}>{inputIdentifier}</label>
      <input
        id={inputIdentifier}
        name={inputIdentifier}
        type={inputIdentifier}
        {...props}
      />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
