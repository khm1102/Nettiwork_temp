// export const getProfile = async (userId: number | undefined): Promise<Partial<User>> => {
//   if (!userId) {
//     throw { status: 401, message: "User not authenticated" };
//   }
//   const user = dummyUsers.find(u => u.id === userId);
//   if (!user) {
//     throw { status: 404, message: "User not found" };
//   }
//   const { ...profile } = user;
//   return profile;
// };
