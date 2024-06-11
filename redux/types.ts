export interface State {
    user_id: string | null;
    token: string | null;
    isAuthenticated: boolean;
    attendee: Attendee | null;
    qrCodeURL: string | null
}

export interface Attendee {
    userId: string | null;
    name: string;
    email: string;
    dietaryRestrictions: [string];
    points: Number
    // Add other properties of the attendee here
}