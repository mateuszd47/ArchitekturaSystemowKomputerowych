import React, {useState} from "react";

const Main = () => {
	const [value, setValue] = useState("");
  const onChange = e => {
    const input = e.currentTarget.value;
    if (/^[0-9a-fA-F]+$/.test(input) || input === "") {
      setValue(input);
    }
  };
	return (
		<main>
			<div className='inputs16bit'>
				<h3>16bit</h3>
				<label>
					AX:
					<input
						className='input'
						type='text'
						name='AX'
						maxLength='4'
						value={value}
						onChange={onChange}
						placeholder='0000'

					/>
				</label>
				<label>
					BX:
					<input
						className='input'
						type='text'
						name='BX'
						maxLength='4'
						value={value}
						onChange={onChange}
						placeholder='0000'
					/>
				</label>
				<label>
					CX:
					<input
						className='input'
						type='text'
						name='CX'
						maxLength='4'
						value={value}
						onChange={onChange}
						placeholder='0000'
					/>
				</label>
				<label>
					DX:
					<input
						className='input'
						type='text'
						name='DX'
						maxLength='4'
						value={value}
						onChange={onChange}
						placeholder='0000'
					/>
				</label>
				<table className="tableZNA">
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
									<input className='checkbox' type='checkbox' name='AX' />
								</label>
							</td>
							<td>
								<label>
									AX:
									<input className='checkbox' type='checkbox' name='AX' />
								</label>
							</td>
						</tr>
						<tr>
							<td>
								<label>
									BX:
									<input className='checkbox' type='checkbox' name='AX' />
								</label>
							</td>
							<td>
								<label>
									BX:
									<input className='checkbox' type='checkbox' name='AX' />
								</label>
							</td>
						</tr>
						<tr>
							<td>
								<label>
									CX:
									<input className='checkbox' type='checkbox' name='AX' />
								</label>
							</td>
							<td>
								<label>
									CX:
									<input className='checkbox' type='checkbox' name='AX' />
								</label>
							</td>
						</tr>
						<tr>
							<td>
								<label>
									DX:
									<input className='checkbox' type='checkbox' name='AX' />
								</label>
							</td>
							<td>
								<label>
									DX:
									<input className='checkbox' type='checkbox' name='AX' />
								</label>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className='inputs2x8bit'>
				<h3>2x8bit</h3>
				<table>
					<thead>
						<tr>
							<th></th>
							<th>L</th>
							<th>H</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>A</td>
							<td>
								<input
									className='input'
									type='text'
									name='AL'
									maxLength='2'
									value={value}
									onChange={onChange}
									placeholder='00'
								/>
							</td>
							<td>
								<input
									className='input'
									type='text'
									name='AH'
									maxLength='2'
									value={value}
									onChange={onChange}
									placeholder='00'
								/>
							</td>
						</tr>
						<tr>
							<td>B</td>
							<td>
								<input
									className='input'
									type='text'
									name='BL'
									maxLength='2'
									value={value}
									onChange={onChange}
									placeholder='00'
								/>
							</td>
							<td>
								<input
									className='input'
									type='text'
									name='BH'
									maxLength='2'
									value={value}
									onChange={onChange}
									placeholder='00'
								/>
							</td>
						</tr>
						<tr>
							<td>C</td>
							<td>
								<input
									className='input'
									type='text'
									name='CL'
									maxLength='2'
									value={value}
									onChange={onChange}
									placeholder='00'
								/>
							</td>
							<td>
								<input
									className='input'
									type='text'
									name='CH'
									maxLength='2'
									value={value}
									onChange={onChange}
									placeholder='00'
								/>
							</td>
						</tr>
						<tr>
							<td>D</td>
							<td>
								<input
									className='input'
									type='text'
									name='CL'
									maxLength='2'
									value={value}
									onChange={onChange}
									placeholder='00'
								/>
							</td>
							<td>
								<input
									className='input'
									type='text'
									name='CH'
									maxLength='2'
									value={value}
									onChange={onChange}
									placeholder='00'
								/>
							</td>
						</tr>
					</tbody>
				</table>
				<table className="tableZNA">
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
									<input className='checkbox' type='checkbox' name='AX' />
								</label>
							</td>
							<td>
								<label>
									AX:
									<input className='checkbox' type='checkbox' name='AX' />
								</label>
							</td>
						</tr>
						<tr>
							<td>
								<label>
									BX:
									<input className='checkbox' type='checkbox' name='AX' />
								</label>
							</td>
							<td>
								<label>
									BX:
									<input className='checkbox' type='checkbox' name='AX' />
								</label>
							</td>
						</tr>
						<tr>
							<td>
								<label>
									CX:
									<input className='checkbox' type='checkbox' name='AX' />
								</label>
							</td>
							<td>
								<label>
									CX:
									<input className='checkbox' type='checkbox' name='AX' />
								</label>
							</td>
						</tr>
						<tr>
							<td>
								<label>
									DX:
									<input className='checkbox' type='checkbox' name='AX' />
								</label>
							</td>
							<td>
								<label>
									DX:
									<input className='checkbox' type='checkbox' name='AX' />
								</label>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className='buttons'>
				<input className='button' type='button' value='MOV' />
				<input className='button' type='button' value='XCHG' />
				<input className='reset' type='button' value='RESET' />
			</div>
		</main>
	);
};

export default Main;
