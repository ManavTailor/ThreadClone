import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession()
    return (
    <header style={{ position: 'fixed', top: 0, width: '100%', background: 'white', zIndex: 100, display: "flex" }}>

      <div >
        <Link href="/">
        <Image
        onClick={()=>signIn()}
        src="/Tlogo.jpg"
        width={40}
        height={80}
        alt='logo'
      />
        </Link>
       
      </div>
      <div style={{display : 'inline-flex', marginRight : '40%'}}>
      <div>
  <Image
    width="30"
    height="30"
    src="https://img.icons8.com/fluency-systems-filled/48/home.png"
    alt="home"
  />
</div>
<div style={{ marginLeft: '10px' }}>
  <Image
    width="30"
    height="30"
    src="https://img.icons8.com/ios/50/search--v1.png"
    alt="search--v1"
  />
</div>
<div style={{  marginLeft: '10px' }}>
  <Image
    width="30"
    height="30"
    src="https://img.icons8.com/fluency-systems-filled/48/create-new.png"
    alt="create-new"
  />
</div>
<div style={{marginLeft: '10px' }}>
  <Image
    width="30"
    height="30"
    src="https://img.icons8.com/ios/50/like--v1.png"
    alt="like--v1"
  />
</div>
<div style={{ marginLeft : '10px' }}>
  <Image
    width="30"
    height="30"
    src="https://img.icons8.com/material-outlined/24/user--v1.png"
    alt="user--v1"
  />
</div>
</div>
    </header>
    
  );
 
};
export default Header;

