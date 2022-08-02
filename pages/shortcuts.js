import React from "react";
import shortcuts from "/public/Photos/shortcuts.png";
import Image from "next/image";
import Link from "next/link";
const Shortcuts = () => {
  return (
    <div className='h-screen'>
      <div className='h-full'>
        <Image layout='fill' src={shortcuts} />
      </div>
      <div className='absolute  text-yellow-400 left-10 inset-y-1/2'>
        mod = CTRL on windows or linux and CMD key on Mac
      </div>

      <div className='flex  absolute z-50 bottom-10 inset-x-8 items-center justify-center mt-6'>
        <Link href='/dashboard-tutorials'>
          <a className='text-2xl  text-blue-400 hover:underline'>
            Dashboard Tutorials
          </a>
        </Link>
        <div className='mx-10'>
          <Link href='/contact'>
            <a className='text-2xl  text-blue-400 hover:underline'>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shortcuts;
