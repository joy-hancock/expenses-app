import './ExpensesFilter.css'

/*2. Trigger function from onChange, create function here
	Use event to listen, log to console to check.
	Then go to forward value to Expenses file to manage as state.  We need to create a function in Expenses to be called in this component.*/

/*Call onChangeFilter from Expenses
		Event value below is forwarded back to Expenses*/

/*Pointer to onChange in select listener below*/
const ExpensesFilter = (props) => {
	const dropdownFilter = (event) => {
		props.onChangeFilter(event.target.value)
	}

	return (
		/*1. Trigger function from listener with select. Function created in step 2*/
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select value={props.onChosenYear} onChange={dropdownFilter}>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
				</select>
			</div>
		</div>
	)
}

export default ExpensesFilter

/*Our goal is to forward what is selected to Expenses*/
