'use client';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import TableOfResignedStaff from './tableResignedStaffDetail';
import Popup from '../inputPopupForm/popup';

const Profiles = () => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div className="text-black">
      <div className="flex justify-between">
        <p className="text-lg font-bold">Resigned Staff Details</p>
        <Button
          color="primary"
          className="text-sm text-white bg-blue-800 rounded-full"
          onClick={() => setOpenPopup(true)}
        >
          + Add Staff
        </Button>
      </div>
      <div className="bg-slate-100 mt-2">
        <TableOfResignedStaff />
        <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} />
      </div>
    </div>
  );
};

export default Profiles;
