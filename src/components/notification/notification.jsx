"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import DotsLoader from "../loaders/dotsLoader";
import { useDispatch, useSelector } from "react-redux";
import socket from "@/services/socket";
import {
  NotificationAPI,
  useUpdateNotificationMutation,
} from "@/redux/services/notificationAPI";
import { notifyFailure } from "../toast/toast";

function Notification({ data, isLoading }) {
  console.log(data, "datassssss");
  const dispatch = useDispatch();
  const notificationRef = useRef(null);
  const [notification, setNotification] = useState(false);
  const [page, setPage] = useState(1);
  const [NotificationReadCount, setNotificationReadCount] = useState(null);
  const dropdownRef = useRef(null);
  const auth = useSelector((state) => state?.auth?.user?._id);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropDown(false);
    }

    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setNotification(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let Count = data?.results?.filter((items) => {
      return (
        items?.isRead.length == 0 || items?.isRead?.find((x) => x !== auth)
      );
    });
    console.log(Count, data?.results, "showdata");
    setNotificationReadCount(Count);
  }, [data]);
  console.log(NotificationReadCount, "NotificationReadCount");

  const [ReadNotification, { data: noti }] = useUpdateNotificationMutation();
  const ReadNotificationHandler = async (id) => {
    console.log(id, "getNotificationAPI");
    try {
      await ReadNotification(id).unwrap();
      dispatch(
        NotificationAPI.util.updateQueryData(
          "getNotification",
          { page: 1, pageSize: 10 },
          (draft) => {
            console.log(draft, "getNotificationAPI");
            draft.results = draft.results.map((x, i) =>
              x?._id == id ? { ...x, isRead: [auth] } : x
            );
          }
        )
      );
    } catch (err) {
      notifyFailure(err?.data?.message);
      console.log(err?.data, "data");
    }
  };

  useEffect(() => {
    const handleNewNotification = (notificationData) => {
      console.log("chal raha hai", notificationData);
      dispatch(
        NotificationAPI.util.updateQueryData(
          "getNotification", // The name of the query you want to update
          { page: 1, pageSize: 10 },
          (draft) => {
            // A callback function that receives the current cache data (draft)
            console.log(draft, "draft");
            draft.results.unshift(notificationData); // Modify the draft data (optimistic update)
          }
        )
      );
    };
    socket.on("new-notification", handleNewNotification);

    return () => {
      socket.off("new-notification", handleNewNotification);
    };
  }, [data]);

  return (
    <>
      <li className="nav-item dropdown-bange pr-4" ref={notificationRef}>
        <Link
          href="#"
          className="dropdown-toggle nav-link dropdownPadding"
      
         
          data-bs-toggle="dropdown"
          onClick={() => setNotification(!notification)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-bell"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          {NotificationReadCount?.length >= 1 ? (
            <>
              <span className="badge-noti rounded-pill">
                {NotificationReadCount?.length}
              </span>
            </>
          ) : null}

          {/* <span className="badge rounded-pill">5</span> */}
        </Link>

        <div
          className={`dropdown-menu-notification notifications ${
            notification ? "d-block" : "d-none"
          }`}
        >
          <div className="topnav-dropdown-header">
            <span className="notification-title px-3">Notifications</span>
         
          </div>
          <div
            className="noti-content"
            // ref={notificationContainerRef}
            // onScroll={handleScroll}
          >
            {isLoading ? (
              <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                <DotsLoader dark />
              </div>
            ) : (
              <>
                {data?.results.length === 0 ? (
                  <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                    No notifications
                  </div>
                ) : (
                  <ul className="notification-list">
                    {data?.results?.map((items) => (
                      <li className="notification-message">
                        <Link href="#">
                          <div
                            className="media d-flex"
                            onClick={() => ReadNotificationHandler(items?._id)}
                          >
                            <div className="media-body w-100">
                              <p className="noti-details ">
                                <span className="noti-title text-truncate line-clamp-2">
                                  {items?.user?.firstName}{" "}
                                  {items?.user?.lastName} {items?.title}
                                </span>
                                {items?.description}
                              </p>
                              <div className="noti-time d-flex align-items-center justify-content-between">
                                <span className="notification-time "> </span>
                                <span className="mx-3">
                                  {items?.isRead ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#C3C3C3"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-mail"
                                    >
                                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                      <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#C3C3C3"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-mail-open"
                                    >
                                      <path d="M22 8l-10-5-10 5v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8z"></path>
                                      <polyline points="22 8 12 13 2 8"></polyline>
                                    </svg>
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        </div>
      </li>
    </>
  );
}

export default Notification;
