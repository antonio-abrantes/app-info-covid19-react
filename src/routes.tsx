import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Landing}></Route>
      {/* <Route path='/study' component={TeacherList}></Route>
      <Route path='/give-classes' component={TeacherForm}></Route> */}
    </BrowserRouter>
  );
}
export default Routes;
