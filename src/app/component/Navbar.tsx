import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md py-4 px-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-white cursor-pointer">Barka Decor</span>
        </Link>
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="text-white hover:text-gray-200">Home</Link></li>
          <li><Link href="/About" className="text-white hover:text-gray-200">About</Link></li>
          <li><Link href="/Gallery" className="text-white hover:text-gray-200">Gallery</Link></li>
          <li><Link href="/Services" className="text-white hover:text-gray-200">Services</Link></li>
          <li><Link href="/contact" className="text-white hover:text-gray-200">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
