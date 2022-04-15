import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "../Redux/actions/userAction";
import { Menu } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Redirect } from "react-router";
import Item from "antd/lib/list/Item";
import SubMenu from "antd/lib/menu/SubMenu";
import { TOKEN, USER_LOGIN } from "../utils/settings/configs";
const Header = () => {
  const [current, setCurrent] = useState("home");
  const { SubMenu, Item } = Menu;
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  const handleLogout = () => {
    const action = logOutAction();
    dispatch(action);
    localStorage.removeItem(USER_LOGIN);
    localStorage.removeItem(TOKEN);
    Redirect("/");
    window.location.reload();
  };
  const showModal = () => {
    setIsVisible(true);
  };
  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };
  const handleCancel = () => {
    setIsVisible(false);
  };
  const handleOk = () => {
    setIsVisible(false);
  };
  console.log(user);

  return (
    <div>
      <header>
        {/* Animated navbar*/}
        <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
          <div className="container-fluid">
            <button
              className="navbar-toggler ps-0"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon d-flex justify-content-start align-items-center">
                <i className="fas fa-bars" />
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <Menu>
                    <Item className="float-right">
                      <NavLink
                        key="home"
                        to="/"
                        
                       
                      >
                        Home
                      </NavLink>
                    </Item>
                  </Menu>
                </li>
                <li className="nav-item">
                  <Menu>
                    {!user && (
                      <Item key="login" className="float-right">
                        <NavLink to="/login">Login</NavLink>
                      </Item>
                    )}
                    {user && (
                      <SubMenu
                        icon={<SettingOutlined />}
                        title={"Hello User!"}
                        className="float-right"
                      >
                        (
                        <Item>
                          <NavLink to="/dashboard">Dashboard</NavLink>
                        </Item>
                        <Item>
                          <NavLink to="/login">Login</NavLink>
                        </Item>
                        <Item icon={<LogoutOutlined />} onClick={handleLogout}>
                          Logout
                        </Item>
                      </SubMenu>
                    )}
                  </Menu>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" href="https://mdbootstrap.com/docs/standard/" target="_blank">Download MDB UI KIT</a>
                  </li> */}
              </ul>
              {/* <ul className="navbar-nav flex-row">
                 
                  <li className="nav-item">
                    <a className="nav-link pe-2" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow" target="_blank">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link px-2" href="https://www.facebook.com/mdbootstrap" rel="nofollow" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link px-2" href="https://twitter.com/MDBootstrap" rel="nofollow" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ps-2" href="https://github.com/mdbootstrap/mdb-ui-kit" rel="nofollow" target="_blank">
                      <i className="fab fa-github" />
                    </a>
                  </li>
                </ul> */}
            </div>
          </div>
        </nav>
        {/* Animated navbar */}
        {/* Background image */}
        <div
          id="intro"
          className="bg-image"
          style={{
            backgroundImage:
              "url(https://mdbcdn.b-cdn.net/img/new/fluid/city/113.jpg)",
            height: "70vh",
            backgroundSize: "cover",
            backgroundRepeat: "none",
          }}
        >
          <div
            className="mask text-white"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          >
            <div className="container d-flex align-items-center text-center h-100"></div>
          </div>
        </div>
        {/* Background image */}
      </header>
      {/*Main Navigation*/}
      <div
        className="my-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="heading-secondary">Welcome To LeThang Blog </p>
      </div>
    </div>
  );
};

export default Header;
