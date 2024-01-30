import React from "react";
import Link from "next/link";
import Image from "next/image";


const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/99/99602.png?w=740&t=st=1687522755~exp=1687523355~hmac=f1a01b2a629deeacd48c6d2822c827d88587b65a0e66b1b7758937341e014d19"
            height={50}
            width={50}
            className="rounded-full"
            alt="logo"
          ></Image>
              </Link>
              <h1 className="text-xl">Ikigai</h1>
      </div>
          
              <Link href="/" className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#FFB5A7] flex items-center rounded-full text-center hover:bg-[#FFB5A7] hover:text-gray-900">
                  All-Blogs
              </Link>
      
    </header>
  );
};

export default Header;
