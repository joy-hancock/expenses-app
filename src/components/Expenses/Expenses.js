import React, { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020')
	/*Initialize state AFTER you have already checked that the filter is logging out to the console from Expenses!*/
	const chosenFilter = (selectedYear) => {
		setFilteredYear(selectedYear)
	}

	/*Because there are choices, initialize a default for state*/

	/*filterChangeHandler will be called in Expenses Filter*/

	/*Add prop to Expenses Filter so filterChangeHandler can be called there
	Secondly, add another prop so that state will show as default, i.e. two way binding*/
	/*Use onChangeHandler to point to filterChangeHandler.  Then onChangeHandler will be passed back to Expenses Filter */

	return (
		<Card className='expenses'>
			<ExpensesFilter
				onChosenYear={filteredYear}
				onChangeFilter={chosenFilter}
			/>
			<ExpenseItem
				title={props.items[0].title}
				amount={props.items[0].amount}
				date={props.items[0].date}
			/>
			<ExpenseItem
				title={props.items[1].title}
				amount={props.items[1].amount}
				date={props.items[1].date}
			/>
			<ExpenseItem
				title={props.items[2].title}
				amount={props.items[2].amount}
				date={props.items[2].date}
			/>
			<ExpenseItem
				title={props.items[3].title}
				amount={props.items[3].amount}
				date={props.items[3].date}
			/>
		</Card>
	)
}

export default Expenses
