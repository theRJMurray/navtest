import React, { useState } from 'react';
import Navbar from './Navbar'

const App = () => {
	const [open, setOpen] = useState(true)

	return <div style={{background: '#333'}}>
		<Navbar setOpen={setOpen} open={open} />
	</div>
}

export default App;