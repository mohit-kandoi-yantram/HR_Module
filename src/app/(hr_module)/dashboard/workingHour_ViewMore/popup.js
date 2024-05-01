import { DialogContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import ViewMore from './viewMoreTable';
import { RxCross2 } from 'react-icons/rx';

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog open={openPopup} fullWidth maxWidth="md">
      <DialogTitle>
        <div className="flex justify-between bg-blue-100 rounded-full p-1 px-3">
          {title}
          <RxCross2 onClick={() => setOpenPopup(false)} />
        </div>
      </DialogTitle>
      <DialogContent>
        <ViewMore setOpenPopup={setOpenPopup} />
      </DialogContent>
    </Dialog>
  );
}
