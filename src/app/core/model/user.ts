export interface User {
    userName: string;
    password: string;
}

export interface RegistrationDetail {
    guardian?: GuardianDetail;
    userDetail: userDetail;
    emargencyDetail: EmargencyDetail;
}

export interface GuardianDetail {
    name: string;
    contactNo: string;
}

export interface userDetail {
    firstName: string;
    lastName: string;
    dob: string;
    contactNo: string;
    emailId: string;
    gender: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
}

export interface EmargencyDetail {
    name: string;
    contactNo: string;
}
