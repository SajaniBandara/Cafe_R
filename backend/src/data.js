//sample data
import mongoose from "mongoose";
export const sample_foods = [
    {
        id: new mongoose.Types.ObjectId(),
        name: 'Pizza',
        price: 10,
        cookTime: '10-20',
        favorite: true,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: 'food1.png',
        tags: ['Lunch', 'FastFood', 'Pizza'],
    },
    {
        id: new mongoose.Types.ObjectId(),
        name: 'Burger',
        price: 10,
        cookTime: '10-20',
        favorite: true,
        origins: ['Germany'],
        stars: 4.5,
        imageUrl: 'food2.png',
        tags: ['Lunch', 'FastFood', 'Hamburger'],
    },
    {
        id: new mongoose.Types.ObjectId(),
        name: 'Chicken Fried Rice',
        price: 10,
        cookTime: '20-30',
        favorite: false,
        origins: ['China', ' India'],
        stars: 3.2,
        imageUrl: 'food3.png',
        tags: ['Dinner', 'Lunch', 'Rice', 'Chinese'],
    },
    {
        id: new mongoose.Types.ObjectId(),
        name: 'Chicken Bacon Ranch Pasta',
        price: 10,
        cookTime: '20-30',
        favorite: true,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: 'food4.png',
        tags: ['Lunch', 'Pasta'],
    },
    {
        id: new mongoose.Types.ObjectId(),
        name: 'Croisants',
        price: 10,
        cookTime: '10-20',
        favorite: true,
        origins: ['France'],
        stars: 4.3,
        imageUrl: 'food5.jpg',
        tags: ['Dessert', 'FastFood', 'Croissant'],
    },


];
export const sample_tags = [
    { name: 'All', count: 6 },
    { name: 'FastFood', count: 4 },
    { name: 'Pizza', count: 2 },
    { name: 'Lunch', count: 3 },
    { name: 'SlowFood', count: 2 },
    { name: 'Hamburger', count: 1 },
    { name: 'Fry', count: 1 },
    { name: 'Soup', count: 1 },
];

export const sample_users = [
    {
        id: new mongoose.Types.ObjectId(),
        name: 'John Doe',
        email: 'john@gmail.com',
        password: '12345',
        address: 'Toronto On',
        isAdmin: false,
    },
    {
        id: new mongoose.Types.ObjectId(),
        name: 'sajani bandara',
        email: 'sajani@gmail.com',
        password: '12345',
        address: 'Shanghai',
        isAdmin: true,
    },
];