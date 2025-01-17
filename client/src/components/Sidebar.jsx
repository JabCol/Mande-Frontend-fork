import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Sidebar = () => {
  // Routing hook
  const router = useRouter();

  return (
    <aside className='bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5'>
      <div>
        <p className='text-white text-2xl font-black'>MANDE</p>
      </div>

      <nav className='mt-5 list-none'>
        <li className={router.pathname === '/' ? 'bg-blue-800 p-2' : 'p-2'}>
          <Link href='/dashboard' className='text-white block'>
            Dashboard
          </Link>
        </li>
      </nav>
    </aside>
  );
};

export default Sidebar;
