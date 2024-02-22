import React from "react";

import { SuggestionProps } from "../../interfaces/interfaces";

import "./suggestions.styles.css";

const SuggestionsComponent: React.FC<SuggestionProps> = ({
	suggestions,
	inputValue,
}) => {
	const highlightText = (text: string) => {
		const index = text.toLowerCase().indexOf(inputValue.toLowerCase());
		if (index !== -1) {
			const prefix = text.substring(0, index);
			const match = text.substring(index, index + inputValue.length);
			const suffix = text.substring(index + inputValue.length);
			return (
				<span>
					{prefix}
					<strong>{match}</strong>
					{suffix}
				</span>
			);
		}
		return text;
	};

	return (
		<div>
			{suggestions.map((suggestion) => (
				<div className="suggestion" key={suggestion.id}>
					{highlightText(suggestion.name)}
				</div>
			))}
		</div>
	);
};

export default SuggestionsComponent;
