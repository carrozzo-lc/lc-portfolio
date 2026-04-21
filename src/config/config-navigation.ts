import { PATHS } from '@/config/paths';

// ----------------------------------------------------------------------

const navConfig = [
  {
    titleKey: 'Nav.WorkPrinciples',
    path: PATHS.workPrinciples,
  },
  {
    titleKey: 'Nav.impactAreas',
    path: PATHS.impactAreas,
  },
  {
    titleKey: 'Nav.experience',
    path: PATHS.experiences,
  },
];

const cvpNavConfig = [
  {
    titleKey: 'Nav.clearWebPresence.howIWork',
    path: PATHS.workPrinciples,
  },
  {
    titleKey: 'Nav.clearWebPresence.whatIOffer',
    path: PATHS.impactAreas,
  },
  {
    titleKey: 'Nav.clearWebPresence.work',
    path: PATHS.experiences,
  },
];

export { navConfig, cvpNavConfig };
