import React, { useEffect, useState } from 'react';
import utils from '../helper/Utils';
import logo from '../assets/img/jwt.png';

export const JwtDecoder = () => {

    const exampleJWToken = "eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Imp3dC1kZWNvZGVyIiwiaXNzIjoic2xpbWFuaSIsImlhdCI6MTUxNjIzOTAyMn0.mCi4zZRP7d9NQD-ULjBL9vB1NvicJD_FnmuFa1zJSfY88yBEpkLX_VExyAXG9XvLxRmrdocHlfzEHB6TTC3HrQ";
    const [decodedToken, setDecodedToken] = useState(null);
    const [encodedToken, setEncodedToken] = useState(exampleJWToken);

    useEffect(()=>{
        resolveToken(encodedToken);
    }, [encodedToken]);
    
    const handleDecode = (e) => {
        //e.preventDefault();
        setEncodedToken(e.target.value);
    }

    const resolveToken = (token) => {
        utils.decodeJWT(token).then((result) => {
            setDecodedToken(result);
            document.getElementById("jwt-inputText").classList.remove("error-boundary");
        }, (err) => {
            setDecodedToken(null);
            document.getElementById("jwt-inputText").classList.add("error-boundary");
        });
    }

    return (
        <div className="jwt-decoder-content">
            <h3 className="title">
                <img src={logo} height="50" className="jwt-logo" alt="img"/>JWT Decoder</h3>
            <div className="form-group">
                <label for="jwt-inputText" class="form-label">JWT Decoder tool that allows you to decode jwt tokens and resolve the claims data, <span className="label-sufix"> try now and paste your token here !</span></label>
                <textarea
                    className="form-control custom-element"
                    id="jwt-inputText"
                    rows="5"
                    value={encodedToken}
                    placeholder="Paste your JWT Token .."
                    onChange={(e) => handleDecode(e)} />
            </div>

            {/* claims */}
            {
                decodedToken?.payload &&

                <div class="card head-content">
                    <div class="card-header">
                        Header
                    </div>
                    <ul class="list-group list-group-flush">
                        <pre className="custom-content json-resolver">
                            {JSON.stringify(decodedToken.header, undefined, 2)}
                        </pre>
                    </ul>

                    <div class="card-header">
                        Payload
                    </div>
                    <ul class="list-group list-group-flush">
                        <pre className="custom-content json-resolver">
                            {JSON.stringify(decodedToken.payload, undefined, 2)}
                            {/* {prettyPrintJson.toHtml(decodedToken.payload)} */}
                        </pre>
                    </ul>

                    <div class="card-header">
                        Signature
                    </div>
                    <ul class="list-group list-group-flush">
                        <div className="custom-content">
                            {decodedToken.signature}
                        </div>
                    </ul>
                </div>
            }

        </div>
    );
}