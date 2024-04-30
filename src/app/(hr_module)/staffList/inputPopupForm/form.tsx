// components/FormComponent.tsx
'use client';
import { useForm } from 'react-hook-form';
import { Button, Input } from '@nextui-org/react';
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
        className="flex w-full flex-col gap-4"
      >
        <Input
          type="text"
          label="Employee ID"
          name="employeeId"
          labelPlacement="outside-left"
          placeholder="Enter ID"
          variant="bordered"
          onChange={handleInputChange}
          fullWidth
        />
        <Input
          type="name"
          label="Name"
          name="name"
          labelPlacement="outside-left"
          placeholder="Enter Name"
          variant="bordered"
          onChange={handleInputChange}
        />
        <Input
          type="email"
          label="E-mail"
          name="email"
          labelPlacement="outside-left"
          placeholder="Enter E-mail"
          variant="bordered"
          onChange={handleInputChange}
        />
        <Input
          label="Contact No"
          type="text"
          name="contactNo"
          labelPlacement="outside-left"
          placeholder="Enter Contact No"
          onChange={handleInputChange}
        />

        <Input
          type="text"
          label="Department"
          name="department"
          labelPlacement="outside-left"
          placeholder="Enter Department"
          onChange={handleInputChange}
        />
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
