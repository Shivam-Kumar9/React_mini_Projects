import {configureStore} from '@reduxjs/toolkit'
import employeesReducer from '@store/employeeSlice'

export default  store = configureStore({
    reducer : {
      employees : employeesReducer
    }
})