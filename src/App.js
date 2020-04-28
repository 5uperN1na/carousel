import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Arms from './julien-arms.jpg';
import Smiles from './vivien-smiles.jpg';
import Dominoes from './julien-dominoes1.jpeg';
import Fireplace from './vivien-fireplace.jpg';

let styles = {

	margin: 'auto',
	width: '500px'

};

function App() {
	return (

		<div style={styles}>
			<Carousel>
				<div>
					<img src={Fireplace} />
					<p className="legend">Posin'!</p>
				</div>
				<div>
					<img src={Dominoes} />
					<p className="legend">Dominoes!</p>
				</div>
				<div>
					<img src={Smiles} />
					<p className="legend">Vivien Smiles!</p>
				</div>
				<div>
					<img src={Arms} />
					<p className="legend">Julien Flys!</p>
				</div>



			</Carousel>
		</div>
	);
}

export default App;
