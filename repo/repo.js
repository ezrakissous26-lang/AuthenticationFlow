import { client } from "../config/connect.js";

const db = client.db('authDB')
const authCol = db.collection('authentification')

export async function createUser(user) {
    try {
        const result = await authCol.insertOne(user)
        return result
    } catch (error) {
        throw error
    }
}

export async function getUserbyEmail(email) {
    try {
        const isExist = await authCol.findOne({email: email})
        return isExist
    } catch (error) {
        throw error
    }
}