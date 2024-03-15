module.exports = (sequelize, DataTypes) => {
  const VideoList = sequelize.define(
    "VideoList",
    {
      file_url: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      file_title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      file_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  VideoList.associate = (db) => {};
  return VideoList;
};
