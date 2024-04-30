'use client';
import NavBar from '@/app/components/navBar';
import React, { useState } from 'react';
// import { BiChevronDown } from 'react-icons/bi';
import { FaChevronDown } from 'react-icons/fa6';
import DailyWorkPercentage from './dailyWorkPercentage';
import WardWiseStaff from './WardWiseStaff';
import WorkingHour from './workingHour';
import { WorkingHourItems } from '@/app/type/interface';

const items: WorkingHourItems[] = [
  {
    id: 1,
    name: 'Doctors',
    workingHour: 5,
  },
  {
    id: 2,
    name: 'Nurses',
    workingHour: 6,
  },
  {
    id: 3,
    name: 'Ward Boys/Girls',
    workingHour: 10,
  },
  {
    id: 4,
    name: 'Pharmacy Staff',
    workingHour: 7,
  },
  {
    id: 5,
    name: 'Non-Technical Staff',
    workingHour: 5,
  },
  {
    id: 6,
    name: 'Technical Staff',
    workingHour: 15,
  },
];

const DashBoard = () => {
  const [expandedDailyWorkPercentage, setExpandedDailyWorkPercentage] =
    useState(false);
  const onClickDailyWorkPercentage = () => {
    setExpandedDailyWorkPercentage(!expandedDailyWorkPercentage);
  };

  const [expandedWardWiseStaff, setExpandedWardWiseStaff] = useState(false);
  const onClickWardWiseStaff = () => {
    setExpandedWardWiseStaff(!expandedWardWiseStaff);
  };

  const [expandedWorkingHour, setExpandedWorkingHour] = useState(false);
  const onClickWorkingHour = () => {
    setExpandedWorkingHour(!expandedWorkingHour);
  };

  return (
    <div>
      <p className="ml-3 font-bold text-lg">DashBoard</p>
      {/* DropDown Div for Daily Work Percentage */}
      <div
        className="flex justify-between bg-blue-200 rounded-full p-2 cursor-pointer"
        onClick={onClickDailyWorkPercentage}
      >
        <p className="text-sm font-semibold ml-3">Daily Work Percentage</p>
        <FaChevronDown
          className={
            expandedDailyWorkPercentage
              ? 'rotate-180 duration-200 mr-3'
              : ' mr-3'
          }
        />
      </div>
      <div>
        {expandedDailyWorkPercentage && <DailyWorkPercentage />}
        {/* <DailyWorkPercentage /> */}
      </div>

      {/* DropDown for Ward Wise Staff */}
      <div
        className="flex justify-between bg-blue-200 rounded-full p-2 cursor-pointer"
        onClick={onClickWardWiseStaff}
      >
        <p className="text-sm font-semibold ml-3">Ward Wise Staff</p>
        <FaChevronDown
          className={
            expandedWardWiseStaff ? 'rotate-180 duration-200 mr-3' : ' mr-3'
          }
        />
      </div>
      <div>
        {expandedWardWiseStaff && <WardWiseStaff />}
        {/* <DailyWorkPercentage /> */}
      </div>

      {/* Dropdown for Working Hour Overview */}
      <div
        className="flex justify-between bg-blue-200 rounded-full p-2 cursor-pointer"
        onClick={onClickWorkingHour}
      >
        <p className="text-sm font-semibold ml-3">WorkingHourOverview</p>
        <FaChevronDown
          className={
            expandedWorkingHour ? 'rotate-180 duration-200 mr-3' : ' mr-3'
          }
        />
      </div>
      <div className="grid grid-cols-3 gap-6 p-4">
        {expandedWorkingHour &&
          items.map((item) => <WorkingHour key={item.id} item={item} />)}
        {/* <DailyWorkPercentage /> */}
      </div>
    </div>
  );
};

export default DashBoard;
