/*In this exercise, we will be given a url encoded string of key-value pairs, and we will have to turn it into a JavaScript object.

URL Encoded Strings
To safely send data in a URL, the data first has to be encoded to convert any special characters to URL safe characters. For this assignment we will only focus on the following URL encoding rules:

%20 represents a space character.
Key-value pairs are represented using an = character: key=value
Multiple key-value pairs are separated using a & character: key1=value1&key2=value2
So the following URL encoded string:

city=Vancouver&weather=lots%20of%20rain
Could be converted to the following JavaScript object:

{
  city: "Vancouver",
  weather: "lots of rain"
}

Instruction
Create a function named urlDecode that will receive a URL encoded string, and return the a JavaScript object that represents that data.

*/

const urlDecode = function (text) {
  const decodedObject = {};

  // just spliit thr string
  const pairs = text.split("&");

  // Iterate over each pair
  for (const pair of pairs) {
    // Split each pair by '=' to then you gonna separate the key s
    const [key, value] = pair.split("=");

    // I have to change the value og the code assigned it to the corresponding key in the object
    decodedObject[decodeURIComponent(key)] = decodeURIComponent(
      value.replace(/%20/g, " ")
    );
  }

  return decodedObject;
};

console.log(urlDecode("duck=rubber")); //{duck: "rubber"}
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain")); // {city: "Vancouver", weather: "lots of rain"}
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather); // "lots of rain"

module.exports = urlDecode;
