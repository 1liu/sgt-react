import React from 'react';
import Grade from './grade';
export default class GradeTable extends React.Component {

  render() {
    return (
      <div className="col-sm-8">
        <div className="table-responsive">
          <table className="table table-fixed table-striped">
            <thead>
              <tr>
                <th scope="col" className="col-3">Student Name</th>
                <th scope="col" className="col-3">Course</th>
                <th scope="col" className="col-3">Grade</th>
                <th scope="col" className="col-3">Operations</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.grades.map(grade => {
                  return (
                    <Grade key={grade.id} grade={grade} onDelete={this.props.onDelete}/>
                  );
                })
              }

            </tbody>
          </table>
        </div>
        <p className="noGradeEl d-none">No Grades Recorded</p>
      </div>
    );
  }
}
