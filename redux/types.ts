export interface State {
    user_id: string | null;
    token: string | null;
    roles: string[] | null;
    isAuthenticated: boolean;
    attendee: Attendee | null;
    qrCodeURL: string | null
}

export interface Attendee {
    userId: string | null;
    name: string;
    email: string;
    events: string[];
    dietaryRestrictions: string[];
    allergies: string[];
    hasCheckedIn: boolean;
    points: Number;
    foodWave: Number;
    hasPriority: {
        dayOne: boolean;
        dayTwo: boolean;
        dayThree: boolean;
        dayFour: boolean;
        dayFive: boolean;
    }
    // Add other properties of the attendee here
}