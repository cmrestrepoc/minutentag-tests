/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */

import { useState } from "react";

function Product({name, votes, onVote, index}) {
	function handlePlus() {
		onVote(index, 'add')
	}

	function handleMinus() {
		onVote(index, 'subtract')
	}

	return (
		<li>
			<span>
				{name} - votes: {votes}
			</span>
			<button onClick={handlePlus}>+</button>
			<button onClick={handleMinus}>-</button>
		</li>
	);
}

export function Grocery({ products }) {
	const [productsList, setProductsList] = useState(products)
	const onVote = (index, op) => setProductsList([
		...productsList.slice(0, index),
		{
			...productsList[index], 
			votes: op === 'add' ? 
					productsList[index].votes + 1 : 
					productsList[index].votes > 0 ? productsList[index].votes - 1 : 0
		},
		...productsList.slice(index + 1)
	])
	return (
		<ul>
			{/* Render an array of products, which should call onVote when + or - is clicked */}
			{productsList?.map((product, key) => (
				<Product {...product} onVote={onVote} index={key} key={product.name}/>
			))}
		</ul>
	);
}
