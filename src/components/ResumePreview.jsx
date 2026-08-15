const ResumePreview = ({ data }) => {
  const { profile, experience, education, skills, projects } = data;

  return (
    <aside id="resume-preview" className="panel h-fit min-h-[900px] bg-white p-0 overflow-hidden">
      <div className="bg-slate-900 px-8 py-8 text-white">
        <h1 className="text-3xl font-bold">{profile.fullName}</h1>
        <p className="mt-2 text-lg text-sky-200">{profile.title}</p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-200">
          <span>{profile.email}</span>
          <span>{profile.phone}</span>
          <span>{profile.location}</span>
          <span>{profile.website}</span>
        </div>
      </div>

      <div className="space-y-8 p-8">
        <section>
          <h3 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-700">
            Profile
          </h3>
          <p className="text-sm leading-6 text-slate-700">{profile.summary}</p>
        </section>

        <section>
          <h3 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-700">
            Experience
          </h3>
          <div className="space-y-5">
            {experience.map((item) => (
              <div key={item.id}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-900">{item.role}</p>
                    <p className="text-sm text-slate-600">
                      {item.company} · {item.location}
                    </p>
                  </div>
                  <span className="text-xs text-slate-500">
                    {item.startDate} - {item.endDate}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-700">
            Education
          </h3>
          <div className="space-y-4">
            {education.map((item) => (
              <div key={item.id}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-900">{item.degree}</p>
                    <p className="text-sm text-slate-600">{item.school}</p>
                  </div>
                  <span className="text-xs text-slate-500">
                    {item.startDate} - {item.endDate}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{item.location}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-700">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-3 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-700">
            Projects
          </h3>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id}>
                <p className="font-semibold text-slate-900">{project.name}</p>
                <p className="text-sm leading-6 text-slate-700">{project.description}</p>
                <p className="mt-1 text-xs text-sky-700">{project.link}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
};

export default ResumePreview;
