import {   createAsyncThunk , createSlice, Tuple } from "@reduxjs/toolkit";
import { act } from "react";
import { unstable_batchedUpdates } from "react-dom";

// async actions types
export const fetchEmployees = createAsyncThunk('employee/fetchEmployees',async()=>{
    const response =  await fetch('https://682b2508ab2b5004cb394d91.mockapi.io/worker/')
    const data = await response.json()
    return data
})

export const addEmployee = createAsyncThunk('employee/addEmploye',async(employee)=>{
    const response = await fetch('https://682b2508ab2b5004cb394d91.mockapi.io/worker/',{
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body   : JSON.stringify(employee),
    });
    const data = await response.json();
    return data  ; 
})

export const updateEmployee = createAsyncThunk('employee/updateEmployee',async({id,updates})=>{
  const response = fetch(`https://682b2508ab2b5004cb394d91.mockapi.io/worker/${id}`,{
    method : 'PUT',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify(updates),
  });
  const data = (await response).json();
  return data ;
})

export const  deleteEmployee = createAsyncThunk('employee/deleteEmployee',async(id)=>{
    const response = fetch(`https://682b2508ab2b5004cb394d91.mockapi.io/worker/${id}`,{
        method : 'DELETE',
    });
    return id;
})

 const  employeeSlice =  createSlice({
    name : 'employee',
    initialState : {
        employees : [],
        loading : false,
        error : null 
    },
    reducers : {},
    extraReducers : (builder)=>{
        builder
         .addCase(fetchEmployees.pending,(state)=>{
            state.loading = true;
         })
         .addCase(fetchEmployees.fulfilled,(state,action)=>{
            state.loading = false;
            state.employees = action.payload;
            state.error = null;
         })
         .addCase(fetchEmployees.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
         })  
    // ------------------------------------------------------------
         .addCase(updateEmployee,fulfilled,(state,action)=>{
            const index = state.employee.findIndex(emp=> emp.id === action.payload.id);
            if(index !== -1){
                state.employees[index] = action.payload;
            }
         })
         .addCase(addEmployee.fulfilled,(state,action)=>{
            state.employees.push(action.payload);
         })
         .addCase(deleteEmployee.fulfilled,(state,action)=>{
            state.employees = state.employees.filter(emp => emp.id !== action.payload );
         });
    }
 })

 export default employeeSlice.reducer