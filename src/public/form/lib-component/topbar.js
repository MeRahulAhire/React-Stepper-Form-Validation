import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './styles/topbar.css';
export class topbar extends Component {
	render() {
		return (
			<>
				<Helmet>
					<meta name="theme-color" content="#000" />
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
					<link
						href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
						rel="stylesheet"
						integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
						crossorigin="anonymous"
					/>
					<meta charset="utf-8" />
          			<title>College Facemash - Signup</title>
					<link rel="canonical" href="https://collegefacemash.com/"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
					<meta name="description" content="Signup for College Facemash to experience the fun life of college online"/>
					<meta name="title" content="College Facemash - Signup" />

					<meta property="og:image" content="https://i.ibb.co/KXRQJc3/icon-512x512.png" />
					<meta property="og:title" content="College Facemash - Signup"/>
					<meta property="og:description" content="Signup for College Facemash to experience the fun life of college online"/>
					<meta property="og:url" content="https://test.collegefacemash.com"/>
					<meta property="og:site_name" content="College Facemash"/>

					<meta name="twitter:title" content="College Facemash - Signup"/>
					<meta name="twitter:description" content="Signup for College Facemash to experience the fun life of college online"/>
					<meta name="twitter:image" content="https://i.ibb.co/KXRQJc3/icon-512x512.png"/>
					<meta name="twitter:card" content="College_Facemash_signup"/>
					<meta name="twitter:image:alt" content="College Facemash Logo - Alt"/>
				</Helmet>
				<div className="topbar">
					<h3>College Facemash</h3>
				</div>
			</>
		);
	}
}

export default topbar;
