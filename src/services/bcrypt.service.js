const bcrypt = require('bcrypt');

const encodePassword = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    
    return hash;
}
    
const comparePassword = async (plaintextPassword, hash) => {
    const result = await bcrypt.compare(plaintextPassword, hash);
    
    return result;
}

module.exports = {
    encodePassword,
    comparePassword
}