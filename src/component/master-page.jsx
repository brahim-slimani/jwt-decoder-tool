import React from 'react';
import { JwtDecoder, Footer } from './';

export const MasterPage = (props) => {
    return (
        <div className="root container">
            <JwtDecoder />
        </div>
    );
}