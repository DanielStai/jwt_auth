

const registerUser = (req, res) => {
    res.json({message:"register me"})
}

const loginUser = (req, res) => {
    res.json({message:"logged in"})
}


const getThisUser = (req, res) => {
    res.json({message:"get my details"})
}

module.exports = {
    registerUser,
    loginUser,
    getThisUser
}
