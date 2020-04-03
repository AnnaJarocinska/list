import React from 'react';
import { connect } from 'react-redux';

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shoppinglist55555',
        pass: 'Ozekishoppinglist5'
    }
});

let mailOptions = {
    from: 'shoppinglist55555@gmail.com',
    to: "anna.jarocinska5@gmail.com",
    subject: "Shopping-list",
    text: "Shopping-list",
};

transporter.sendMail(mailOptions)
    .then(function (response) {
        console.log('sent')
    })
    .catch(function (error) {
        console.log('error', error)
    })



const SendingEmail = (props) => {

    const handleEmailButtonClick = () => {
        console.log('mail wysłany')
    }

    return (

        <button onClick={handleEmailButtonClick}> send </button>
    )
}


const mapStateToProps = state => ({
    products: state.products
})


export default connect(mapStateToProps, null)(SendingEmail)