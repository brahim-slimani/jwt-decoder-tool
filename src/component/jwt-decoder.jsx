import React, { useState } from 'react';
import utils from '../helper/Utils';
import logo from '../assets/img/jwt.png';

export const JwtDecoder = () => {

    const [decodedToken, setDecodedToken] = useState(null);

    const handleDecode = (e) => {
        //e.preventDefault();
        utils.decodeJWT(e.target.value).then((result) => {
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
                <img src={logo} height="50" />JWT Decoder</h3>
            <div className="form-group">
                <label for="jwt-inputText" class="form-label">JWT Decoder helps you to decode and read the token claims </label>
                <textarea
                    className="form-control custom-element"
                    id="jwt-inputText"
                    rows="5"
                    placeholder="Grap your JWT Token .."
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