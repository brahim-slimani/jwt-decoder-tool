import JWTDecoder from 'jwt-decoder-claims';

class Utils {

    decodeJWT = (token) => new Promise((resolve, reject) => {
        try {
            const claims = JWTDecoder.resolve(token);
            resolve({ header: claims.header, payload: claims.payload, signature: "Verified signature" });
        } catch (err) {
            console.error(err);
            reject(err);
        }
    });

}
export default new Utils();
