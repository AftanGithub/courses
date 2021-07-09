import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Courses from './components/Courses/Courses';
import LoadCourse from './components/Courses/LoadProduct';
import { courseData } from './content/courseData';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar data={courseData}/>
      
    </div>
    <Route path="/" exact component={Landing} />
    <Route path="/courses" exact component={Courses} />
    <Route path="/courses/:slug" exact component={LoadCourse} />
    </BrowserRouter>
  );
}

export default App;
