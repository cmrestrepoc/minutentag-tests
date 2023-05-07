/**
 * The TextInput component renders an input element in the DOM
 * and accepts a ref that is forwarded to that input element.
 * Finish the FocusableInput component:
 * - The component should accept a focused prop.
 * - When the focused prop is changed from false to true, and the input is not focused, it should receive the focus.
 * - If on mounting the focused prop is true, the input should receive the focus.
 */

import React, { useEffect, useRef } from "react";

function Input({reference}) {
	return (
		<input type="text" placeholder="Focusable Input" ref={reference}/>
	)
}

const TextInput = React.forwardRef((props, ref) => {
  return (
	<Input reference={ref}/>
  )
});

// Implement:
// When the focused prop is changed from false to true,
// and the input is not focused, it should receive focus.
// If focused prop is true, the input should receive the focus.
export function FocusableInput({ focusable = false }) {
	const inputRef = useRef('');
	useEffect(() => {
		if(focusable){
			inputRef.current.focus()
		} else {
			inputRef.current.blur()
		}
	}, [focusable])
	return (
		<TextInput ref={inputRef}/>
	)
}
