import React from "react";

// Admin Imports
import ForumList from "views/forum/list";

// Icon Imports
import {
  MdHome,
} from "react-icons/md";
import TokenDetail from "views/calls/token";
import ProfileDetail from "views/users/profile";
import Leaderboard from "views/leaderboard";
import CopyTrading from "views/copytrading";
import LoginPage from "views/login";
import Dashboard from "views/dashboard";
import Users from "views/users";
import Calls from "views/calls";
import Announcements from "views/announcements";

const routes = [
  {
    key: "dashboard",
    layout: "admin",
    path: "dashboard",
    component: <Dashboard />,
  },
  {
    key: "users",
    layout: "admin",
    path: "users",
    component: <Users />,
  },
  {
    key: "users",
    layout: "admin",
    path: "profile/*",
    component: <ProfileDetail />,
  },
  {
    key: "calls",
    layout: "admin",
    path: "calls",
    component: <Calls />,
  },
  {
    key: "calls",
    layout: "admin",
    path: "token/*",
    component: <TokenDetail />,
  },
  {
    key: "announcements",
    layout: "admin",
    path: "announcements",
    component: <Announcements />,
  },
];
export default routes;
