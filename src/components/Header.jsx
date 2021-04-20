import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <nav className="navbar navbar-dark navcolor justify-content-between py-1">
        <div className="navbar-brand header cursor-pointer" id="home" onClick={this.handleClick}>
        </div>
        </div>
      </nav>
    );
  }
}
