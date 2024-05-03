// components/Avatar.tsx

import React from 'react';

interface AvatarProps {
  src: string;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    // <div className="relative w-100 h-100 border-2 border-black overflow-hidden bg-slate-100">
    //   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-white rounded-full overflow-hidden">
    //     <img src={src} alt="Avatar" className="w-full h-full object-cover" />
    //   </div>
    // </div>
    <div className="bg-slate-100  h-20 w-44 border-t-large border-blue-800">
      <img
        src={src}
        alt="image"
        className="absolute size-12 transform translate-x-16 -translate-y-6"
      />
      <h1 className="mt-6 text-center font-bold">Mohit kandoi</h1>
      <h2 className="text-center">CEO</h2>
    </div>
  );
};

export default Avatar;
