import { useEffect, useState } from "react";

import { AutoCompleteUser } from "./interfaces/interfaces";
import Autocomplete from "./components/autocomplete/autocomplete.component";

function App() {
	const [users, setUsers] = useState<AutoCompleteUser[]>([]);
	const urlUsers = "https://jsonplaceholder.typicode.com/users";

	useEffect(() => {
		const mockFetchData = async () => {
			const response = await fetch(urlUsers);
			const data = await response.json();
			setUsers(data);
		};
		mockFetchData();
	}, []);
	return (
		<>
			<Autocomplete data={users} />
		</>
	);
}

export default App;
