import Image from 'next/image';
import Link from "next/link";
import logo from '../../../asset/geeksis.png';

const NavigationBar = () => {
    return (
        <div className="w-full h-20 sticky top-0">
            <div className="md:container md:mx-auto h-full">
                <div className="flex justify-between items-center h-full">
                    <Link href="/">
                    <Image src={logo} className='w-64' />
                    </Link>                
                    <ul className="hidden md:flex gap-x-16 text-white">
                        <li>
                            <Link href="/phrases">
                                <p>Phrases</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/articles">
                                <p>Articles</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/atc">
                                <p>ATC</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;