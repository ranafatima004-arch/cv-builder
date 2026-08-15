import Input from '../ui/Input';

const EducationForm = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">Education</h2>

      <div className="space-y-4">
        <Input label="School" placeholder="University of Arts" />
        <Input label="Degree" placeholder="B.A. in Design" />
        <Input label="Year" placeholder="2015 - 2019" />
      </div>
    </div>
  );
};

export default EducationForm;
