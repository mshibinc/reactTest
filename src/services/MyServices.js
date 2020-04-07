// import React from 'react';
// import fetch from 'isomorphic-fetch';
let api="http://localhost/angularEmployee/Clinic/";
export function createUser(data) {
    return fetch(api+'create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // mode: 'CORS',
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
        // if(response = "success"){
        //     alert("successfully saved");
        // }
        // console.log(data);
    }).catch(err => err);
}
export function getAllUser() {
    return fetch(api+'index', {
        method: 'GET',
    }).then(response => {
        return response.json();
        // console.log(data);
    }).catch(err => err);
}
export function deleteEmployee(id) {
    
    return fetch(api +'/delete/'+ id, {
        method: 'post',
    }).then(response =>{
        return response.json();
    }).catch(err => err);
}

export function singleUser(id) {
    
    return fetch(api +'/single/'+ id, {
        method: 'post',
    }).then(response =>{
        return response.json();
    }).catch(err => err);
}
export function updateUser(data) {
    return fetch(api+'update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // mode: 'CORS',
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    }).catch(err => err);
}