import React from "react";

import { UserProps } from "../../interfaces/interfaces";

import "./userInfo.styles.css";

const UserInfo: React.FC<UserProps> = ({ user }) => {
	return (
		<div className="user-card">
			<h2>{user!.name}</h2>
			<p>Username: {user!.username}</p>
			<p className="email">Email: {user!.email}</p>
			<div className="address">
				<p>Addres:</p>
				<p>
					{user!.address.street}, {user!.address.suite}
				</p>
				<p>
					{user!.address.city}, {user!.address.zipcode}
				</p>
			</div>
			<p className="phone">Phone: {user!.phone}</p>
			<p className="website">Website: {user!.website}</p>
			<div className="company">
				<p>Company:</p>
				<p>{user!.company.name}</p>
				<p>{user!.company.catchPhrase}</p>
				<p>{user!.company.bs}</p>
			</div>
		</div>
	);
};

export default UserInfo;
