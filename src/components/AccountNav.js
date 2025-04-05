import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccountNav = ({ activeTab }) => {
  const navigate = useNavigate();

  const tabs = [
    { id: 'account', label: 'Account', path: '/account' },
    { id: 'profile', label: 'Eveness Profile', path: '/account/profile' },
    { id: 'orders', label: 'My Orders', path: '/account/orders' },
    { id: 'rewards', label: 'Rewards', path: '/account/rewards' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-[532px] h-[56px] mx-auto rounded-[8px] bg-[#FFFFFF5C] backdrop-blur-[36px] shadow-[0px_0px_16px_0px_#00000004] overflow-hidden">
      <div className="w-full h-full flex items-center px-4">
        <div className="w-full flex justify-between">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleNavigation(tab.path)}
              className={`h-[36px] whitespace-nowrap px-[18px] rounded-[4px] font-['Poppins'] font-medium text-[14px] leading-[150%] tracking-[0%] transition-colors flex items-center justify-center ${
                activeTab === tab.id
                  ? 'bg-[#00000099] text-white'
                  : 'text-[#797979] hover:bg-black/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountNav; 