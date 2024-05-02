import React from 'react';
import { users, columns } from './dataAlerts';
import { Avatar, Button, Card, Divider, User } from '@nextui-org/react';
// import { AlertDataColumn as Column } from '@/app/type/interface';
interface Column {
  name: string;
  uid: keyof User;
}

interface CardProps {
  columns: Column[];
  users: User[];
}
interface User {
  avatar: string;
  name: string;
  department: string;
  id: number;
  period: string;
  contactNo: string;
  email: string;
  typeOfLeave: string;
}

// User = (typeof users)[0];

const Alerts = () => {
  // const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
  //   const cellValue = user[columnKey as keyof User];

  // switch (columnKey) {
  //   case 'name':
  //     return (
  //       <div
  //         avatarProps={{ radius: 'lg', src: user.avatar }}
  //         name={cellValue}
  //       ></div>
  //     );
  //   case 'department':
  //     return (
  //       <div className="flex flex-col">
  //         <p className="text-bold text-sm capitalize">{cellValue}</p>
  //         {/* <p className="text-bold text-sm capitalize text-default-400">
  //               {user.team}
  //             </p> */}
  //       </div>
  //     );
  //   case 'id':
  //     return (
  //       <div className="flex flex-col">
  //         <p className="text-bold text-sm capitalize">{cellValue}</p>
  //         {/* <p className="text-bold text-sm capitalize text-default-400">
  //               {user.team}
  //             </p> */}
  //       </div>
  //     );
  //   case 'period':
  //     return (
  //       <div className="flex flex-col">
  //         <p className="text-bold text-sm capitalize">{cellValue}</p>
  //         {/* <p className="text-bold text-sm capitalize text-default-400">
  //                 {user.team}
  //               </p> */}
  //       </div>
  //     );
  //   case 'contactNo':
  //     return (
  //       <div className="flex flex-col">
  //         <p className="text-bold text-sm capitalize">{cellValue}</p>
  //         {/* <p className="text-bold text-sm capitalize text-default-400">
  //                     {user.team}
  //                   </p> */}
  //       </div>
  //     );
  //   case 'email':
  //     return (
  //       <div className="flex flex-col">
  //         <p className="text-bold text-sm capitalize">{cellValue}</p>
  //         {/* <p className="text-bold text-sm capitalize text-default-400">
  //               {user.team}
  //             </p> */}
  //       </div>
  //     );
  //   case 'typeOfLeave':
  //     return (
  //       <div className="flex flex-col">
  //         <p className="text-bold text-sm capitalize">{cellValue}</p>
  //         {/* <p className="text-bold text-sm capitalize text-default-400">
  //               {user.team}
  //             </p> */}
  //       </div>
  //     );
  //   default:
  //     return cellValue;
  // }

  return (
    <div className="container">
      <Card>
        <div className="card-body m-5">
          {/* {columns.map((column, index) => (
            <span key={index}>{column.name}</span>
          ))} */}

          {/* group px-3 h-10 text-left rtl:text-right align-middle whitespace-nowrap text-foreground-500 text-tiny font-semibold first:rounded-l-lg rtl:first:rounded-r-lg rtl:first:rounded-l-[unset] last:rounded-r-lg rtl:last:rounded-l-lg rtl:last:rounded-r-[unset] data-[sortable=true]:transition-colors data-[sortable=true]:cursor-pointer data-[hover=true]:text-foreground-400 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 bg-blue-50 */}

          <div className="grid grid-cols-7 gap-4 rounded-lg group p-3 h-10 text-left rtl:text-right align-middle whitespace-nowrap text-foreground-500 text-tiny font-semibold first:rounded-l-lg rtl:first:rounded-r-lg rtl:first:rounded-l-[unset] last:rounded-r-lg rtl:last:rounded-l-lg rtl:last:rounded-r-[unset] data-[sortable=true]:transition-colors data-[sortable=true]:cursor-pointer data-[hover=true]:text-foreground-400 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 bg-blue-50">
            {columns.map((column, index) => (
              <span key={index}>{column.name}</span>
            ))}
          </div>

          {users.map((user, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-2 group outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2"
            >
              <div className="grid grid-cols-7 gap-4 py-2 px-3 relative align-middle whitespace-normal text-small font-normal [&>*]:z-1 [&>*]:relative outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 before:content-[''] before:absolute before:z-0 before:inset-0 before:opacity-0 data-[selected=true]:before:opacity-100 group-data-[disabled=true]:text-foreground-300 group-data-[disabled=true]:cursor-not-allowed before:bg-default/40 data-[selected=true]:text-default-foreground first:before:rounded-l-lg rtl:first:before:rounded-r-lg rtl:first:before:rounded-l-[unset] last:before:rounded-r-lg rtl:last:before:rounded-l-lg rtl:last:before:rounded-r-[unset]">
                {columns.map((column, idx) => (
                  <span key={idx}>{user[column.uid as keyof User]}</span>
                ))}
              </div>
              <div className="flex justify-end gap-4 pr-10">
                <Button
                  size="sm"
                  color="primary"
                  className="text-sm text-white bg-blue-800 rounded-full"
                >
                  Approve
                </Button>
                <Button
                  size="sm"
                  color="primary"
                  className="text-sm text-black bg-white border border-black rounded-full"
                >
                  Reject
                </Button>
                <Button
                  size="sm"
                  color="primary"
                  className="text-sm text-black bg-white border border-black  rounded-full"
                >
                  Pending
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
    // <Table
    //   classNames={{
    //     thead: 'bg-white',
    //     th: 'bg-blue-50',
    //   }}
    // >
    //   <TableHeader columns={columns}>
    //     {(column) => (
    //       <TableColumn key={column.uid} align={'start'}>
    //         {column.name}
    //       </TableColumn>
    //     )}
    //   </TableHeader>
    //   <TableBody items={users}>
    //     {(item) => (
    //       <TableRow key={item.id}>
    //         {(columnKey) => (
    //           <TableCell>
    //             {renderCell(item, columnKey)}
    //             {/* {columnKey === 'email' ? <Button>{columnKey}</Button> : null} */}
    //           </TableCell>
    //         )}
    //       </TableRow>
    //     )}
    //   </TableBody>
    // </Table>
  );
};

export default Alerts;
