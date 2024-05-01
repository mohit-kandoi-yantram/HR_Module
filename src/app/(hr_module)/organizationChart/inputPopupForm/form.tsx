// components/FormComponent.tsx
'use client';
import { useForm } from 'react-hook-form';
import { Button, Input, Textarea } from '@nextui-org/react';
import { ChangeEvent, SetStateAction, useState } from 'react';
import { FormData } from '@/app/type/interface';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';

const stateList = [
  {
    key: 0,
    name: 'Rajasthan',
  },
  { key: 1, name: 'Gujarat' },
  { key: 2, name: 'Maharastra' },
];
const cityList = [
  {
    key: 0,
    cities: ['Jaipur,Ajmer'],
  },

  {
    key: 1,
    cities: ['Surat , Ahmedabad'],
  },
  {
    key: 2,
    cities: ['Mumbai,Pune'],
  },
];

const randomData = [
  {
    key: 0,
    name: 'ABC',
  },
  { key: 1, name: 'IJK' },
  { key: 2, name: 'XYZ' },
];

export default function InputForm(props: { setOpenPopup: any }) {
  const { setOpenPopup } = props;
  const { register, handleSubmit } = useForm<FormData>();
  const [inputValue, setInputValue] = useState({});

  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

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
        <Input
          type="text"
          name="name"
          label="Name"
          labelPlacement="outside"
          placeholder="Enter name here"
          onChange={handleInputChange}
          variant="bordered"
        />
        <div className="flex gap-2">
          <div className="basis-1/2">
            <Input
              type="text"
              name="phoneNo"
              label="Contact No"
              labelPlacement="outside"
              variant="bordered"
              placeholder="Enter your number here"
              onChange={handleInputChange}
              fullWidth
            />
          </div>
          <div className="basis-1/2">
            <Input
              type="email"
              name="email"
              label="Email"
              labelPlacement="outside"
              variant="bordered"
              placeholder="Enter your email here"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-y-2">
          <div className="col-span-3">
            <Textarea
              label="Address"
              labelPlacement="outside"
              placeholder="Enter address here"
              variant="bordered"
            />
          </div>
          <div className="col-span-3 flex justify-between gap-2">
            <div>
              <Autocomplete
                allowsCustomValue
                label="State"
                labelPlacement="outside"
                variant="bordered"
                className="max-w-xs"
                defaultItems={stateList}
              >
                {(item) => (
                  <AutocompleteItem key={item.key}>
                    {item.name}
                  </AutocompleteItem>
                )}
              </Autocomplete>
            </div>
            <div>
              <Autocomplete
                allowsCustomValue
                label="City"
                labelPlacement="outside"
                variant="bordered"
                className="max-w-xs"
                defaultItems={cityList}
              >
                {(item) => (
                  <AutocompleteItem key={item.key}>
                    {item.cities}
                  </AutocompleteItem>
                )}
              </Autocomplete>
            </div>
            <div>
              <Input
                type="text"
                name="zipCode"
                label="Zip Code"
                labelPlacement="outside"
                variant="bordered"
                placeholder="Enter zip code here"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-span-3 grid grid-cols-3 gap-2">
            <div>
              <Autocomplete
                allowsCustomValue
                label="Department"
                labelPlacement="outside"
                variant="bordered"
                className="max-w-xs"
                defaultItems={randomData}
              >
                {(item) => (
                  <AutocompleteItem key={item.key}>
                    {item.name}
                  </AutocompleteItem>
                )}
              </Autocomplete>
            </div>
            <div>
              <Autocomplete
                allowsCustomValue
                label="Designation"
                labelPlacement="outside"
                variant="bordered"
                className="max-w-xs"
                defaultItems={randomData}
              >
                {(item) => (
                  <AutocompleteItem key={item.key}>
                    {item.name}
                  </AutocompleteItem>
                )}
              </Autocomplete>
            </div>
            <div>
              <label htmlFor="imageUpload" className="text-sm">
                Upload Image:
              </label>
              <input
                type="file"
                accept="image/*"
                id="imageUpload"
                onChange={handleImageUpload}
              />
            </div>
          </div>

          <div className="col-span-3 flex justify-between gap-2">
            <div className="mt-8 mr-4">
              <Button
                className="bg-white text-blue-800 border border-blue-800 rounded-md"
                onClick={() => {
                  setOpenPopup(false);
                }}
              >
                Cancel
              </Button>
            </div>
            <div className="flex gap-2">
              <Autocomplete
                allowsCustomValue
                label="Report To"
                labelPlacement="outside"
                variant="bordered"
                className="max-w-xs"
                defaultItems={randomData}
              >
                {(item) => (
                  <AutocompleteItem key={item.key}>
                    {item.name}
                  </AutocompleteItem>
                )}
              </Autocomplete>
              <Input
                type="text"
                name="employeeId"
                label="Employee ID"
                labelPlacement="outside"
                variant="bordered"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Button
                className="bg-blue-800 text-white border rounded-md mt-8 ml-4"
                type="submit"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
