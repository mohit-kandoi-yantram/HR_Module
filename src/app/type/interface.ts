import { IconType } from 'react-icons';
export interface SidebarItems {
  name: string;
  path: string;
  icon: IconType;
  items?: SubItems[];
}

export interface SubItems {
  name: string;
  path: string;
  icon: IconType;
}

export interface WorkingHourItems {
  id: number;
  name: string;
  workingHour: number;
}

export interface FormData {
  employeeId: string;
  name: string;
  email: string;
  contactNo: string;
  department: string;
}
