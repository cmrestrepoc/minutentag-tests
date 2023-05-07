/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with DOWN and RIGHT keys will focus the next item.
 * - Navigate through the list with UP and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect, useRef, useState } from "react";

// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience
const itemsList = Array(10).fill({
	name: "Yellow",
	score: 41
});

export function ListItemsForNavigation() {
	const [
		selectedIndex,
		setSelectedIndex,
	] = useState(0);
	const activeItemRef = useRef();

	useEffect(
		function () {
			if(selectedIndex >= 0 && selectedIndex < 10) {
				activeItemRef.current.focus();
			}
		},
		[
			selectedIndex
		]
	);

	function handleKeyDown(event) {
		event.preventDefault()
		if(selectedIndex >= 0 && selectedIndex < 10) {
			setSelectedIndex(selectedIndex => {
				if ((event.nativeEvent.key === 'ArrowDown' || event.nativeEvent.key === 'ArrowRight') && selectedIndex < 9){
					return selectedIndex + 1
				}
				if ((event.nativeEvent.key === 'ArrowUp' || event.nativeEvent.key === 'ArrowLeft') && selectedIndex > 0){
					return selectedIndex - 1
				}
				return selectedIndex
			})
		}
	}

	return (
		<ul onKeyDown={handleKeyDown} >
			{itemsList.map((item, index) => 
				<li 
					key={index} 
					tabIndex={0}
					ref={selectedIndex === index ? activeItemRef : undefined}
				>
					{`${item.name} - ${item.score}`}
				</li>
			)}
		</ul>
	);
}
