import React from "react";
import { Content } from "./Admin/ContentComponent";
import { Main } from "./MainComponent";
import { Login } from "./LoginComponent";
import { Exam } from "./Admin/ExamComponent";
import { Question } from "./Admin/QuestionComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { StudentDetails } from "./Admin/StudentDetails";
import { Dashboard } from "./Admin/DashboardComponent";
import { Topic } from "./Admin/TopicComponent";
import { Role } from "./Admin/RoleComponent";
import { QuestionLevel } from "./Admin/QuestionLevelComponent";

import { StudentMain } from "./StudentMainComponent";
import { Profile } from "./Student/ProfileComponent";
import { AllExam } from "./Student/AllExamComponent";
import { StudentTutorial } from "./Student/StudentTutorialComponent";
import { StudentDashboard } from "./Student/StudentDashboard";



export const Common = () => {

    return (
        <div>
            <Router>
                <div>
                    <Routes>
                        <Route path="" element={<Login />} />
                        <Route path="main" element={<Main />}>
                            {/* student section  */}
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="studentdetails" element={<StudentDetails />} />
                            <Route path="exam" element={<Exam />} />
                            {/* Master section */}
                            <Route path="topic" element={<Topic />} />
                            <Route path="content" element={<Content />} />
                            <Route path="question" element={<Question />} />
                            <Route path="questionlevel" element={<QuestionLevel />} />
                            <Route path="role" element={<Role />} />
                        </Route>
                        <Route path="studentmain" element={<StudentMain />}>
                            <Route path="studentdashboard" element={<StudentDashboard />} />
                            <Route path="profile" element={<Profile />} />
                            <Route path="allexam" element={<AllExam />} />
                            <Route path="studenttutorial" element={<StudentTutorial />} />
                        </Route>
                    </Routes>
                </div>
            </Router >

        </div >
    )
}