import React from "react";

// Admin Imports
import ForumList from "views/forum/list";

// Icon Imports
import {
  MdHome,
} from "react-icons/md";
import TokenDetail from "views/forum/token";
import ProfileDetail from "views/forum/profile";
import Leaderboard from "views/leaderboard";
import CopyTrading from "views/copytrading";
import LoginPage from "views/login";
import Dashboard from "views/dashboard";

const routes = [
  {
    key: "dashboard",
    layout: "admin",
    path: "dashboard",
    component: <Dashboard />,
  },
  {
    key: "token",
    layout: "",
    path: "token/*",
    component: <TokenDetail />,
  },
  {
    key: "profile",
    layout: "",
    path: "profile/*",
    component: <ProfileDetail />,
  },
  {
    key: "leaderboard",
    layout: "",
    path: "leaderboard",
    component: <Leaderboard />,
  },
  {
    key: "copytrading",
    layout: "",
    path: "copytrading",
    component: <CopyTrading />,
  },
];
export default routes;
