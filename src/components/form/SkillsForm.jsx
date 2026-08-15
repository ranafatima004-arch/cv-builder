import Input from '../ui/Input';

const SkillsForm = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">Skills</h2>

      <Input label="Skills" placeholder="UI Design, UX Research, Figma" />
    </div>
  );
};

export default SkillsForm;
