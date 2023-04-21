encodePassword = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    return hash;
}
    
comparePassword = async (plaintextPassword, hash) => {
        const result = await bcrypt.compare(plaintextPassword, hash);
return result;
}