import React from 'react';

export default class Grade extends React.Component {

  render() {
    const grade = this.props.grade;
    return (
      <tr>
        <td className='col-4'>{grade.name}</td>
        <td className='col-4'>{grade.course}</td>
        <td className='col-4'>{grade.grade}</td>
      </tr>
    );
  }
}
