const CVPreview = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold text-slate-900">Jane Doe</h2>
        <p className="text-sm text-sky-600">Product Designer</p>
      </div>

      <div className="space-y-6">
        <section>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-600">Profile</h3>
          <p className="text-sm leading-6 text-slate-700">
            Creative product designer focused on user-centered experiences and scalable design systems.
          </p>
        </section>

        <section>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-600">Experience</h3>
          <div className="space-y-2 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Senior Designer</p>
            <p>Northstar Studio</p>
            <p>2021 - Present</p>
          </div>
        </section>

        <section>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-600">Education</h3>
          <p className="text-sm text-slate-700">B.A. in Design — University of Arts</p>
        </section>

        <section>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-600">Skills</h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {['UI Design', 'UX Research', 'Figma', 'React'].map((skill) => (
              <span key={skill} className="rounded-full bg-sky-100 px-2.5 py-1 text-sky-700">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CVPreview;
