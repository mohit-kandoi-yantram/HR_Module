import React, { useState } from 'react';
import { users, columns } from './data';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Button,
} from '@nextui-org/react';
import Popup from './inputPopupForm/popup';
type User = (typeof users)[0];

const WorkingStaffWardBoyGirlList = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case 'name':
        return (
          <User
            avatarProps={{ radius: 'lg', src: user.avatar }}
            name={cellValue}
          ></User>
        );
      case 'department':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            {/* <p className="text-bold text-sm capitalize text-default-400">
                  {user.team}
                </p> */}
          </div>
        );
      case 'id':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            {/* <p className="text-bold text-sm capitalize text-default-400">
                  {user.team}
                </p> */}
          </div>
        );
      case 'period':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            {/* <p className="text-bold text-sm capitalize text-default-400">
                    {user.team}
                  </p> */}
          </div>
        );
      case 'contactNo':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            {/* <p className="text-bold text-sm capitalize text-default-400">
                        {user.team}
                      </p> */}
          </div>
        );
      case 'email':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            {/* <p className="text-bold text-sm capitalize text-default-400">
                  {user.team}
                </p> */}
          </div>
        );
      case 'typeOfLeave':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            {/* <p className="text-bold text-sm capitalize text-default-400">
                  {user.team}
                </p> */}
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="">
      <div className="flex justify-end mt-3">
        <Button
          color="primary"
          className="text-sm text-white bg-blue-800 rounded-full"
          onClick={() => setOpenPopup(true)}
        >
          + Add Ward Boys/Girls
        </Button>
      </div>
      <div>
        <Table
          className="mt-2"
          classNames={{
            thead: 'bg-white',
            th: 'bg-blue-50',
          }}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === 'actions' ? 'center' : 'start'}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={users}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}></Popup>
      </div>
    </div>
  );
};

export default WorkingStaffWardBoyGirlList;
