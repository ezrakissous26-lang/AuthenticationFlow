import { getAllUser } from "../repo/repo.js";

export async function authService() {
    return await getAllUser()
}