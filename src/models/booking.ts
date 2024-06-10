
enum ConfirmationOption {
    MANUAL = 1,
    NOTIFICATION = 2,
    AUTO = 3,

}

enum BookingMode{
    ONLINE = 1,
    PERSON = 2,
    AUTO = 3
}

export interface Booking {
    resourceType : string,
    mode : BookingMode,
    duration : number,
    confirmationOption : ConfirmationOption,


}