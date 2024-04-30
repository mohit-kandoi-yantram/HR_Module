// components/FormComponent.tsx
'use client';
import { useForm } from 'react-hook-form';
import { Button, Input, Textarea } from '@nextui-org/react';
import { SetStateAction, useState } from 'react';
import { FormData } from '@/app/type/interface';

export default function InputForm(props: { setOpenPopup: any }) {
  const { setOpenPopup } = props;
  const { register, handleSubmit } = useForm<FormData>();
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (e: {
    target: {
      name: string;
      value: string;
    };
  }) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-1"
      >
        <p>Name</p>
        <Input
          type="text"
          name="name"
          placeholder="Enter name here"
          onChange={handleInputChange}
        />
        <div className="flex justify-between">
          <div>
            <p>Phone Number</p>
            <Input
              type="text"
              name="phoneNo"
              placeholder="Enter your number here"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <p>Email</p>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email here"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-3">
            <p>Address</p>
            <Textarea placeholder="Enter address here" className="max-w-full" />
          </div>
          <div className="col-span-3 flex justify-between">
            <div>
              <p>City</p>
              <Input
                type="text"
                name="city"
                placeholder="Enter your city here"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>State</p>
              <Input
                type="text"
                name="state"
                placeholder="Enter your state here"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Zip Code</p>
              <Input
                type="text"
                name="zipCode"
                placeholder="Enter zip code here"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-span-3 flex justify-between">
            <div>
              <p>Department Name</p>
              <Input
                type="text"
                name="departmentName"
                placeholder="Enter Department here"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>State</p>
              <Input
                type="text"
                name="state"
                placeholder="Enter your state here"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Zip Code</p>
              <Input
                type="text"
                name="zipCode"
                placeholder="Enter zip code here"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-evenly">
          <Button
            className="bg-white text-blue-800 border border-blue-800 rounded-md"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            Back
          </Button>

          <Button
            className="bg-blue-800 text-white border rounded-md"
            type="submit"
          >
            Save & Continue
          </Button>
        </div>
      </form>
    </div>
  );
}
