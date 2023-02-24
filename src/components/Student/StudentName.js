import React from "react"
import { useState, useEffect } from "react"
import { fetchName } from "../../functions/student"

const StudentName = () => {
    const [studentName, setStudentName] = useState({
        first_name: "",
        middle_name: "",
        last_name: "",
        username: "",
    })

    useEffect(() => {
        async function getName() {
            const response = await fetchName();
            console.log(response);

            setStudentName(response);
        }

        getName();

    }, []);

    return (
        <span className="home-text11">{studentName.last_name}, {studentName.first_name} {studentName.middle_name} ({studentName.username})</span>
    )
}

export default StudentName;