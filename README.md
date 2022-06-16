result field displays the actual result
result field's default value is 0

number buttons are those that have value from 0 through 9

rest are functional buttons, which can further be split into:
	operations (+, -, *, /)
	equal sign
	C

when the user presses number button - we append its value to the result field

when the user presses operations' button - we do the following:
	we memorize the chosen operation
	we memorize the current result value
	we set the current value of the result field to 0

when the user presses the equal sign:
	if operation is not chosen - ignore
	otherwise:
		 perform the selected operation on the memorized first value and the current result field value
		 reset the chosen operation
		 display the result in the result field
		 make the result the first value of the next operation

when the user presses the C button:
	reset the current result field value to 0
