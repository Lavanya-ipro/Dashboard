import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../public/assets/images/logo.png";
import notification from "../../../public/assets/images/notification.png";
import { Button, Input } from "@/components/ui";
import { useUserContext } from "@/context/AuthContext";
import Loader from "../shared/Loader.tsx";
import { useSignOutAccount } from "@/lib/react-query/queries";

const Header = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useUserContext();
  const [searchValue, setSearchValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { mutate: signOut, isSuccess } = useSignOutAccount();

  // Toggle dropdown menus
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleProfileDropDown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Closing dropdown logic upon clicking anywhere on the screen
  const closeDropdowns = () => {
    setIsDropdownOpen(false);
    setIsProfileOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !event.target.closest(".relative.inline-block.text-left")
    ) {
      closeDropdowns();
    }
  };

  useEffect(() => {
    // Add click event listener to close dropdowns on outside click
    window.addEventListener("click", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);

  return (
    // w-full flex items-center py-5 fixed top-0 z-20 bg-[#1d343c]
    <nav className="w-full items-center md:py-5 fixed top-0 z-20 bg-[#1d343c] border-b">
      <div className="w-full flex justify-between items-center max-w-full">
        <Link
          to="/"
          className="flex items-center gap-2"
          style={{ marginLeft: "2em" }}
        >
          <img
            src={logo}
            alt="iPro Suite"
            style={{ borderRadius: "50%" }}
            className="w-9 h-9 object-contain mr-auto"
          />
          <p className="text-white text-[16pt] font-bold cursor-pointer flex ">
            iPro Suite &nbsp;
          </p>
        </Link>

        <Input
          type="text"
          placeholder="Search"
          className="explore-search hidden lg:block"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        {isLoading || !user.email ? (
          <div className="h-14">
            <Loader />
          </div>
        ) : (
          <div
            className="flex gap-3 items-center"
            style={{ marginRight: "2em" }}
          >
            {/* Notification Dropdown */}
            <div
              ref={dropdownRef}
              style={{ marginRight: "1em" }}
              className="relative inline-block text-left"
            >
              <button
                className="flex items-center focus:outline-none"
                onClick={toggleDropdown}
              >
                <img
                  src={notification}
                  alt="iPro Suite"
                  className="w-6 h-6 object-contain"
                />
              </button>
              {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#36AFCE] ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Link
                      to="/notifications"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      View All Notifications
                    </Link>
                    {/* Repeat the above Link for the desired number of notification links */}
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative inline-block text-left">
              <button
                className="flex items-center focus:outline-none"
                onClick={toggleProfileDropDown}
              >
                <img
                  src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
                  alt="profile"
                  className="h-10 w-10 rounded-full"
                />
              </button>
              {isProfileOpen && (
                <div className="origin-bottom-left absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#36AFCE] ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Link
                      to="/account-settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Account Settings
                    </Link>
                    <Link
                      to="/company-settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Company Settings
                    </Link>
                    <Button
                      onClick={() => signOut()}
                      variant="ghost"
                      className="block px-4 w-full py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <span className="flex gap-4">
                        <img src="/assets/icons/logout.svg" alt="logout" />{" "}
                        Logout
                      </span>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
