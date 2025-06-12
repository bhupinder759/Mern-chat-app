import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async(req, res) => {
    const { email, fullName, password} = req.body;
    try {

        if (!email || !fullName || !password) {
            return res.status(400).send("All fields are required")
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).send("User Already Exists")
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            email,
            fullName,
            password: hashPassword
        });

        await user.save();

        return res.status(201).send("Signup successful")
    } catch (error) {
        res.status(500).send("Signup error", error)
    }
}

export const login = (req, res) => {
    res.status(404).send("login")
}

export const logout = (req, res) => {
    res.send("logout")
}