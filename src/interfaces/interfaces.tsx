export interface AutocompleteProps {
	data: AutoCompleteUser[];
}

export interface UserProps {
	user: AutoCompleteUser;
}

export interface SuggestionProps {
	suggestions: AutoCompleteUser[];
	inputValue: string;
	showUserInfo: (id: string) => void;
}

export interface AutoCompleteUser {
	id: string;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}
