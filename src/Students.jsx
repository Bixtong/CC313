// Students.js

import React from 'react';
import Student from './Student';

const Students = () => {
    // Define student data
    const students = [
        { name: 'John Nicole Lawas', department: 'Science', finalGrade: 85, status: 'Pass' },
        { name: 'Rerax Omalay', department: 'Arts', finalGrade: 76, status: 'Pass' },
        { name: 'Rodel Castanares', department: 'Commerce', finalGrade: 92, status: 'Pass' },
        { name: 'Ardon Dakay', department: 'Science', status: 'Fail' },
        { name: 'Jei Modajo', department: 'Arts', finalGrade: 63, status: 'Pass' },
        { name: 'Japhzel Defiesta', department: 'Commerce', finalGrade: 79, status: 'Pass' },
        { name: 'Rexy Lexy', department: 'Science', finalGrade: 88, status: 'Pass' },
        { name: 'Bolen Pretty', department: 'Arts', finalGrade: 71, status: 'Pass' },
        { name: 'Mike Handsome', department: 'Commerce', status: 'Fail' },
        { name: 'Jack Nuh', department: 'Science', finalGrade: 79, status: 'Pass' }
    ];

    return (
        <div>
            <h2>John Nicole Lawas</h2>

            <h1>Student Record List</h1>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Student Names</th>
                        <th>Department</th>
                        <th>Final Grade</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <Student key={index} index={index + 1} student={student} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Students;
