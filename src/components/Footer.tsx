import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
        <Link href="/">
        <Image
        src="/Tlogo.jpg"
        width={50}
        height={50}
        alt='logo'
      />
        </Link>
        </div>
        <div>
          <ul>
            <li>About</li>
            <li>Help</li>
            <li>Press</li>
            <li>API</li>
            <li>Jobs</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Locations</li>
            <li>Top Accounts</li>
            <li>Hashtags</li>
            <li>Language</li>
          </ul>
        </div>
      </div>
      <div>
        © {new Date().getFullYear()} Instagram from Facebook
      </div>
    </footer>
  );
};

export default Footer;