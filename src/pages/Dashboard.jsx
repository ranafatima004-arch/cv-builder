import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PersonalInfoForm from '../components/form/PersonalInfoForm';
import EducationForm from '../components/form/EducationForm';
import ExperienceForm from '../components/form/ExperienceForm';
import SkillsForm from '../components/form/SkillsForm';
import CVPreview from '../components/preview/CVPreview';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">CV Dashboard</h1>
          <p className="mt-2 text-slate-600">Build your professional profile and preview your CV in real time.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <PersonalInfoForm />
            <EducationForm />
            <ExperienceForm />
            <SkillsForm />
          </div>

          <div>
            <CVPreview />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
