import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../../common/IconBtn"

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()

  return (
    <>
    <h1 className="mb-10 text-2xl sm:text-3xl font-medium text-gray-200 text-center sm:text-left">
      My Profile
    </h1>
  
    {/* User Info Section */}
    <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6 sm:gap-0 rounded-md border border-gray-700 bg-gray-900 p-6 sm:p-8 md:px-12">
      <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="space-y-1">
          <p className="text-lg font-semibold text-gray-200">
            {user?.firstName + " " + user?.lastName}
          </p>
          <p className="text-sm text-gray-300">{user?.email}</p>
        </div>
      </div>
      <IconBtn
        text="Edit"
        onclick={() => navigate("/dashboard/settings")}
      >
        <RiEditBoxLine />
      </IconBtn>
    </div>
  
    {/* About Section */}
    <div className="my-10 flex flex-col gap-y-6 rounded-md border border-gray-700 bg-gray-900 p-6 sm:p-8 md:px-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-lg font-semibold text-gray-200">About</p>
        <IconBtn
          text="Edit"
          onclick={() => navigate("/dashboard/settings")}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>
      <p
        className={`${
          user?.additionalDetails?.about ? "text-gray-200" : "text-gray-400"
        } text-sm font-medium`}
      >
        {user?.additionalDetails?.about ?? "Write Something About Yourself"}
      </p>
    </div>
  
    {/* Personal Details Section */}
    <div className="my-10 flex flex-col gap-y-6 rounded-md border border-gray-700 bg-gray-900 p-6 sm:p-8 md:px-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-lg font-semibold text-gray-200">Personal Details</p>
        <IconBtn
          text="Edit"
          onclick={() => navigate("/dashboard/settings")}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>
  
      {/* Two Column Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
        {/* Left Column */}
        <div className="flex flex-col gap-y-5">
          <div>
            <p className="mb-2 text-sm text-gray-200">First Name</p>
            <p className="text-sm font-medium text-gray-400">{user?.firstName}</p>
          </div>
          <div>
            <p className="mb-2 text-sm text-gray-200">Email</p>
            <p className="text-sm font-medium text-gray-400">{user?.email}</p>
          </div>
          <div>
            <p className="mb-2 text-sm text-gray-200">Gender</p>
            <p className="text-sm font-medium text-gray-400">
              {user?.additionalDetails?.gender ?? "Add Gender"}
            </p>
          </div>
        </div>
  
        {/* Right Column */}
        <div className="flex flex-col gap-y-5">
          <div>
            <p className="mb-2 text-sm text-gray-200">Last Name</p>
            <p className="text-sm font-medium text-gray-400">{user?.lastName}</p>
          </div>
          <div>
            <p className="mb-2 text-sm text-gray-200">Phone Number</p>
            <p className="text-sm font-medium text-gray-400">
              {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
            </p>
          </div>
          <div>
            <p className="mb-2 text-sm text-gray-200">Date Of Birth</p>
            <p className="text-sm font-medium text-gray-400">
              {formattedDate(user?.additionalDetails?.dateOfBirth) ?? "Add Date Of Birth"}
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}