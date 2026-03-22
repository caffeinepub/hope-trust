import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Activity {
    title: string;
    description: string;
}
export interface ContactInfo {
    email: string;
    address: string;
    phone: string;
}
export interface Achievement {
    title: string;
    year: string;
    description: string;
}
export interface backendInterface {
    getAchievements(): Promise<Array<Achievement>>;
    getActivities(): Promise<Array<Activity>>;
    getContactInfo(): Promise<ContactInfo>;
    updateContactInfo(address: string, phone: string, email: string): Promise<void>;
}
