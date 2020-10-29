export const adaptReviewToServer = (data) => {
  return {
    comment: data.text,
    rating: data.rate,
  };
};

export const adaptReviewToClent = (review) => {
  return {
    id: review[`id`],
    user: {
      id: review[`user`][`id`],
      name: review[`user`][`name`],
      avatar: review[`user`][`avatar_url`],
      isPro: review[`user`][`is_pro`],
    },
    date: review[`date`],
    rate: review[`rating`],
    text: review[`comment`],
  };
};

export const adaptReviewsToClent = (reviews) => reviews.map(adaptReviewToClent);
