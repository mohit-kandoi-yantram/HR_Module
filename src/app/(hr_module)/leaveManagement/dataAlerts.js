import React from 'react';
const columns = [
  { name: 'Name', uid: 'name' },
  { name: 'Department', uid: 'department' },
  { name: 'ID', uid: 'id' },
  { name: 'Period', uid: 'period' },
  { name: 'Contact No', uid: 'contactNo' },
  { name: 'Email', uid: 'email' },
  { name: 'Type of Leave', uid: 'typeOfLeave' },
];

const users = [
  {
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    name: 'Tony Reichert',
    department: 'Staff Nurse',
    id: 1,
    period: '20-04-2024 to 20-04-2024',
    contactNo: '+911234567890',
    email: 'tony.reichert@example.com',
    typeOfLeave: 'Medical',
  },
  {
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    name: 'Reichert',
    department: 'Staff Nurse',
    id: 2,
    period: '20-04-2024 to 20-04-2024',
    contactNo: '+911234567890',
    email: 'tony.reichert@example.com',
    typeOfLeave: 'Medical',
  },
  {
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    name: 'Tony',
    department: 'Staff Nurse',
    id: 3,
    period: '20-04-2024 to 20-04-2024',
    contactNo: '+911234567890',
    email: 'tony.reichert@example.com',
    typeOfLeave: 'Medical',
  },
];

export { columns, users };
