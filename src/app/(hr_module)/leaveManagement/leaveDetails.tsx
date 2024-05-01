import React from 'react';
import { users, columns } from './dataLeaveDetails';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
} from '@nextui-org/react';
type User = (typeof users)[0];

const LeaveDetails = () => {
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
    <Table
      classNames={{
        thead: 'bg-white',
        th: 'bg-blue-50',
      }}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={'start'}>
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
  );
};

export default LeaveDetails;
