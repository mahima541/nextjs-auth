import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
    const TOKEN_SECRET = "nextjsyoutube";
    try {
        const token = request.cookies.get("token")?.value || '';
        const decodedToken:any = jwt.verify(token, TOKEN_SECRET!);
        return decodedToken.id;
    } catch (error: any) {
        throw new Error(error.message);
    }

}
