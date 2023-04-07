// const accountSid = 'ACc168a321cff3d1ba7e028312e4cbc403';
const accountSid = 'AC81a771df88dafea49f95158000290800';
// const authToken = 'aa1c399f2d0c7726cb305f85fe5b79c9';
const authToken = '2ccbcd75b638a0cde5f1e59a69261406';
const client = require('twilio')(accountSid, authToken);

//https://www.twilio.com/docs/sms/quickstart/node

exports.sendMobileSMS = async ( body , to) => {
 return await client.messages .create({
      body,
      to,
      // from: '+19842309629' 
      from: '+19704995417' 
});
}  