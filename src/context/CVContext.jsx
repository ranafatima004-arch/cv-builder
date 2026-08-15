import { createContext, useContext, useMemo, useState } from 'react';

const CVContext = createContext(null);

const defaultCV = {
  personalInfo: {
    fullName: 'Jane Doe',
    email: 'jane.doe@email.com',
    phone: '+1 234 567 890',
    location: 'New York, USA',
    title: 'Product Designer',
  },
  education: [
    {
      id: 1,
      school: 'University of Arts',
      degree: 'B.A. in Design',
      year: '2015 - 2019',
    },
  ],
  experience: [
    {
      id: 1,
      role: 'Senior Designer',
      company: 'Northstar Studio',
      period: '2021 - Present',
      description: 'Led UX strategy for client-facing digital products.',
    },
  ],
  skills: ['UI Design', 'UX Research', 'Figma', 'React'],
};

export const CVProvider = ({ children }) => {
  const [cv, setCv] = useState(defaultCV);

  const value = useMemo(() => ({ cv, setCv }), [cv]);

  return <CVContext.Provider value={value}>{children}</CVContext.Provider>;
};

export const useCV = () => {
  const context = useContext(CVContext);

  if (!context) {
    throw new Error('useCV must be used within a CVProvider');
  }

  return context;
};

export default CVContext;
