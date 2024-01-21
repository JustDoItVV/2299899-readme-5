export interface Token {
  id?: string;
  tokenId: string;
  userId: string;
  accessToken: string;
  refreshToken: string;
  createdAt: Date;
  expiresIn: Date;
}
