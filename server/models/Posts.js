module.exports = (sequelize, DataTypes) => {
                            // ini  'v' nama tabel yg mau dibuat
    const Posts = sequelize.define("Posts", { 
        title : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        postText : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        username : {
            type : DataTypes.STRING,
            allowNull : false,
        },

    })

    return Posts
}