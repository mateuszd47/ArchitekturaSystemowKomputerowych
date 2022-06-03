import React, { useState } from "react";

const Inputs16bit = () => {
	const [radioOn, setRadioOn] = useState("");
	const [radioWith, setRadioWith] = useState("");

	const [values, setValues] = useState({
		AX: JSON.parse(localStorage.getItem("AX")),
		BX: JSON.parse(localStorage.getItem("BX")),
		CX: JSON.parse(localStorage.getItem("CX")),
		DX: JSON.parse(localStorage.getItem("DX")),
	});

	const onChange = (e) => {
		const { name, value } = e.target;
		if (/^[0-9a-fA-F]+$/.test(value) || value === "") {
			setValues({
				...values,
				[name]: value,
				[name]: localStorage.setItem([name], JSON.stringify(value)),
			});
		}
	};

	const reset = () => {
		setValues({
			AX: localStorage.setItem("AX", JSON.stringify("")),
			BX: localStorage.setItem("BX", JSON.stringify("")),
			CX: localStorage.setItem("CX", JSON.stringify("")),
			DX: localStorage.setItem("DX", JSON.stringify("")),
		});
		window.location.reload(false);
	};

	const mov = () => {
		setValues({
			[radioOn]: JSON.parse(localStorage.getItem(radioWith)),
		});
		localStorage.setItem(
			[radioOn],
			JSON.stringify(JSON.parse(localStorage.getItem(radioWith)))
		);
		window.location.reload(false);
	};

	const xchg = () => {
		let tab = [
			JSON.parse(localStorage.getItem(radioOn)),
			JSON.parse(localStorage.getItem(radioWith)),
		];
		console.log(tab);
		setValues({
			[radioWith]: JSON.parse(localStorage.getItem(radioOn)),
			[radioOn]: JSON.parse(localStorage.getItem(radioWith)),
		});
		localStorage.setItem([radioWith], JSON.stringify(tab[0]));
		localStorage.setItem([radioOn], JSON.stringify(tab[1]));
		window.location.reload(false);
	};
	return (
		<>
			<div className='inputs16bit'>
				<label>
					AX:
					<input
						// className='radio'
						type='text'
						name='AX'
						maxLength='4'
						value={values.AX}
						onChange={onChange}
						placeholder='0000'
					/>
				</label>
				<label>
					BX:
					<input
						// className='radio'
						type='text'
						name='BX'
						maxLength='4'
						value={values.BX}
						onChange={onChange}
						placeholder='0000'
					/>
				</label>
				<label>
					CX:
					<input
						// className='radio'
						type='text'
						name='CX'
						maxLength='4'
						value={values.CX}
						onChange={onChange}
						placeholder='0000'
					/>
				</label>
				<label>
					DX:
					<input
						// className='radio'
						type='text'
						name='DX'
						maxLength='4'
						value={values.DX}
						onChange={onChange}
						placeholder='0000'
					/>
				</label>
				<table className='tableZNA'>
					<thead>
						<tr>
							<th>Z</th>
							<th>NA</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<label>
									AX:
									<input
										className='checkbox'
										type='radio'
										name='with'
										value='AX'
										onChange={(e) => setRadioWith(e.target.value)}
									/>
								</label>
							</td>
							<td>
								<label>
									AX:
									<input
										className='checkbox'
										type='radio'
										name='on'
										value='AX'
										onChange={(e) => setRadioOn(e.target.value)}
									/>
								</label>
							</td>
						</tr>
						<tr>
							<td>
								<label>
									BX:
									<input
										className='checkbox'
										type='radio'
										name='with'
										value='BX'
										onChange={(e) => setRadioWith(e.target.value)}
									/>
								</label>
							</td>
							<td>
								<label>
									BX:
									<input
										className='checkbox'
										type='radio'
										name='on'
										value='BX'
										onChange={(e) => setRadioOn(e.target.value)}
									/>
								</label>
							</td>
						</tr>
						<tr>
							<td>
								<label>
									CX:
									<input
										className='checkbox'
										type='radio'
										name='with'
										value='CX'
										onChange={(e) => setRadioWith(e.target.value)}
									/>
								</label>
							</td>
							<td>
								<label>
									CX:
									<input
										className='checkbox'
										type='radio'
										name='on'
										value='CX'
										onChange={(e) => setRadioOn(e.target.value)}
									/>
								</label>
							</td>
						</tr>
						<tr>
							<td>
								<label>
									DX:
									<input
										className='checkbox'
										type='radio'
										name='with'
										value='DX'
										onChange={(e) => setRadioWith(e.target.value)}
									/>
								</label>
							</td>
							<td>
								<label>
									DX:
									<input
										className='checkbox'
										type='radio'
										name='on'
										value='DX'
										onChange={(e) => setRadioOn(e.target.value)}
									/>
								</label>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className='buttons'>
				<button className='button' type='button' onClick={mov} >MOV</button>
				<button className='button' type='button' onClick={xchg} >XCHG</button>
				<button className='reset' type='button' onClick={reset} >RESET</button>
			</div>
		</>
	);
};

export default Inputs16bit;
