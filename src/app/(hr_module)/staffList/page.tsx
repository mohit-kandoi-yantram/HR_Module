'use client';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
// import DailyWorkPercentage from './dailyWorkPercentage';
import WorkingStaffDoctorList from './workingStaffDoctorList';
import { Button } from '@nextui-org/react';
import DailyWorkPercentage from './dailyWorkPercentage';
import WorkingStaffNursingList from './workingStaffNursingList';
import WorkingStaffWardBoyGirlList from './wrokingStaffWardBoyGirlList';
import WorkingPharmacyStaffList from './workingPharmacyStaffList';
import WorkingNonTechnicalStaffList from './workingNonTechnicalStaffList';
import WorkingTechnicalStaffList from './workingTechnicalStaffList';

const DashBoard = () => {
  const [expandedDailyWorkPercentage, setExpandedDailyWorkPercentage] =
    useState(false);
  const onClickDailyWorkPercentage = () => {
    setExpandedDailyWorkPercentage(!expandedDailyWorkPercentage);
  };

  const [expandedWorkingStaffDoctorList, setExpandedWorkingStaffDoctorList] =
    useState(false);
  const onClickWorkingStaffDoctorList = () => {
    setExpandedWorkingStaffDoctorList(!expandedWorkingStaffDoctorList);
  };
  const [expandedWorkingStaffNursingList, setExpandedWorkingStaffNursingList] =
    useState(false);
  const onClickWorkingStaffNursingList = () => {
    setExpandedWorkingStaffNursingList(!expandedWorkingStaffNursingList);
  };
  const [
    expandedWorkingStaffWardBoyGirlList,
    setExpandedWorkingStaffWardBoyGirlList,
  ] = useState(false);
  const onClickWorkingStaffWardBoyGirlList = () => {
    setExpandedWorkingStaffWardBoyGirlList(
      !expandedWorkingStaffWardBoyGirlList
    );
  };
  const [
    expandedWorkingPharmacyStaffList,
    setExpandedWorkingPharmacyStaffList,
  ] = useState(false);
  const onClickWorkingPharmacyStaffList = () => {
    setExpandedWorkingPharmacyStaffList(!expandedWorkingPharmacyStaffList);
  };

  const [
    expandedWorkingNonTechnicalStaffList,
    setExpandedWorkingNonTechnicalStaffList,
  ] = useState(false);
  const onClickWorkingNonTechnicalStaffList = () => {
    setExpandedWorkingNonTechnicalStaffList(
      !expandedWorkingNonTechnicalStaffList
    );
  };
  const [
    expandedWorkingTechnicalStaffList,
    setExpandedWorkingTechnicalStaffList,
  ] = useState(false);
  const onClickWorkingTechnicalStaffList = () => {
    setExpandedWorkingTechnicalStaffList(!expandedWorkingTechnicalStaffList);
  };
  // const [expandedWorkingHour, setExpandedWorkingHour] = useState(false);
  // const onClickWorkingHour = () => {
  //   setExpandedWorkingHour(!expandedWorkingHour);
  // };

  return (
    <div className="text-black ">
      {/* <p className="ml-3 font-bold text-lg">DashBoard</p> */}
      {/* DropDown Div for Daily Work Percentage */}
      <div
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
      </div>
      <div>
        {expandedDailyWorkPercentage && <DailyWorkPercentage />}
        {/* <DailyWorkPercentage /> */}
      </div>

      {/* DropDown for WORKING STAFF DOCTOR LIST */}
      <div
        className="flex justify-between bg-blue-200 rounded-full p-2 cursor-pointer my-2"
        onClick={onClickWorkingStaffDoctorList}
      >
        <p className="text-sm font-semibold ml-3">Working Staff Doctors List</p>
        <FaChevronDown
          className={
            expandedWorkingStaffDoctorList
              ? 'rotate-180 duration-200 mr-3'
              : ' mr-3'
          }
        />
      </div>
      <div>{expandedWorkingStaffDoctorList && <WorkingStaffDoctorList />}</div>

      {/* DropDown for WORKING STAFF NURSING LIST */}
      <div
        className="flex justify-between bg-blue-200 rounded-full p-2 cursor-pointer my-2"
        onClick={onClickWorkingStaffNursingList}
      >
        <p className="text-sm font-semibold ml-3">Working Staff Nursing List</p>
        <FaChevronDown
          className={
            expandedWorkingStaffNursingList
              ? 'rotate-180 duration-200 mr-3'
              : ' mr-3'
          }
        />
      </div>
      <div>
        {expandedWorkingStaffNursingList && <WorkingStaffNursingList />}
      </div>

      {/* DropDown for WORKING STAFF WARD BOYS / GIRLS LIST */}
      <div
        className="flex justify-between bg-blue-200 rounded-full p-2 cursor-pointer my-2"
        onClick={onClickWorkingStaffWardBoyGirlList}
      >
        <p className="text-sm font-semibold ml-3">
          Working Staff Ward Boys/Girls List
        </p>
        <FaChevronDown
          className={
            expandedWorkingStaffWardBoyGirlList
              ? 'rotate-180 duration-200 mr-3'
              : ' mr-3'
          }
        />
      </div>
      <div>
        {expandedWorkingStaffWardBoyGirlList && <WorkingStaffWardBoyGirlList />}
      </div>

      {/* DropDown for WORKING PHARMACY STAFF LIST */}
      <div
        className="flex justify-between bg-blue-200 rounded-full p-2 cursor-pointer my-2"
        onClick={onClickWorkingPharmacyStaffList}
      >
        <p className="text-sm font-semibold ml-3">
          Working Pharmacy Staff List
        </p>
        <FaChevronDown
          className={
            expandedWorkingPharmacyStaffList
              ? 'rotate-180 duration-200 mr-3'
              : ' mr-3'
          }
        />
      </div>
      <div>
        {expandedWorkingPharmacyStaffList && <WorkingPharmacyStaffList />}
      </div>

      {/* DropDown for WORKING NON TECHNICAL STAFF LIST */}
      <div
        className="flex justify-between bg-blue-200 rounded-full p-2 cursor-pointer my-2"
        onClick={onClickWorkingNonTechnicalStaffList}
      >
        <p className="text-sm font-semibold ml-3">
          Working Non-Technical Staff List
        </p>
        <FaChevronDown
          className={
            expandedWorkingNonTechnicalStaffList
              ? 'rotate-180 duration-200 mr-3'
              : ' mr-3'
          }
        />
      </div>
      <div>
        {expandedWorkingNonTechnicalStaffList && (
          <WorkingNonTechnicalStaffList />
        )}
      </div>

      {/* DropDown for WORKING TECHNICAL STAFF LIST */}
      <div
        className="flex justify-between bg-blue-200 rounded-full p-2 cursor-pointer my-2"
        onClick={onClickWorkingTechnicalStaffList}
      >
        <p className="text-sm font-semibold ml-3">
          Working Technical Staff List
        </p>
        <FaChevronDown
          className={
            expandedWorkingTechnicalStaffList
              ? 'rotate-180 duration-200 mr-3'
              : ' mr-3'
          }
        />
      </div>
      <div>
        {expandedWorkingTechnicalStaffList && <WorkingTechnicalStaffList />}
      </div>
    </div>
  );
};

export default DashBoard;
