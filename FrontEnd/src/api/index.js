/**
 * AJAX function interface
 */

import ajax from "./ajax"

// log in
export const loginRequest = (email, password) => ajax("http://localhost:3000/api1/api/v1/customer/login", { email, password }, "POST");

// sign up
export const signupRequest = (firstName, lastName, email,
    password, dob, phoneNumber, age, streetAddress, suburb, postCode, state) =>
    ajax("http://localhost:3000/api1/api/v1/customer", {
        firstName, lastName, email,
        password, dob, phoneNumber, age, streetAddress, suburb, postCode, state
    }, "POST");

// service request
export const serviceRequest = (customerId,location, data) =>
    ajax(`http://localhost:3000/api1/api/v1/job/${customerId}`,{
        ...location, ...data
    }, "POST")