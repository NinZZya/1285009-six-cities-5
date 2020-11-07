export const adaptUser = (user) => {
  return {
    id: user[`id`],
    name: user[`name`],
    email: user[`email`],
    avatar: user[`avatar_url`],
    isPro: user[`is_pro`],
  };
};
