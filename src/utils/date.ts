export const publishedDate = ( postDate: string ) => {
  return new Date(`${postDate} 12:00:00 -0500`);
};

