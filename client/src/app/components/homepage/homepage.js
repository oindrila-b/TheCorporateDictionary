import homepage from '../../../asset/homepage.png';
import Image from 'next/image';

export const HomePageContent = () => {
    return <div >
        <div className="justify-center flex-wrap flex-col">
            <div>
            <Image src={homepage} className='w-5/12' />
            </div>
        </div>
    </div>
}