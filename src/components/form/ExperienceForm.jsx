import Input from '../ui/Input';

const ExperienceForm = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">Experience</h2>

      <div className="space-y-4">
        <Input label="Job Title" placeholder="Senior Designer" />
        <Input label="Company" placeholder="Northstar Studio" />
        <Input label="Period" placeholder="2021 - Present" />
        <textarea
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-100"
          rows="4"
          placeholder="Describe your work experience..."
        />
      </div>
    </div>
  );
};

export default ExperienceForm;
