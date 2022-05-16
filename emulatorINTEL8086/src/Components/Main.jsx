import React from "react";
import Inputs16bit from "./Inputs16bit";
// import Inputs8bit from "./Inputs8bit";

const Main = (sub) => {
	const {mov} = Inputs16bit(sub)
	return (
		<main>
			{/* <Inputs16bit value={value} onChange={onChange} /> */}
			<Inputs16bit />
			{/* <Inputs8bit 
			value={value}
			onChange={onChange}
			/> */}
			<div className='buttons'>
				<input className='button' type='button' value='MOV' onClick={() => mov()}/>
				<input className='button' type='button' value='XCHG' />
				<input className='reset' type='button' value='RESET' />
			</div>
		</main>
	);
};

export default Main;
