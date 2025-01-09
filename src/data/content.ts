import { Camera, Award, Briefcase, Image } from 'lucide-react';
import { Stat, WorkExperience, Project, Brand, /*GalleryImage*/ } from '../types';

export const stats: Stat[] = [
  { number: '700,000+', label: 'Pictures', icon: Camera },
  { number: '600+', label: 'Events', icon: Image },
  { number: '10', label: 'Years', icon: Award },
  { number: '5', label: 'Countries', icon: Briefcase }
];

export const workExperience: WorkExperience[] = [
  {
    company: 'Sky news',
    years: '2020-2023',
    role: 'Photo Journalist (kenya)',
    projects: ['Rafiki Film 2018', 'Untamed teens 2019', 'A girl from Mogadishu 2020']
  },
  {
    company: 'B-climax Broadcasting Services',
    years: '2018-2020',
    role: 'Production manager'
  },
  {
    company: 'M.T.N TV',
    years: '2015-2018',
    role: 'Crew Director Outside Broadcasting'
  }
];

export const projects: Project[] = [
  {
    title: 'G.C.C.S- CHILD LED GLOBAL CHILDREN CLIMATE SUMMIT',
    description: 'In September 2023, I had the privilage to document the first ever Child-led Global Children climate summit at KTTC in Gigiri Nairobi Kenya attended by Children across the globe.',
    category: 'GOVERNMENT'
  },
  {
    title: 'FIGHTING COVID 19',
    description: 'In 2020 during the Covid 19 pandemic I joined a group of friends from Goodness and Mercy Fumigations in fighting covid 19 in Estates in Nairobi.',
    category: 'CORPORATE'
  }
];

export const brands: Brand[] = [
  { name: 'GoldenLight schools' },
  { name: 'Blue berets' },
  { name: 'LXE Company' },
  { name: 'MTN' },
  { name: 'African Union' },
  { name: 'Children WITH Nature' },
  { name: 'Safaricom' }
];
