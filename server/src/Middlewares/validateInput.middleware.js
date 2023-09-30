const validateInput = (input, schema, res) => {
    const { error } = schema.validate(input);
    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return false;
    }
    return true;
}
module.exports = validateInput;
