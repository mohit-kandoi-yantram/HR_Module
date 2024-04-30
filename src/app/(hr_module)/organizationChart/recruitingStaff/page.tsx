import { Button } from '@nextui-org/react';
import React from 'react';
import TableOfRecruitingStaff from './tableRecruitingStaffDetail';

const Profiles = () => {
  return (
    <div className="text-black">
      <div className="flex justify-between">
        <p className="text-lg font-bold">New Recruiting Staff Details</p>
        <Button
          color="primary"
          className="text-sm text-white bg-blue-800 rounded-full"
        >
          + Add Staff
        </Button>
      </div>
      <div className="bg-slate-100 mt-2">
        <TableOfRecruitingStaff />
      </div>
    </div>
  );
};

export default Profiles;
