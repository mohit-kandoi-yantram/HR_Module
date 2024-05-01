'use client';
import NavBar from '@/app/components/navBar';
import React, { useState } from 'react';
// import { BiChevronDown } from 'react-icons/bi';
import { FaChevronDown } from 'react-icons/fa6';
import LeaveDetails from './leaveDetails';
import Alerts from './alerts';
import { columns, users } from './dataLeaveDetails';

const LeaveManagement = () => {
  const [expandedAlerts, setExpandedAlerts] = useState(false);
  const onClickAlerts = () => {
    setExpandedAlerts(!expandedAlerts);
  };
  const [expandedLeaveDetails, setExpandedLeaveDetails] = useState(false);
  const onClickLeaveDetails = () => {
    setExpandedLeaveDetails(!expandedLeaveDetails);
  };

  return (
    <div className="text-black ">
      <p className="ml-3 font-bold text-lg">Leave Management</p>
      <p className="ml-6 font-bold text-md">Leave Staff List</p>

      {/* DropDown Div for Leave Details */}
      <div
        className="flex justify-between bg-blue-200 rounded-full p-2 cursor-pointer my-2"
        onClick={onClickLeaveDetails}
      >
        <p className="text-sm font-semibold ml-3">Leave Details</p>
        <FaChevronDown
          className={
            expandedLeaveDetails ? 'rotate-180 duration-200 mr-3' : ' mr-3'
          }
        />
      </div>
      <div>{expandedLeaveDetails && <LeaveDetails />}</div>

      {/* DropDown for Alerts */}
      <div
        className="flex justify-between bg-blue-200 rounded-full p-2 cursor-pointer my-2"
        onClick={onClickAlerts}
      >
        <p className="text-sm font-semibold ml-3">Alerts</p>
        <FaChevronDown
          className={expandedAlerts ? 'rotate-180 duration-200 mr-3' : ' mr-3'}
        />
      </div>
      <div>
        {expandedAlerts && <Alerts />}
        {/* <DailyWorkPercentage /> */}
      </div>

      {/* Dropdown for Working Hour Overview */}
      {/* <div
        className="flex justify-between bg-blue-200 rounded-full p-2"
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
      {/* </div> */}
    </div>
  );
};

export default LeaveManagement;
