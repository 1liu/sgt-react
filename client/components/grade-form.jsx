import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleCourseChange(event) {
    this.setState({
      course: event.target.value
    });
  }

  handleGradeChange(event) {
    this.setState({
      grade: Number(event.target.value)
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = this.state;
    this.props.onAdd(newGrade);
    this.setState({ task: '' });
  }

  handleReset() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <form className="gradeForm col-sm-4" onSubmit={this.handleSubmit}>
        <div>
          <h3 className="formTitle">Add Grade</h3>
        </div>
        <div className="name row">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
            </div>
            <input type="text" id="name" name="name" value={this.state.name} placeholder="Name" size="30" onChange={this.handleNameChange} />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="far fa-list-alt"></i></span>
            </div>
            <input type="text" id="course" name="course" value={this.state.course} placeholder="Course" size="30" onChange={this.handleCourseChange}/>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-graduation-cap"></i></span>
            </div>
            <input type="text" id="grade" name="grade" value={this.state.grade} placeholder="Grade" size="30" onChange={this.handleGradeChange}/>
          </div>
          <div className="button row">
            <div className="ml-3">
              <button id="addButton" type="submit" className="btn btn-success">Add</button>
            </div>
            <div className="ml-3">
              <button id="cancelButton" type="reset" className="btn btn-light" onClick={this.handleReset}>Cancel</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
