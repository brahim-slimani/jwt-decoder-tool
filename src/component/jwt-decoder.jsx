import React, { useState } from 'react';
import utils from '../helper/Utils';

export const JwtDecoder = (props) => {

    const [decodedToken, setDecodedToken] = useState(null);
    const [error, setError] = useState(null);

    const handleDecode = (e) => {
        //e.preventDefault();
        utils.decodeJWT(e.target.value).then((result) => {
            setDecodedToken(result);
        }, (error) => {
            setError(error);
            setDecodedToken(null);
        });
    }


    return (
        <div className="jwt-decoder-content">
            <h3 className="title">JWT Decoder</h3>
            <div className="form-group">
                <label for="jwt-inputText" class="form-label">JWT Decoder helps you to decode and read the token claims </label>
                <textarea
                    className="form-control custom-element"
                    id="jwt-inputText"
                    rows="5"
                    placeholder="Grap your JWT Token .."
                    onChange={(e) => handleDecode(e)} />
            </div>

            {
                decodedToken?.payload &&

                <div class="card custom-element">
                    <div class="card-header">
                        Header
                    </div>
                    <ul class="list-group list-group-flush">
                        <div className="custom-content">
                            {JSON.stringify(decodedToken.header)}
                        </div>
                    </ul>


                    <div class="card-header">
                        Payload
                    </div>
                    <ul class="list-group list-group-flush">
                        <div className="custom-content">
                            {JSON.stringify(decodedToken.payload)}
                        </div>
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