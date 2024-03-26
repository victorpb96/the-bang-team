import Image from 'next/image';
import racehorse from '/public/racehorse.jpg';
import StyleSheet from './Header.css';

export default function Header() {
    return (
        <div className={StyleSheet.container}>
            <Image
                src="/racehorse.jpg"
                width={500}
                height={500}
                alt="racehorse"
                className={StyleSheet.image}
            />
      </div>
    );
  }