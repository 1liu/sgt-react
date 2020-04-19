import React from 'react';

export default class Header extends React.Component {

  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h2>Student Grade Table</h2>
            </div>
            <div className="col-sm-4">
              <h2>Average Grade: <span className="badge badge-secondary">{this.props.avgGrade}</span></h2>
            </div>
          </div>
        </div>
      </header>
    );
  }

}
