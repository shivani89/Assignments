import React, { Component } from 'react';


class AboutContent extends Component {

    render(){
        return (
        	<div className="container">
     			<h3>{this.props.title}</h3>	 
				<p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.	It is maintained by Facebook, Instagram and a community of individual developers and corporations.According to JavaScript analytics service Libscore, React is currently being used on the websites of Netflix, Imgur, Bleacher Report, Feedly, Airbnb, SeatGeek, HelloSign, Walmart, and others.</p>
				<button onClick={this.props.changeTitle}>Change title</button>
			</div>
        	);
    }
}

export default AboutContent;