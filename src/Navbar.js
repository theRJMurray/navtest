import React from 'react'
import Hamburger from './square.png'

let menuItems = [
	'About Us',
	'Products',
	'Contact Us'
]

const menu_item_styles = {
	margin: 0,
	padding: '5px 0 5px 5px',
	background: '#FFF',
	cursor: 'pointer',
	userSelect: 'none'
}

const Navbar = props => {
	return <div style={{width: props.open ? 300 : 100, height: '100vh', background: '#C0FFEE'}}>
        {/* hamburger menu button */}
		<img 
			src={Hamburger} 
			alt="" 
			style={{width: 80, height: 80, margin: '10px 10px 0'}}
			onClick={() => props.setOpen(!props.open)}
		/>

        {/* Map through menuItems variable to display sidebar buttons */}
		{menuItems.map((x,i) => {
			return <p key={i} style={menu_item_styles}>{x}</p>
		})}
	</div>
}

export default Navbar