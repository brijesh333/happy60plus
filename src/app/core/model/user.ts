export interface User {
    userName: string;
    password: string;
}

export interface RegistrationDetail {
    guardian?: GuardianDetail;
    userDetail: IuserObj;
    emargencyContactDetail?: EmargencyDetail;
}

export interface GuardianDetail {
    name: string;
    contactNo: string;
}

interface IuserObj {
    type: string;
    userInfo: IuserDetail;
}

interface IuserDetail {
    firstName: string;
    lastName: string;
    dob: string;
    contactNo: string;
    emailId: string;
    gender: string;
    addressDetails: IaddressDetails;
}

interface IaddressDetails {
    address: string;
    city: string;
    state: string;
    pincode: string;
}

export interface EmargencyDetail {
    name: string;
    contactNo: string;
}
