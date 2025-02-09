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
        <div className="flex flex-col ml-4">
            <div className="Title">
                <img src={Title} alt="Title"/>
            </div>

            <div className="flex flex-row">
                <div className="LeftContent">
                    <div className="flex flex-row justify-center">
                        <div className="AvailablePosition">
                            <img src={AvailablePosition} alt="AvailablePosition"/>
                        </div>
                        <div className="JobOpen">
                            <img src={JobOpen} alt="JobOpen"/>
                        </div>
                        <div className="NewEmployee">
                            <img src={NewEmployee} alt="NewEmployee"/>
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <div className="TotalEmployees">
                            <img src={TotalEmployees} alt="TotalEmployees"/>
                        </div>
                        <div className="TalentRequests">
                            <img src={TalentRequests} alt="TalentRequests"/>
                        </div>
                    </div>

                    <div className="Announcement">
                        <img src={Announcement} alt="Announcement"/>
                    </div>
                </div>

                <div className="RightContent">
                    <div>
                        <img src={RecentActivity} alt="RecentActivity"/>
                    </div>
                    <div>
                        <img src={UpcomingSchedule} alt="UpcomingSchedule"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;