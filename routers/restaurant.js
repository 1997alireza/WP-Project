const express = require("express");
const mongoose = require("mongoose");
const ObjectId = require('mongodb').ObjectId;
const restaurant = require("../models/restaurant.js");
const comment = require("../models/comment.js");
const address = require("../models/address.js");
const category = require("../models/category.js");
const food = require("../models/food.js");

const restaurant_router = express.Router();

restaurant_router
    .use((req, res, next) => {
        next();
    })
    .get('/', (req,res) => {
        if(req.query.area) {
            restaurant.model.find({"address.area": req.query.area}, (error, restaurants) => {
                if (error) {
                    res.status(500).send(error);
                }
                else {
                    if(req.query.category){
                        if(Array.isArray(req.query.category))
                            categories = req.query.category;
                        else
                            categories = [req.query.category];

                        let accepted = [];

                        restaurants.forEach(rest => {
                            if(!
                                categories.some(c => {
                                    return !rest.categories.map(ent => ent.name).includes(c);
                                })
                            ) {
                                accepted.push(rest);
                            }
                        });

                        res.send(accepted)
                    }
                    else {
                        res.send(restaurants);
                    }
                }
            });
        }
        else {
            res.send([])
        }
    })
    .get('/area/:prefix', (req, res) => {
        let prefix = req.params.prefix;
        restaurant.model.find({}, (error, restaurants) => {
            if (error) {
                res.status(500).send(error);
            }
            else {
                let accepted = [];

                restaurants.forEach(rest => {
                    let city = rest.address.city;
                    let area = rest.address.area;
                    if (area.startsWith(prefix)){
                        if(!
                                accepted.some(a => {
                                    return a.city == city && a.area == area
                                })
                        ){
                            accepted.push({city: city, area: area});
                        }
                    }
                });
                res.send(accepted)
            }
        });
    })
    .get('/area', (req, res) => {
        restaurant.model.find({}, (error, restaurants) => {
            if (error) {
                res.status(500).send(error);
            }
            else {
                let accepted = [];

                restaurants.forEach(rest => {
                    let city = rest.address.city;
                    let area = rest.address.area;
                    if(!
                            accepted.some(a => {
                                return a.city == city && a.area == area
                            })
                    ){
                        accepted.push({city: city, area: area});
                    }
                });
                res.send(accepted)
            }
        });
    })
    .get('/:id', (req, res) => {
        let rest_id = req.params.id;
        try {
            restaurant.model.findOne({_id: ObjectId(rest_id)}, (error, restaurant) => {
                if (error) {
                    res.status(500).send(error);
                }
                else {
                    if (restaurant == null) res.status(404).send(null);
                    else {
                        let sum_qualities = 0;
                        let num = 0;
                        restaurant.comments.forEach(comment => {
                            sum_qualities += comment.quality;
                            num++;
                        });
                        let result_rest = {
                            _id: restaurant._id,
                            name: restaurant.name,
                            openingTime: restaurant.openingTime,
                            closingTime: restaurant.closingTime,
                            address: restaurant.address,
                            categories: restaurant.categories,
                            foods: restaurant.foods,
                            logo: '/assets/img/restaurants/' + restaurant._id + '.jpeg',
                            averageRate: sum_qualities / num
                        };
                        res.send(result_rest)
                    }
                }
            });
        } catch (err) {
            res.status(400).send(err)
        }
    })
    .get('/:id/comments', (req, res) => {
        let rest_id = req.params.id;
        try {
            restaurant.model.findOne({_id: ObjectId(rest_id)}, (error, restaurant) => {
                if (error) {
                    res.status(500).send(error);
                }
                else {
                    if (restaurant == null) res.status(404).send(null);
                    else {
                        let result_comments = [];
                        restaurant.comments.forEach(comment => {
                            let res_c = {
                                author: comment.author,
                                quality: comment.quality,
                                packaging: comment.packaging,
                                deliveryTime: comment.deliveryTime,
                                text: comment.text,
                                created_at: comment.created_at
                            };
                            result_comments.push(res_c)
                        });
                        result_comments.sort((c1, c2) => {
                            if(c1.created_at > c2.created_at) return 1;
                            return 0;
                        });
                        res.send(result_comments)
                    }
                }
            });
        } catch (err) {
            res.status(400).send(err)
        }
    })
    .post('/:id/comments', (req, res) => {
        let rest_id = req.params.id;
        restaurant.model.findOne({_id: ObjectId(rest_id)}, (error, restaurant) => {
            if (error) {
                res.status(500).send(error);
            }
            else {
                if (restaurant == null) res.status(404).send(null);
                else {
                    try {
                        let author = req.body.author.toString();
                        let quality = Number(req.body.quality);
                        let packaging = Number(req.body.packaging);
                        let deliveryTime = Number(req.body.deliveryTime);
                        if (quality > 5 || quality < 0) throw "Numbers should be between 0 and 5";
                        if (packaging > 5 || packaging < 0) throw "Numbers should be between 0 and 5";
                        if (deliveryTime > 5 || deliveryTime < 0) throw "Numbers should be between 0 and 5";

                        let text = req.body.text;
                        if (text === undefined) text = "";
                        else text = String(text);
                        let created_at = req.body.created_at;
                        if (!isNaN(created_at)) {
                            created_at = created_at.toString();
                        }
                        if (created_at.length === 10) created_at = created_at + '000'; // timestamp without milliseconds
                        if (created_at.length === 13) created_at = Number(created_at);
                        created_at = new Date(created_at);

                        let comment_obj = new comment.model();
                        comment_obj.author = author;
                        comment_obj.quality = quality;
                        comment_obj.packaging = packaging;
                        comment_obj.deliveryTime = deliveryTime;
                        comment_obj.text = text;
                        comment_obj.created_at = created_at;
                        comment_obj.save();

                        restaurant.comments.push(comment_obj);
                        restaurant.save();

                        res.send("success")
                    } catch (err) {
                        res.status(400).send(err)
                    }
                }
            }
        });
    })
    .post('/', async (req, res) => {
        try {
            let restaurant_obj = new restaurant.model();
            restaurant_obj.name = req.body.name.toString();

            restaurant_obj.openingTime = Number(req.body.openingTime);
            restaurant_obj.closingTime = Number(req.body.closingTime);

            let address_obj = new address.model();
            address_obj.city = req.body.address.city.toString();
            address_obj.area =  req.body.address.area.toString();
            if(req.body.address.addressLine)
                address_obj.addressLine = String(req.body.address.addressLine);
            else
                address_obj.addressLine = "";
            address_obj.save();
            restaurant_obj.address = address_obj;

            let categories = [];
            if(req.body.categories){
                for(let index=0; index < req.body.categories.length; index++) {  //foreach doesn't support asynchronous
                    let cat_id = req.body.categories[index];
                    await category.model.findOne({_id: ObjectId(cat_id)}, (error, cat) => {
                        if (error) {
                            res.status(500).send(error);
                            return
                        }
                        categories.push(cat);
                    });
                }
            }
            restaurant_obj.categories = categories;

            let foods = [];
            if(req.body.foods){
                for(let index=0; index < req.body.foods.length; index++) {
                    let food_id = req.body.foods[index];
                    await food.model.findOne({_id: ObjectId(food_id)}, (error, food) => {
                        if (error) {
                            res.status(500).send(error);
                            return
                        }
                        foods.push(food);
                    });
                }
            }
            restaurant_obj.foods = foods;

            restaurant_obj.comments = [];

            restaurant_obj.save();

            res.send("success")
        } catch (err){
            res.status(400).send(err)
        }
    });

module.exports = restaurant_router;