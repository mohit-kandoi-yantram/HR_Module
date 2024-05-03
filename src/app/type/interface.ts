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
export interface AlertDataColumn {
  name: string;
  uid: string;
}

export interface AlertDataUser {
  avatar: string;
  name: string;
  department: string;
  id: number;
  period: string;
  contactNo: string;
  email: string;
  typeOfLeave: string;
}

export interface Employee {
  id: number;
  name: string;
  title: string;
  subordinates?: Employee[];
}
