import Input from '../ui/Input';
import Button from '../ui/Button';

const PersonalInfoForm = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">Personal Information</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Full Name" placeholder="Jane Doe" />
        <Input label="Professional Title" placeholder="Product Designer" />
        <Input label="Email" type="email" placeholder="jane@example.com" />
        <Input label="Phone" placeholder="+1 234 567 890" />
        <Input label="Location" placeholder="New York, USA" className="md:col-span-2" />
      </div>

      <div className="mt-5 flex justify-end">
        <Button>Save Details</Button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
