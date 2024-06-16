import Image from 'next/image';
import Link from 'next/link';
import inv from '../public/inv2.jpg'
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="p-6 flex gap-2  flex-col justify-center items-center mx-4">
      <div className="p-6 flex gap-2 justify-center items-center mx-4 ">
      <div>
      <h1 className="text-7xl font-extrabold mb-4">Inventory and <span className=' text-rose-600'>Manufacturing</span> Management <span className=' text-rose-600' >System</span></h1>
      <ul className='flex gap-8 justify-start items-center mt-4 pt-10 '>
        <li>
          <Link href="/orders"
          className=" bg-blue-600 rounded-md p-3 text-white font-bold hover:bg-white hover:border-2 hover:transition-all  hover:border-blue-600 hover:text-blue-600"
          >
              Orders
          </Link>
        </li>
        <li>
          <Link href="/inventory"
          className=" bg-blue-600 rounded-md p-3 text-white font-bold hover:bg-white hover:border-2 hover:transition-all  hover:border-blue-600 hover:text-blue-600" 
          >
            Inventory
          </Link>
        </li>
      </ul>
      </div>
      <Image
      src={inv}
      className=" border-none"
      alt="Example Image"
      width={500}
      height={300}
    />
      </div>
      {/* <Footer/> */}
      <p>                <strong>Portfolio :</strong> <span><a target='blank' className='text-blue-600' href="https://bento.me/keerthivardhan">Keerthivardhan</a></span>
      </p>
    </div>
  );
}
