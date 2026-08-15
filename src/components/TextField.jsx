const TextField = ({ label, value, onChange, placeholder, type = 'text', multiline = false }) => (
  <div className="mb-4">
    <label className="field-label">{label}</label>
    {multiline ? (
      <textarea
        className="field-input min-h-[110px] resize-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        className="field-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    )}
  </div>
);

export default TextField;
