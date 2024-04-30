'use client';
import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from '@nextui-org/react';
import SearchCard from './searchBox';

export default function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="flex">
      {/* Search Box */}

      <div className="basis-2/5">
        <Card className=" shadow-small bg-blue-800 rounded-full p-2">
          <CardBody>
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="   🔍   Search"
              className=" rounded-full w-full text-black"
            />
          </CardBody>
        </Card>
      </div>

      {/*  Profile Section */}

      <div className="basis-3/5">
        <Card className=" shadow-small bg-slate-100 rounded-3xl h-full">
          <CardBody>
            <p className="text-black text-right">Profile</p>
            {/* <p className=" text-center">{onDuty}</p> */}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
