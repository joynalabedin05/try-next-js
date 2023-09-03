import React from 'react';
export const metadata = {
    title: 'Dashboard || Next App',
    description: 'next app',
  };
const DashboardLayout = ({children}) => {
    return (
        <div>
            <div>
                sidebar
            </div>
            {children}
        </div>
    );
};

export default DashboardLayout;