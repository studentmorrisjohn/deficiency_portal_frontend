import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main'
import StudentLogin from './components/StudentLogin'
import FacultyLogin from './components/FacultyLogin'
import HomescreenStudent from './components/Student/HomescreenStudent'
import ProfileStudent from './components/Student/ProfileStudent';
import PasswordStudent from './components/Student/PasswordStudent'
import HomescreenEmployee from './components/Employee/HomescreenEmployee'
import StudentListDocument from './components/Employee/StudentListDocument';
import StudentListFinance from './components/Employee/StudentListFinance'
import ProfileEmployee from './components/Employee/ProfileEmployee'
import PasswordEmployee from './components/Employee/PasswordEmployee'
import StudentsWithDeficiency from './components/Employee/StudentsWithDeficiency';
import AddStudent from './components/Employee/AddStudent';
import SuccessModal from './components/Modals/SuccessModal';
import AddFinanceModal from './components/Modals/AddFinanceModal';
import FailedModal from './components/Modals/FailedModal';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element={<Main />} />
          <Route path = "/StudentLogin" element={<StudentLogin />} />
          <Route path = "/FacultyLogin" element={<FacultyLogin />} />
          <Route path = "/HomescreenStudent" element={<HomescreenStudent/>} />
          <Route path = "/ProfileStudent" element={<ProfileStudent/>}/>
          <Route path = "/PasswordStudent" element={<PasswordStudent/>} />
          <Route path = "/HomescreenEmployee" element={<HomescreenEmployee/>} />
          <Route path = "/StudentListDocument" element={<StudentListDocument/>} />
          <Route path = "/StudentListFinance" element={<StudentListFinance/>} />
          <Route path = "/PasswordEmployee" element={<PasswordEmployee/>} />
          <Route path = "/ProfileEmployee" element={<ProfileEmployee/>} />
          <Route path = "/StudentsWithDeficiency" element={<StudentsWithDeficiency />} />
          <Route path= "/AddStudent" element={<AddStudent />} />
          <Route path= "/SuccessModal" element={<SuccessModal/>} />
          <Route path= "/AddFinanceModal" element={<AddFinanceModal/>} />
          <Route path= "/FailedModal" element={<FailedModal/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
