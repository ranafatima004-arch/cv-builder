import { useState } from 'react';
import { Download, Sparkles } from 'lucide-react';
import FormSection from './components/FormSection';
import TextField from './components/TextField';
import ResumePreview from './components/ResumePreview';
import { initialResumeData } from './data/resumeData';
import { downloadPDF } from './utils/downloadPdf';

const App = () => {
  const [resumeData, setResumeData] = useState(initialResumeData);

  const updateProfile = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [field]: value,
      },
    }));
  };

  const updateExperience = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const updateEducation = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const handleDownload = async () => {
    await downloadPDF('resume-preview');
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600">CV Builder</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Build your perfect resume</h1>
          </div>

          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-800"
          >
            <Download size={18} />
            Download PDF
          </button>
        </header>

        <main className="grid gap-8 lg:grid-cols-[1.05fr_1.4fr]">
          <div>
            <FormSection title="Personal Information">
              <TextField
                label="Full Name"
                value={resumeData.profile.fullName}
                onChange={(value) => updateProfile('fullName', value)}
                placeholder="Your name"
              />
              <TextField
                label="Professional Title"
                value={resumeData.profile.title}
                onChange={(value) => updateProfile('title', value)}
                placeholder="Product Designer"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <TextField
                  label="Email"
                  type="email"
                  value={resumeData.profile.email}
                  onChange={(value) => updateProfile('email', value)}
                  placeholder="name@email.com"
                />
                <TextField
                  label="Phone"
                  value={resumeData.profile.phone}
                  onChange={(value) => updateProfile('phone', value)}
                  placeholder="+1 ..."
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <TextField
                  label="Location"
                  value={resumeData.profile.location}
                  onChange={(value) => updateProfile('location', value)}
                  placeholder="City, Country"
                />
                <TextField
                  label="Website"
                  value={resumeData.profile.website}
                  onChange={(value) => updateProfile('website', value)}
                  placeholder="portfolio.com"
                />
              </div>

              <TextField
                label="Professional Summary"
                value={resumeData.profile.summary}
                onChange={(value) => updateProfile('summary', value)}
                placeholder="Write a short summary..."
                multiline
              />
            </FormSection>

            <FormSection title="Experience">
              {resumeData.experience.map((item) => (
                <div key={item.id} className="mb-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <TextField
                      label="Role"
                      value={item.role}
                      onChange={(value) => updateExperience(item.id, 'role', value)}
                    />
                    <TextField
                      label="Company"
                      value={item.company}
                      onChange={(value) => updateExperience(item.id, 'company', value)}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <TextField
                      label="Location"
                      value={item.location}
                      onChange={(value) => updateExperience(item.id, 'location', value)}
                    />
                    <TextField
                      label="Dates"
                      value={`${item.startDate} - ${item.endDate}`}
                      onChange={(value) => {
                        const [startDate = '', endDate = ''] = value.split('-');
                        updateExperience(item.id, 'startDate', startDate.trim());
                        updateExperience(item.id, 'endDate', endDate.trim());
                      }}
                    />
                  </div>
                  <TextField
                    label="Description"
                    value={item.description}
                    onChange={(value) => updateExperience(item.id, 'description', value)}
                    multiline
                  />
                </div>
              ))}
            </FormSection>

            <FormSection title="Education">
              {resumeData.education.map((item) => (
                <div key={item.id} className="mb-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <TextField
                      label="School"
                      value={item.school}
                      onChange={(value) => updateEducation(item.id, 'school', value)}
                    />
                    <TextField
                      label="Degree"
                      value={item.degree}
                      onChange={(value) => updateEducation(item.id, 'degree', value)}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <TextField
                      label="Location"
                      value={item.location}
                      onChange={(value) => updateEducation(item.id, 'location', value)}
                    />
                    <TextField
                      label="Dates"
                      value={`${item.startDate} - ${item.endDate}`}
                      onChange={(value) => {
                        const [startDate = '', endDate = ''] = value.split('-');
                        updateEducation(item.id, 'startDate', startDate.trim());
                        updateEducation(item.id, 'endDate', endDate.trim());
                      }}
                    />
                  </div>
                </div>
              ))}
            </FormSection>

            <FormSection title="Skills & Projects">
              <TextField
                label="Skills"
                value={resumeData.skills.join(', ')}
                onChange={(value) => setResumeData((prev) => ({
                  ...prev,
                  skills: value.split(',').map((skill) => skill.trim()).filter(Boolean),
                }))}
                placeholder="UX, Design, React, Figma"
              />

              {resumeData.projects.map((project) => (
                <div key={project.id} className="mb-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <TextField
                    label="Project Name"
                    value={project.name}
                    onChange={(value) => setResumeData((prev) => ({
                      ...prev,
                      projects: prev.projects.map((item) =>
                        item.id === project.id ? { ...item, name: value } : item,
                      ),
                    }))}
                  />
                  <TextField
                    label="Project Description"
                    value={project.description}
                    onChange={(value) => setResumeData((prev) => ({
                      ...prev,
                      projects: prev.projects.map((item) =>
                        item.id === project.id ? { ...item, description: value } : item,
                      ),
                    }))}
                    multiline
                  />
                  <TextField
                    label="Project Link"
                    value={project.link}
                    onChange={(value) => setResumeData((prev) => ({
                      ...prev,
                      projects: prev.projects.map((item) =>
                        item.id === project.id ? { ...item, link: value } : item,
                      ),
                    }))}
                  />
                </div>
              ))}
            </FormSection>
          </div>

          <div className="lg:sticky lg:top-6 lg:self-start">
            <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-800">
              <Sparkles size={18} className="text-sky-600" />
              Live Resume Preview
            </div>
            <ResumePreview data={resumeData} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
