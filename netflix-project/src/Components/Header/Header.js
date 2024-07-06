import React from "react";
import "./Header.css";
import logo from "../../Assets/Images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
	return (
		<div className="header-outer-container">
			<div className="header-container">
				<div className="left-header">
					<ul>
						<li>
							<img src={logo} alt="" width="100" />
						</li>
						<li>Home</li>
						<li>TvShow</li>
						<li>Movies</li>
						<li>Latest</li>
						<li>MyList</li>
						<li>Browse by Languages</li>
					</ul>
				</div>
				<div className="right-header">
					<ul>
						<li>
							<SearchIcon />
						</li>
						<li>
							<NotificationsNoneIcon />
						</li>
						<li>
							<AccountBoxIcon />
						</li>
						<li>
							<ArrowDropDownIcon />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;
