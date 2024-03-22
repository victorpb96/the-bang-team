import Image from "next/image";
import Link from 'next/link';
import Header from './Header/Header';

export default function Home() {
  return (
    <>
      <div class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <Link href="/">The Bang Team</Link>
            <div class="flex items-center space-x-3 float-right">
                <Link href="/">About</Link>
            </div>
          <Link href="/">Contact</Link>
        </div>
      </div>
      <Header />
    </>
  );
}
