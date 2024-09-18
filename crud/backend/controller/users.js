import { db } from "../db.js";

export const getUsers = (req, res) => {
    const q = "select * from users"

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        
            return res.status(200).json(data)
    })
}