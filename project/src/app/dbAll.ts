import {City} from './city'
import {Cinema } from './cinema'
import { Film } from './film'

export const CITIES : City[]=[
    {id:1, name:'Astana'},
    {id:2, name:'Almaty'}
];

export const FILMS: Film[]=[
    {id: 1, name: 'Millionare', rating: 9.5, description: '', imgURL:'', actors: 'Somebody'},
    {id: 2, name: 'Forsazh', rating: 9.6, description: '', imgURL:'', actors: 'Somebody'},
    {id: 3, name: 'Millionare1', rating: 9.5, description: '', imgURL:'', actors: 'Somebody'},
    {id: 4, name: 'Millionare2', rating: 9.4, description: '', imgURL:'', actors: 'Somebody'},
    {id: 5, name: 'Millionare3', rating: 8.0, description: '', imgURL:'', actors: 'Somebody'},
    {id: 6, name: 'Millionare4', rating: 4.0, description: '', imgURL:'', actors: 'Somebody'},
    {id: 7, name: 'Millionare5', rating: 9.2, description: '', imgURL:'', actors: 'Somebody'},
    {id: 8, name: 'Millionare6', rating: 9.1, description: '', imgURL:'', actors: 'Somebody'},
    {id: 9, name: 'Millionare7', rating: 9.4, description: '', imgURL:'', actors: 'Somebody'},
    {id: 10, name: 'Millionare8', rating: 9.1, description: '', imgURL:'', actors: 'Somebody'},
    {id: 11, name: 'Millionare9', rating: 9.0, description: '', imgURL:'', actors: 'Somebody'},
]

export const CINEMAS: Cinema[]=[
    {id: 1, name: 'Kinopark 1', city_id: 1, day: [
        {name:'Today', films:[
            {name:'Millionare', sessions:[
                {hall: 1, time:'2pm', place:[1,2,3,4,5]},
                {hall: 5, time:'5pm', place:[1,2,3,4,5]},
                {hall: 4, time:'2pm', place:[1,2,3,4,5]}
            ]},
            {name:'Forsazh', sessions:[
                {hall: 1, time:'2pm', place:[1,2,3,4,5]},
                {hall: 5, time:'5pm', place:[1,2,3,4,5]},
                {hall: 4, time:'2pm', place:[1,2,3,4,5]}
            ]}
        ]},
        {name:'Tomorrow', films:[
            {name:'Millionare', sessions:[
                {hall: 1, time:'2pm', place:[1,2,3,4,5]},
                {hall: 5, time:'5pm', place:[1,2,3,4,5]},
                {hall: 4, time:'2pm', place:[1,2,3,4,5]}
            ]},
            {name:'Forsazh', sessions:[
                {hall: 1, time:'2pm', place:[1,2,3,4,5]},
                {hall: 5, time:'5pm', place:[1,2,3,4,5]},
                {hall: 4, time:'2pm', place:[1,2,3,4,5]}
            ]}
        ]},
        {name:'day after tomorrow', films:[
            {name:'Millionare', sessions:[
                {hall: 1, time:'2pm', place:[1,2,3,4,5]},
                {hall: 5, time:'5pm', place:[1,2,3,4,5]},
                {hall: 4, time:'2pm', place:[1,2,3,4,5]}
            ]},
            {name:'Forsazh', sessions:[
                {hall: 1, time:'2pm', place:[1,2,3,4,5]},
                {hall: 5, time:'5pm', place:[1,2,3,4,5]},
                {hall: 4, time:'2pm', place:[1,2,3,4,5]}
            ]}
        ]},
    ]},
    {id: 2, name: 'Kinopark 2', city_id: 1, day: [
        {name:'Today', films:[
            {name:'Millionare', sessions:[
                {hall: 1, time:'2pm', place:[1,2,3,4,5]},
                {hall: 5, time:'5pm', place:[1,2,3,4,5]},
                {hall: 4, time:'2pm', place:[1,2,3,4,5]}
            ]},
            {name:'Forsazh', sessions:[
                {hall: 1, time:'2pm', place:[1,2,3,4,5]},
                {hall: 5, time:'5pm', place:[1,2,3,4,5]},
                {hall: 4, time:'2pm', place:[1,2,3,4,5]}
            ]}
        ]},
        {name:'Tomorrow', films:[
            {name:'Millionare', sessions:[
                {hall: 1, time:'2pm', place:[1,2,3,4,5]},
                {hall: 5, time:'5pm', place:[1,2,3,4,5]},
                {hall: 4, time:'2pm', place:[1,2,3,4,5]}
            ]},
            {name:'Forsazh', sessions:[
                {hall: 1, time:'2pm', place:[1,2,3,4,5]},
                {hall: 5, time:'5pm', place:[1,2,3,4,5]},
                {hall: 4, time:'2pm', place:[1,2,3,4,5]}
            ]}
        ]},
        {name:'day after tomorrow', films:[
            {name:'Millionare', sessions:[
                {hall: 1, time:'2pm', place:[1,2,3,4,5]},
                {hall: 5, time:'5pm', place:[1,2,3,4,5]},
                {hall: 4, time:'2pm', place:[1,2,3,4,5]}
            ]},
            {name:'Forsazh', sessions:[
                {hall: 1, time:'2pm', place:[1,2,3,4,5]},
                {hall: 5, time:'5pm', place:[1,2,3,4,5]},
                {hall: 4, time:'2pm', place:[1,2,3,4,5]}
            ]}
        ]},
    ]},
    // {id: 3, name: 'Kinopark 3', city_id: 2, day: [
    //     {name:'Today', films:['2pm', '3pm']},
    //     {name:'Tomorrow', films:['2pm', '3pm']},
    //     {name:'day after tomorrow', films:['2pm', '3pm']},
    // ]},
    // {id: 4, name: 'Kinopark 4', city_id: 2, day: [
    //     {name:'Today', films:['2pm', '3pm']},
    //     {name:'Tomorrow', films:['2pm', '3pm']},
    //     {name:'day after tomorrow', films:['2pm', '3pm']},
    // ]}
];