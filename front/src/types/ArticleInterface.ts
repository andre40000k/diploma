interface Article {
  id: string;
  title: string;
  content: string;
  authorId: string;
  tags: string[];
  views: number;
  likes: number;
  createdAt: Date;
}
