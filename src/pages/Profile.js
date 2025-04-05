import React from 'react';
import Navbar from '../components/Navbar';
import AccountNav from '../components/AccountNav';
import { homePageNavItems } from '../data/mockData';

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#EDE3DD]">
      <Navbar navItems={homePageNavItems} />
      
      <div className="max-w-[1512px] mx-auto px-4 pt-[120px] pb-8">
        <h1 className="font-['Poppins'] text-center text-[30px] font-bold leading-[32px] tracking-[0%] mb-8">
          Hi Christine
        </h1>

        <div className="mb-12">
          <AccountNav activeTab="profile" />
        </div>

        {/* Profile content here */}
      </div>
    </div>
  );
};

export default Profile; 