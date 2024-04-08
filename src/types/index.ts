export type MainReviewProp = {
  author: string;
  body: string;
  category: string;
  id: string;
  profile: string;
  rating: 4;
}

export type ReviewProp = {
  review: MainReviewProp;
  i: number | string;
}