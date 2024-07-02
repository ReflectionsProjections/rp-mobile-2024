import {jwtDecode} from 'jwt-decode';

interface DecodedToken {
    userId: string;
    displayName: string;
    roles: string[];
}

export function decodeToken(token: string): DecodedToken {
    try {
        const decoded = jwtDecode<DecodedToken>(token)
        return decoded;
    } catch (error) {
        console.error('Error decoding token:', error)
    }
}