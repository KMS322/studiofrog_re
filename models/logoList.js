module.exports = (sequelize, DataTypes) => {
  const LogoList = sequelize.define(
    "LogoList",
    {
      img_src: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  LogoList.associate = (db) => {};
  return LogoList;
};
