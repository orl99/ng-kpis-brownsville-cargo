export interface UserSessionI {
  userId: string;
  password: string;
  startSession: boolean;
  facilityId?: string;
}
