import Banner from "../components/Banner";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { useState } from "react";
import ProfileTabs from "../components/ProfileTabs";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import { useSelector } from "react-redux";
import { FaLinkedin } from "react-icons/fa";

function Home() {
  const [selectedTab, setSelectedTab] = useState("about");
  const { userInfo } = useSelector((state) => state.auth);
  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex w-3/4 mt-10 gap-10">
          <div className="w-3/4">
            <div className="shadow-lg">
              <Banner />
              <div className="flex justify-between">
                <div className="mt-16 mb-10">
                  <div>
                    <p className="font-semibold ml-5 text-2xl font-Sans">
                      {userInfo.name}
                    </p>
                    <p className="ml-5 text-sm text-gray-500 font-Sans">
                      {userInfo.email}
                    </p>
                  </div>
                </div>
                <div className="mt-16 pr-20">
                  <div className="flex gap-5">
                    <div className="">
                      <img
                        className="h-8 w-8"
                        src="/Images/G.c726709e.jpg"
                        alt=""
                      />
                    </div>
                    <div>Hackingly</div>
                  </div>
                  <div className="flex gap-5 mt-3">
                    <div className="">
                      <img
                        className="h-8 w-8"
                        src="/Images/university-logo.png"
                        alt=""
                      />
                    </div>
                    <div>University of Calicut</div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="">
                <ProfileTabs
                  selectedTab={selectedTab}
                  handleTabSelect={handleTabSelect}
                />
              </div>
              <div>
                {selectedTab === "about" ? (
                  <About />
                ) : selectedTab === "project" ? (
                  <Projects />
                ) : selectedTab === "experience" ? (
                  <Experience />
                ) : selectedTab === "achievments" ? (
                  <Achievements />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="w-64 shadow-md border rounded-md">
            <div className="p-3">
              <p className="font-Sans font-semibold text-lg">
                Profile language
              </p>
              <p className="text-gray-500">English</p>
              <hr className="mt-2" />
            </div>
            <div className="px-3">
              <p className="font-Sans font-semibold text-lg">Social Links</p>
              <div>
                <div className="flex justify-between mt-3">
                  <p className="text-gray-500">GitHub</p>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
                <div className="flex justify-between mt-3">
                  <p className="text-gray-500">LeetCode</p>
                  <a
                    href="https://leetcode.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiLeetcode size={20} />
                  </a>
                </div>
                <div className="flex justify-between mt-3">
                  <p className="text-gray-500">LinkedIn</p>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
              <hr className="mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
