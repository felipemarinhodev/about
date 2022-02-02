import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Home = () => {

	return (
		<div>
			<Jumbotron>
				<h1 className="display-3">Sobre mim</h1>
				<hr className="my-2" />
				<h2>Module Federation</h2>
				<p>Multiple separate builds should form a single application. These separate builds should not have dependencies between each other, so they can be developed and deployed individually.</p>
				<ul>
					<li>
						Home
					</li>
					<li>
						Contact
					</li>
					<li>
						About
					</li>
				</ul>
			</Jumbotron>
		</div>
	)
}

export default Home;
