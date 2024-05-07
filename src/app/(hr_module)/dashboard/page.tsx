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
      {/* <div
        className="flex justify-between bg-blue-200 rounded-full p-2 cursor-pointer my-2"
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
      </div> */}
      <div>
        <p className="text-sm font-semibold ml-3">Daily Work Percentage</p>
        <DailyWorkPercentage />
        {/* {expandedDailyWorkPercentage && <DailyWorkPercentage />} */}
      </div>

      {/* DropDown for Ward Wise Staff */}
      {/* <div
        className="flex justify-between bg-blue-200 rounded-full p-2 cursor-pointer my-2"
        onClick={onClickWardWiseStaff}
      >
        <p className="text-sm font-semibold ml-3">Ward Wise Staff</p>
        <FaChevronDown
          className={
            expandedWardWiseStaff ? 'rotate-180 duration-200 mr-3' : ' mr-3'
          }
        />
      </div> */}
      <div>
        <p className="text-sm font-semibold ml-3">Ward Wise Staff</p>
        <WardWiseStaff />
        {/* {expandedWardWiseStaff && <WardWiseStaff />} */}
        {/* <DailyWorkPercentage /> */}
      </div>

      {/* Dropdown for Working Hour Overview */}
      {/* <div
        className="flex justify-between bg-blue-200 rounded-full p-2 cursor-pointer my-2"
        onClick={onClickWorkingHour}
      >
        <p className="text-sm font-semibold ml-3">WorkingHourOverview</p>
        <FaChevronDown
          className={
            expandedWorkingHour ? 'rotate-180 duration-200 mr-3' : ' mr-3'
          }
        />
      </div> */}
      <div className="my-4">
        <p className="text-sm font-semibold ml-3">WorkingHourOverview</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 px-4">
          {items.map((item) => (
            <WorkingHour key={item.id} item={item} />
          ))}
        </div>
        {/* <DailyWorkPercentage /> */}
      </div>
    </div>
  );
};

export default DashBoard;
