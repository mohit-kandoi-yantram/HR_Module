'use client';
import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { LuCalendarX2 } from 'react-icons/lu';
import { FaBusinessTime } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import { GiOrganigram } from 'react-icons/gi';
import { IoMdPerson } from 'react-icons/io';
import { FaPeopleArrows } from 'react-icons/fa';
import { FaClipboardList } from 'react-icons/fa6';
import { FaPersonCircleXmark } from 'react-icons/fa6';
import { MdOutlineSettingsApplications } from 'react-icons/md';
import { IconType } from 'react-icons';
import { SidebarItems, SubItems } from '../../type/interface';
import SidebarItem from './items';

const items: SidebarItems[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: MdDashboard,
  },
  {
    name: 'Leave Management',
    path: '/leaveManagement',
    icon: LuCalendarX2,
  },
  {
    name: 'Roster Management',
    path: '/rosterManagement',
    icon: FaBusinessTime,
  },
  {
    name: 'Staff List',
    path: '/staffList',
    icon: FaPeopleGroup,
  },
  {
    name: 'Organization Chart',
    path: '/organizationChart',
    icon: GiOrganigram,
    items: [
      {
        name: 'Profiles',
        path: '/organizationChart/profiles',
        icon: IoMdPerson,
      },
      {
        name: 'Charts',
        path: '/organizationChart/charts',
        icon: FaPeopleArrows,
      },
      {
        name: 'Recuriting Staff',
        path: '/organizationChart/recruitingStaff',
        icon: FaClipboardList,
      },
      {
        name: 'Resigned Staff',
        path: '/organizationChart/resignedStaff',
        icon: FaPersonCircleXmark,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-60 shadow-lg z-10 bg-orange-50">
      <div className="flex justify-center items-center bg-white">
        <img
          src="https://media.licdn.com/dms/image/C4D0BAQERWgqpQAfvww/company-logo_200_200/0/1639741901981?e=2147483647&v=beta&t=lKPRZ6GRlKFOShej0j5hPsWKZb7FMFDnSQqOCMaqa_E"
          alt="logo"
          className="h-28 w-36"
        />
      </div>
      <div className="flex flex-col space-y-10 w-full h-full p-4 text-center bg-blue-800 rounded-3xl">
        <div className="flex flex-col space-y-1">
          {items.map((item) => (
            <SidebarItem key={item.path} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
