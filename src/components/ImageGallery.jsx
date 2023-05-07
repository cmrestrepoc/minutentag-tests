/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

import { useState } from "react";

function Image({ src, onRemove, index, alt }) {
	return (
		<div className="image">
			<img src={src} alt={alt}/>
			<button className="remove" onClick={() => onRemove(index)}>X</button>
		</div>
	);
}

export function ImageGallery({ links }) {
	const [linksList, setLinksList] = useState(links)
	const removeImage = index => {
		setLinksList([
			...linksList.slice(0, index),
			...linksList.slice(index + 1)
		])
	}
	return (
		<div style={{display: 'inline-grid', width: '80%', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '1fr'}}>
			{/* Implement here the Image Gallery using <Image /> component */}
			{linksList?.map((link, index) => (
				<Image src={link} onRemove={removeImage} index={index} key={link} alt={`Image-${index}`}/>
			))}
		</div>
	);
}
