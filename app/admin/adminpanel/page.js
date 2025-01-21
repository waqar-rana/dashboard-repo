"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRouter } from "next-nprogress-bar";
import AdminHeader from "@/app/components/adminheader";
import Link from "next/link";
import { toast } from "react-toastify";

const Admimpanel = () => {
  const router = useRouter();
  const [usersList, setUsersList] = useState([]);
  const [hideAddUser, setHideAddUser] = useState(true);
  const [hideDelPanel, setHideDelPanel] = useState(true);
  const [showEditPanel, setShowEditPanel] = useState(false);
  const [userFetching, setUserFetching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(usersList);
  const [sortOrder, setSortOrder] = useState(null);
  const [tempIndex, setTempIndex] = useState(null);
  const [showCommission, setshowCommission] = useState(false);
  const [adminUsername, setAdminUsername] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDashboard, setShowDashboard] = useState(true);
  const [dashboardLoading, setDashboardLoading] = useState(false);
  const [showStats, setShowStats] = useState(true);
  const [showEarnings, setShowEarnings] = useState(true);

  useEffect(() => {
    document.title = "Admin Panel | Daily Earn Online";
    getUsers();
  }, []);

  useEffect(() => {
    getAdmin();
  }, [showDashboard]);

  useEffect(() => {
    const results = usersList.filter(
      (row) =>
        row.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [searchTerm, usersList]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDropdown && !event.target.closest('.dropdown-menu')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const getUsers = async () => {
    setUserFetching(true);
    const req = await fetch(`/api/getusers`, {
      next: {
        tags: ["users"], // Invalidate with revalidateTag('users') on-demand
        revalidate: 300, // 5 min
      },
    });
    if (req.ok) {
      const res = await req.json();
      // const result = await addRevenue(res);
      setUsersList(res);
      setFilteredData(res);
    } else {
      setUsersList([]);
      setFilteredData([]);
    }
    setUserFetching(false);
  };

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  const {
    register: editRegister,
    handleSubmit: editHandleSubmit,
    setError: editSetError,
    clearErrors: editClearErrors,
    setValue: editSetValue,
    formState: { errors: editErrors, isSubmitting: editIsSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    data.username = data.username.toLowerCase();
    data.email = data.email.toLowerCase();
    data.commission = Number(data.commission);
    const req = await fetch("/api/adduser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const res = await req.json();
    if (req.ok) {
      toast("User have been added Succeessfully", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setHideAddUser(true);
    } else {
      setError("formErrors", { message: res.error });
    }
    getUsers();
  };

  const editUser = async (data) => {
    data.username = data.username.toLowerCase();
    await fetch("/api/updateUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          toast(res.message, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          getUsers();
          setShowEditPanel(false);
        }
      })
      .catch((err) => editSetError("editErrors", { message: err.error }));
  };

  const deleteUser = async () => {
    const response = await fetch("/api/deleteuser", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: tempIndex }),
    });
    if (response.ok) {
      toast("User have been Deleted!!!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    getUsers();
  };

  const handleSort = () => {
    if (sortOrder === null) {
      setSortOrder("desc");
      setFilteredData(
        [...filteredData].sort(
          (a, b) =>
            b.currentRevenue -
            (b.commission / 100) * b.currentRevenue -
            (a.currentRevenue - (a.commission / 100) * a.currentRevenue)
        )
      ); // Ascending
    } else if (sortOrder === "desc") {
      setSortOrder("asc");
      setFilteredData(
        [...filteredData].sort(
          (a, b) =>
            a.currentRevenue -
            (a.commission / 100) * a.currentRevenue -
            (b.currentRevenue - (b.commission / 100) * b.currentRevenue)
        )
      ); // Descending
    } else {
      setSortOrder(null);
      setFilteredData(usersList);
    }
  };

  const getAdmin = async () => {
    const response = await fetch("/api/dashboard");
    const admin = await response.json();
    setAdminUsername(admin.username);
    setShowDashboard(admin.enableDashboard);
    setShowStats(admin.enableStatistics);
    setShowEarnings(admin.enableEarnings);
  };

  const ToogleDashboard = async () => {
    setDashboardLoading(true);
    await fetch("/api/dashboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: adminUsername,
        enableDashboard: !showDashboard
      }),
    })
      .then((response) => {
        if (response.ok) {
          getAdmin();
        }
        setDashboardLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const ToogleStats = async () => {
    setDashboardLoading(true);
    await fetch("/api/dashboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: adminUsername,
        enableStatistics: !showStats
      }),
    })
      .then((response) => {
        if (response.ok) {
          getAdmin();
        }
        setDashboardLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const ToogleEarnings = async () => {
    setDashboardLoading(true);
    await fetch("/api/dashboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: adminUsername,
        enableEarnings: !showEarnings
      }),
    })
      .then((response) => {
        if (response.ok) {
          getAdmin();
        }
        setDashboardLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <AdminHeader />
      <main className="relative">
        <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
          Daily Earn Admin’s Panel
        </h1>
        <div className="w-[80vw] mx-auto mt-4 relative shadow-md sm:rounded-lg">
          <div className="bg-gray-900 flex justify-between items-center flex-wrap gap-2 p-1">
            <div className="relative mx-1 w-full sm:w-1/2">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                value={searchTerm}
                onChange={handleSearch}
                type="text"
                className="py-1 ps-10 text-sm border rounded-lg w-full bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search for users or emails"
              />
            </div>
            
            <div className="flex items-center justify-end gap-4 w-full sm:w-auto">

              <button
                onClick={() => {
                  setshowCommission(!showCommission);
                }}
                className="pt-2"
                title="Show Commision"
              >
                {showCommission && (
                  <lord-icon
                    src="https://cdn.lordicon.com/fmjvulyw.json"
                    trigger="hover"
                    stroke="light"
                    state="hover-look-around"
                    style={{ width: "30px", height: "30px" }}
                  ></lord-icon>
                )}
                {!showCommission && (
                  <lord-icon
                    src="https://cdn.lordicon.com/fmjvulyw.json"
                    trigger="hover"
                    stroke="bold"
                    state="hover-lashes"
                    colors="primary:#ffffff,secondary:#ebe6ef,tertiary:#3a3347,quaternary:#4bb3fd,quinary:#f9c9c0,senary:#f24c00"
                    style={{ width: "30px", height: "30px" }}
                  ></lord-icon>
                )}
              </button>

              <div className="relative">
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => {
                    setShowDropdown(!showDropdown);
                    }}
                  >
                    Toggle Options{" "}
                    <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                    >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                    </svg>
                  </button>

                  {showDropdown && (
                    <div className="dropdown-menu absolute top-full z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                      <button
                        onClick={() => {
                            ToogleDashboard();
                          }}
                          className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          title="Start/Stop Compelete Dashboard"
                        >
                          <div className="flex items-center justify-between">
                            Dashboard
                          {dashboardLoading ? (
                              <lord-icon
                                src="https://cdn.lordicon.com/mgtqmgmg.json"
                                trigger="loop"
                                state="loop-snake"
                                colors="primary:#e8e230"
                                style={{ width: "30px", height: "30px" }}
                              ></lord-icon>
                          ) : showDashboard ? (
                              <lord-icon
                                src="https://cdn.lordicon.com/lomfljuq.json"
                                trigger="morph"
                                state="morph-check-out-2"
                                colors="primary:#30e849"
                                style={{ width: "30px", height: "30px" }}
                              ></lord-icon>
                          ) : (
                              <lord-icon
                                src="https://cdn.lordicon.com/zxvuvcnc.json"
                                trigger="morph"
                                state="morph-cross"
                                colors="primary:#e83a30"
                                style={{ width: "30px", height: "30px" }}
                              ></lord-icon>
                          )}
                            </div>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            ToogleStats();
                          }}
                          className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          title="Start/Stop Statistics Page"
                        >
                          <div className="flex items-center justify-between">
                            Statistics
                          {dashboardLoading ? (
                              <lord-icon
                                src="https://cdn.lordicon.com/mgtqmgmg.json"
                                trigger="loop"
                                state="loop-snake"
                                colors="primary:#e8e230"
                                style={{ width: "30px", height: "30px" }}
                              ></lord-icon>
                          ) : showStats ? (
                              <lord-icon
                                src="https://cdn.lordicon.com/lomfljuq.json"
                                trigger="morph"
                                state="morph-check-out-2"
                                colors="primary:#30e849"
                                style={{ width: "30px", height: "30px" }}
                              ></lord-icon>
                          ) : (
                              <lord-icon
                                src="https://cdn.lordicon.com/zxvuvcnc.json"
                                trigger="morph"
                                state="morph-cross"
                                colors="primary:#e83a30"
                                style={{ width: "30px", height: "30px" }}
                              ></lord-icon>
                          )}
                            </div>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            ToogleEarnings();
                          }}
                          className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          title="Start/Stop Earnings Page"
                        >
                          <div className="flex items-center justify-between">
                            Earnings
                          {dashboardLoading ? (
                              <lord-icon
                                src="https://cdn.lordicon.com/mgtqmgmg.json"
                                trigger="loop"
                                state="loop-snake"
                                colors="primary:#e8e230"
                                style={{ width: "30px", height: "30px" }}
                              ></lord-icon>
                          ) : showEarnings ? (
                              <lord-icon
                                src="https://cdn.lordicon.com/lomfljuq.json"
                                trigger="morph"
                                state="morph-check-out-2"
                                colors="primary:#30e849"
                                style={{ width: "30px", height: "30px" }}
                              ></lord-icon>
                          ) : (
                              <lord-icon
                                src="https://cdn.lordicon.com/zxvuvcnc.json"
                                trigger="morph"
                                state="morph-cross"
                                colors="primary:#e83a30"
                                style={{ width: "30px", height: "30px" }}
                              ></lord-icon>
                          )}
                            </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  setHideAddUser(false);
                }}
                className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Add User
              </button>
            </div>

            <div
              className={`bg-[#37415180] ${
                hideAddUser ? "hidden" : "flex"
              } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full`}
            >
              <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative rounded-lg shadow bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                    <h3 className="text-xl font-semibold text-white">
                      Add New User Credentials
                    </h3>
                    <button
                      onClick={() => {
                        setHideAddUser(true);
                      }}
                      type="button"
                      className="end-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-900 hover:text-white"
                    >
                      <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4 md:p-5">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          onFocus={() => {
                            clearErrors("formErrors");
                          }}
                          {...register("email", { required: true })}
                          className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                          placeholder="Enter Email Address"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="username"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          onFocus={() => {
                            clearErrors("formErrors");
                          }}
                          {...register("username", { required: true })}
                          className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                          placeholder="Enter Username"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Password
                        </label>
                        <input
                          type="text"
                          onFocus={() => {
                            clearErrors("formErrors");
                          }}
                          {...register("password", { required: true })}
                          placeholder="••••••••"
                          className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="commission"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Commission
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          onFocus={() => {
                            clearErrors("formErrors");
                          }}
                          {...register("commission", { required: true })}
                          className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                          placeholder="Enter Commission"
                        />
                      </div>
                      {errors.formErrors && (
                        <span className="text-red-600 font-bold">
                          {errors.formErrors.message}
                        </span>
                      )}
                      {!isSubmitting && (
                        <button className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                          Add New User
                        </button>
                      )}
                      {isSubmitting && (
                        <button
                          disabled
                          type="button"
                          className="w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-900 inline-flex items-center justify-center"
                        >
                          <svg
                            role="status"
                            className="inline w-4 h-4 me-3 animate-spin text-gray-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="#1C64F2"
                          />
                          </svg>
                          Adding...
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
            <table className="w-full text-sm text-center rtl:text-right text-gray-400">
              <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                <tr>
                  <th scope="col" className="px-3 py-3">
                    #
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Username
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3">
                    <div className="flex items-center justify-center">
                      Pending Payments
                      <button onClick={handleSort}>
                        <div className="flex flex-col items-center">
                          <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            style={{ marginBottom: "-4px" }}
                          >
                            <polygon
                              points="12,8 16,14 8,14"
                              fill={sortOrder === "asc" ? "white" : "gray"}
                            />
                          </svg>
                          <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            style={{ marginTop: "-4px" }}
                          >
                            <polygon
                              points="12,16 16,10 8,10"
                              fill={sortOrder === "desc" ? "white" : "gray"}
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </th>
                  {showCommission && (
                    <th scope="col" className="px-3 py-3">
                      Commission
                    </th>
                  )}
                  <th scope="col" className="px-3 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {userFetching && (
                  <tr className="text-center border-b bg-gray-800 border-gray-700 hover:bg-gray-900">
                    <td colSpan={"100"} className="px-3 py-4">
                      <div className="w-full flex justify-center items-center">
                        <svg
                          aria-hidden="true"
                          className="w-10 h-10 animate-spin text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                )}
                {filteredData.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className={`text-center border-b bg-gray-800 border-gray-700 ${
                        hideDelPanel ? "hover:bg-gray-900" : ""
                      }`}
                    >
                      <td
                        scope="row"
                        className="px-3 py-2 font-bold whitespace-nowrap flex items-center justify-center gap-2"
                      >
                        {index + 1}
                        {item.enableWarning && (
                          <div title="This User is Under Warning" className="">
                            <lord-icon
                              src="https://cdn.lordicon.com/abvsilxn.json"
                              trigger="hover"
                              colors="primary:#ffc738"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon>
                          </div>
                        )}
                      </td>
                      <td
                        scope="row"
                        className="px-3 py-4 font-bold whitespace-nowrap"
                      >
                        <Link
                          href={`/admin/adminpanel/${item.username}`}
                          className="hover:underline hover:text-white"
                        >
                          {item.username}
                        </Link>
                      </td>
                      <td
                        scope="row"
                        className="px-3 py-4 font-medium whitespace-nowrap"
                      >
                        <Link
                          href={`mailto:${item.email}`}
                          target="blank"
                          className="hover:underline hover:text-white"
                        >
                          {item.email}
                        </Link>
                      </td>
                      <td className="px-3 py-4">
                        $
                        {(
                          item.currentRevenue -
                          (item.commission / 100) * item.currentRevenue
                        ).toFixed(2)}
                      </td>
                      {showCommission && (
                        <td className="px-3 py-4">{item.commission}%</td>
                      )}
                      <td className="px-3 py-2">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => {
                              setHideDelPanel(false);
                              setTempIndex(item.username);
                            }}
                            title="Delete User"
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/skkahier.json"
                              trigger="morph"
                              state="morph-trash-full"
                              colors="primary:#dc2626"
                              style={{ width: "28px", height: "28px" }}
                            ></lord-icon>
                          </button>
                          <button
                            onClick={() => {
                              setShowEditPanel(true);
                              editSetValue("username", item.username);
                              editSetValue("commission", item.commission);
                            }}
                            title="Edit User"
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/zfzufhzk.json"
                              trigger="hover"
                              stroke="bold"
                              state="hover-line"
                              colors="primary:#000000,secondary:#ffc738,tertiary:#ebe6ef,quaternary:#f9c9c0,quinary:#e4e4e4"
                              style={{ width: "28px", height: "28px" }}
                            ></lord-icon>
                          </button>
                        </div>
                        <div
                          className={`bg-[#37415130] ${
                            hideDelPanel ? "hidden" : "flex"
                          } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full`}
                        >
                          <div className="h-screen flex items-center justify-center relative p-4 w-full max-w-md md:h-auto">
                            <div className="relative p-4 text-center rounded-lg shadow bg-gray-800 sm:p-5">
                              <button
                                onClick={() => {
                                  setHideDelPanel(true);
                                  setTempIndex(null);
                                }}
                                className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-900 hover:text-white"
                                data-modal-toggle="deleteModal"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <span className="sr-only">Close modal</span>
                              </button>
                              <svg
                                className="text-gray-500 w-11 h-11 mb-3.5 mx-auto"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              <p className="mb-4 text-gray-300">
                                Are you sure you want to delete this item?
                              </p>
                              <div className="flex justify-center items-center space-x-4">
                                <button
                                  data-modal-toggle="deleteModal"
                                  onClick={() => {
                                    setHideDelPanel(true);
                                    setTempIndex(null);
                                  }}
                                  className="py-2 px-3 text-sm font-medium rounded-lg border focus:ring-4 focus:outline-none focus:ring-primary-300 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-900 focus:ring-gray-600"
                                >
                                  No, cancel
                                </button>
                                <button
                                  onClick={() => {
                                    deleteUser();
                                    setHideDelPanel(true);
                                    setTempIndex(null);
                                  }}
                                  className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-red-500 hover:bg-red-600 focus:ring-red-900"
                                >
                                  Yes, I am sure
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {showEditPanel && (
                          <div className="bg-black bg-opacity-5 w-screen h-screen fixed top-0 left-0 flex items-center justify-center">
                            <div className="relative p-4 w-full max-w-md max-h-full">
                              <div className="relative rounded-lg shadow bg-gray-700">
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                                  <h3 className="text-xl font-semibold text-white">
                                    Update User Details
                                  </h3>
                                  <button
                                    onClick={() => {
                                      setShowEditPanel(false);
                                    }}
                                    className="end-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-900 hover:text-white"
                                  >
                                    <svg
                                      className="w-3 h-3"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 14 14"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                      />
                                    </svg>
                                  </button>
                                </div>
                                <div className="p-4 md:p-5">
                                  <form
                                    onSubmit={editHandleSubmit(editUser)}
                                    className="space-y-4 text-left"
                                  >
                                    <div>
                                      Edit details for&nbsp;
                                      <input
                                        type="text"
                                        readOnly
                                        {...editRegister("username")}
                                        className="bg-transparent w-fit focus:outline-none"
                                      />
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <label
                                        htmlFor="commission"
                                        className="block text-sm font-bold text-white"
                                      >
                                        Commission:
                                      </label>
                                      <input
                                        type="number"
                                        min="0"
                                        max="100"
                                        onFocus={() => {
                                          editClearErrors("editErrors");
                                        }}
                                        {...editRegister("commission")}
                                        className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                                        placeholder="Enter Commission"
                                      />
                                    </div>
                                    {editErrors.editErrors && (
                                      <span className="text-red-600 font-bold">
                                        {editErrors.editErrors.message}
                                      </span>
                                    )}
                                    {!editIsSubmitting && (
                                      <button className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                        Update
                                      </button>
                                    )}
                                    {editIsSubmitting && (
                                      <button
                                        disabled
                                        type="button"
                                        className="w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-900 inline-flex items-center justify-center"
                                      >
                                        <svg
                                          role="status"
                                          className="inline w-4 h-4 me-3 animate-spin text-gray-600"
                                          viewBox="0 0 100 101"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"
                                          />
                                          <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="#1C64F2"
                                          />
                                        </svg>
                                        Updating...
                                      </button>
                                    )}
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Admimpanel;
