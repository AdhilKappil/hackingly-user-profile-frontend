import React from 'react';

const ProfileTabs = ({ selectedTab, handleTabSelect }) => {
    return (
        <div className="w-full flex justify-center border-b-[2px]">
            <ul className="flex justify-between font-semibold text-[16px] w-full px-5 md:px-16 py-1">
                <li>
                    <a
                        href="#"
                        className={`${selectedTab === "about" ? "border-b-[5px] border-[#E8C68F]" : ""} cursor-pointer`}
                        onClick={(e) => handleTabSelect("about", e)}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={`${selectedTab === "project" ? "border-b-[5px] border-[#E8C68F]" : ""} cursor-pointer`}
                        onClick={(e) => handleTabSelect("project", e)}
                    >
                        Project
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={`${selectedTab === "experience" ? "border-b-[5px] border-[#E8C68F]" : ""} cursor-pointer`}
                        onClick={(e) => handleTabSelect("experience", e)}
                    >
                        Experience 
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={`${selectedTab === "achievments" ? "border-b-[5px] border-[#E8C68F]" : ""} cursor-pointer`}
                        onClick={(e) => handleTabSelect("achievments", e)}
                    >
                        Achievements
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ProfileTabs;