import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    console.log("Navbar Props",props.location)
    const style = {
        home: {className: props.location.pathname==="/"?"active":""},
        facts: {className: props.location.pathname==="/facts"?"active":""},
        image: {className: props.location.pathname==="/image"?"active":""}
    }

    return (
        <nav>
            <Link to = '/' {...style.home}> Home </Link>
            <Link to = '/facts' {...style.facts}>Favorite Facts </Link>
            <Link to = '/image' {...style.image}> Favorite Images </Link>
        </nav>
    )
}

export default withRouter(Navbar)