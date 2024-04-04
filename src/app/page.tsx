import Image from 'next/image';
import Link from 'next/link';
import Header from './Header/Header.jsx';
import Toptips from './Toptips/Top-tips.jsx';

export default function Home() {
  return (
    <div>
      <div className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <Link href="/">The Bang Team</Link>
            <div className="flex items-center space-x-3 float-right">
            </div>
          <Link href="/">Contact</Link>
        </div>
      </div>
      <Header />
      <Toptips />
    </div>
  );
}
