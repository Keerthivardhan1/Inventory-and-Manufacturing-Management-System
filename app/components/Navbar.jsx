import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white mt-2">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Company name */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <span className="text-3xl  font-extrabold  text-blue-600">My<span className='text-rose-600' >.</span>IMS</span>
          </div>

          {/* Navigation links */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
            <div className="flex space-x-4">
              {/* About Link */}
              <Link href="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm  font-bold"
                    >
                  About
              </Link>
              
              {/* Contact Link */}
              <Link href="/contact"
                 className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-bold"
                 >
                  Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
