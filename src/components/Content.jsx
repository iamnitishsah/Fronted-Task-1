import React from 'react';
import Title from '../assets/Title.svg';
import AvailablePosition from '../assets/Available Position.svg';
import JobOpen from '../assets/Job Open.svg';
import NewEmployee from '../assets/New Employees.svg';
import TotalEmployees from '../assets/Total Employees.svg';
import TalentRequests from '../assets/Talent Requests.svg';
import Announcement from '../assets/Announcement.svg';
import RecentActivity from '../assets/Recent Activity.svg';
import UpcomingSchedule from '../assets/Upcoming Schedule.svg';

const Content = () => {
    return (
        <div className="flex flex-col px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
            {/* Title Section */}
            <div className="mb-6 flex justify-center md:justify-start">
                <img src={Title} alt="Title" className="w-40 md:w-52" />
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Content */}
                <div className="flex flex-col gap-4 w-full lg:w-2/3">
                    {/* Top Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-xl shadow flex justify-center">
                            <img src={AvailablePosition} alt="Available Position" className="w-full max-w-[200px]" />
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow flex justify-center">
                            <img src={JobOpen} alt="Job Open" className="w-full max-w-[200px]" />
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow flex justify-center">
                            <img src={NewEmployee} alt="New Employee" className="w-full max-w-[200px]" />
                        </div>
                    </div>

                    {/* Employee & Talent Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-xl shadow flex justify-center">
                            <img src={TotalEmployees} alt="Total Employees" className="w-full max-w-[250px]" />
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow flex justify-center">
                            <img src={TalentRequests} alt="Talent Requests" className="w-full max-w-[250px]" />
                        </div>
                    </div>

                    {/* Announcements */}
                    <div className="bg-white p-4 rounded-xl shadow flex justify-center">
                        <img src={Announcement} alt="Announcement" className="w-full max-w-[300px]" />
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex flex-col gap-4 w-full lg:w-1/3">
                    <div className="bg-white p-4 rounded-xl shadow flex justify-center">
                        <img src={RecentActivity} alt="Recent Activity" className="w-full max-w-[300px]" />
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow flex justify-center">
                        <img src={UpcomingSchedule} alt="Upcoming Schedule" className="w-full max-w-[300px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
