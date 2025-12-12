import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (id) => {
    return jwt.sign ({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE || '7d',
    });
};

export const register = async (req, res, next) => {
    try{

    } catch (error){
       next(error);
    }
};

//@desc Login user
//@route POST/api/auth/login
//@access Public

export const login = async (req, res, next) => {

};

//@desc Get user profile
//@route GET/api/auth/profile
// @access Private

export const getprofile = async (req, res, next) => {

}; 

//@decs  Update user profile
//@route PUT/api/auth/profile
//@access Private

export const udateProfile = async (req, res, next) => {

};

//@desc Change password
//@route POST/api/auth/change-password
//@access Private

export const changePassword = async (req, res, next) => {

};
