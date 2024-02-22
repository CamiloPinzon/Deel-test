export interface AutocompleteProps {
	data: AutoCompleteUser[];
}

export interface SuggestionProps {
	suggestions: AutoCompleteUser[];
	inputValue: string;
}

export interface AutoCompleteUser {
	id: number;
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
