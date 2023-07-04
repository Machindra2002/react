import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AdminRoot } from "./Admin/AdminRootComponent";
// import Login from "./LoginComponent";
import { Dashboard } from "./Admin/dashBoardComponent";
import { StudentDashboard } from "./Student/DashboardComponent";
import { StudentExam } from "./Student/ExamComponent";
import { Student } from "./Student/StudentComponent";
import { ContentQuestion } from "./Admin/ContentQuestionsComponent";
import { QuestionLevel } from "./Admin/QuestionLevelComponent"
import { Role } from "./Admin/RoleComponent";
import { Topic } from "./Admin/TopicComponent";
import { TopicContent } from "./Admin/TopicContentComponent";
import Login from "./Student/LoginDemoComponent";
import { StudentTutorial } from "./Student/TutorialComponent";
import StudentRoot from "./Student/StudentRootComponent";
import { StudentProfile } from "./Student/ProfileComponent";
import { Exam } from "./Admin/ExamComponent";
import { ShowResults } from "./Student/StudentResultComponent";
import { Register } from "./Student/Register";
import "./Student/Login.css"
export const Common = () => {
    return (
        <div className="gss">
            <Router>
                <Routes>
                    <Route path="" element={<Login />} />
                    <Route path="register" element={<Register />}></Route>
                    <Route path="admin" element={<AdminRoot />} >
                        <Route path="" element={<Dashboard />} />
                        <Route path="student" element={<Student />} />
                        <Route path="exam" element={<Exam />} />
                        <Route path="topic" element={<Topic />} />
                        <Route path="topic-content" element={<TopicContent />} />
                        <Route path="content-question" element={<ContentQuestion />} />
                        <Route path="question-level" element={<QuestionLevel />} />
                        <Route path="role" element={<Role />} />
                    </Route>
                    <Route path="student" element={<StudentRoot />} >
                        <Route path="" element={<StudentDashboard />} ></Route>
                        <Route path="profile" element={<StudentProfile />} ></Route>
                        <Route path="exam" element={<StudentExam />} ></Route>
                        <Route path="tutorial" element={<StudentTutorial />} >
                        </Route>


                        <Route path="result" element={<ShowResults />} ></Route>

                    </Route>
                </Routes>
            </Router>
        </div>
    )
}