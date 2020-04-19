import React from 'react';

export default class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    event.preventDefault();
    this.props.onDelete(this.props.grade.id);
  }

  render() {
    const grade = this.props.grade;
    return (
      <tr>
        <td className='col-3'>{grade.name}</td>
        <td className='col-3'>{grade.course}</td>
        <td className='col-3'>{grade.grade}</td>
        <td className='col-3'>
          <button onClick={this.handleDelete}>Delete</button>
        </td>
      </tr>
    );
  }
}
