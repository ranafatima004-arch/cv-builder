const FormSection = ({ title, children }) => (
  <section className="panel mb-6">
    <h2 className="section-title">{title}</h2>
    {children}
  </section>
);

export default FormSection;
