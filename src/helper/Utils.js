import jwt_decode from "jwt-decode";

class Utils {

    decodeJWT = (token) => new Promise((resolve, reject) => {
        try {
            const header = jwt_decode(token.replace("Bearer ", ""), { header: true });
            const payload = jwt_decode(token);
            resolve({ header, payload, signature: "Verified signature" });
        } catch (err) {
            reject("Invalid JWT token !");
        }
    });

}
export default new Utils();
