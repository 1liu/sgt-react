import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => {
        this.setState({ grades: data });
      })
      .then(this.getAverageGrade())
      .catch(error => console.log('Fetch failed!', error));
  }

  createGrade(newGrade) {
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    };
    fetch('/api/grades', req)
      .then(response => response.json())
      .then(data => {
        const newGrades = this.state.grades.concat(data);
        this.setState({ grades: newGrades });
      })
      .catch(error => console.log('Fetch failed!', error));
  }

  deleteGrade(deleteId) {
    fetch('/api/grades/' + deleteId, { method: 'DELETE' })
      .then(response => response.json())
      .then(() => {
        const newGrades = this.state.grades.slice();
        const index = newGrades.findIndex(element => element.id === deleteId);
        newGrades.splice(index, 1);
        this.setState({ grades: newGrades });
      })
      .catch(error => console.log('Fetch failed!', error));
  }

  getAverageGrade() {
    let sum = 0;
    for (const grade of this.state.grades) {
      sum += grade.grade;
    }
    return Math.round(sum / this.state.grades.length);
  }

  render() {
    return (
      <div>
        <Header avgGrade={this.getAverageGrade()} />
        <div className="container">
          <div className="row">
            <GradeTable grades={this.state.grades} onDelete={this.deleteGrade}/>
            <GradeForm onAdd={this.createGrade}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
