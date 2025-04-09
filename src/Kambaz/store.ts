import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import accountReducer from "./Account/reducer";
import courseReducer from "./Courses/courseReducer";
import enrollmentsReducer from "./Courses/People/enrollmentsReducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    courseReducer,
    enrollmentsReducer,
  },
});
export default store;