import React, { useEffect, useState } from "react";

import {
	AutoCompleteUser,
	AutocompleteProps,
} from "../../interfaces/interfaces";
import SuggestionsComponent from "../suggestions/suggestions.component";
import UserInfo from "../userInfo/userInfo.component";

import "./autocomplete.styles.css";

const mokUser = {
	id: "0",
	name: "",
	username: "",
	email: "",
	address: {
		street: "--",
		suite: "--",
		city: "--",
		zipcode: "--",
		geo: {
			lat: "",
			lng: "",
		},
	},
	phone: "",
	website: "",
	company: {
		name: "",
		catchPhrase: "",
		bs: "",
	},
};

const Autocomplete: React.FC<AutocompleteProps> = ({ data }) => {
	const [inputValue, setInputValue] = useState("");
	const [suggestions, setSuggestions] = useState<AutoCompleteUser[]>([]);
	const [selectedUser, setSelectedUser] = useState<AutoCompleteUser>(mokUser);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setSuggestions(data);
	}, [data]);

	const filterSuggestions = async () => {
		setLoading(true);
		try {
			const filteredData = data.filter((item) =>
				item.name.toLowerCase().includes(inputValue.toLowerCase())
			);
			setSuggestions(filteredData);
		} catch (error) {
			console.warn(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		filterSuggestions();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputValue]);

	const showUserInfo = (id: string) => {
		const userData = data.find((item) => String(item.id) === id)!;
		setSelectedUser(userData);
	};

	const renderSuggestions = () => {
		if (loading) {
			return <div>Loading...</div>;
		}
		if (suggestions.length === 0) {
			return <div>No suggestions found</div>;
		}
		return (
			<SuggestionsComponent
				suggestions={suggestions}
				inputValue={inputValue}
				showUserInfo={showUserInfo}
			/>
		);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setInputValue(value);
	};

	return (
		<div className="container">
			<div className="input-container">
				<input
					type="text"
					value={inputValue}
					onChange={handleChange}
					placeholder="Search"
				/>
			</div>
			<div className="users-block">
				<div className="users-suggestions">{renderSuggestions()}</div>
				<div>{selectedUser.id !== "0" && <UserInfo user={selectedUser} />}</div>
			</div>
		</div>
	);
};

export default Autocomplete;
