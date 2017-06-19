
module.exports = function(sequelize, DataTypes){
var Burger = sequelize.define('burger', {
	burger_name: {
		type: DataTypes.STRING,
		allowNull: false,
    len: [1]
	},
	devoured: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
}
});
return Burger;
};
