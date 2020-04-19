import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };

  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ grades: data });
      })
      .catch(error => console.log('Fetch failed!', error));

  }

  render() {
    return (
      <div>
        <Header avgScore='84' />
        <div className="container">
          <div className="row">
            <GradeTable grades={this.state.grades}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
