export type NewBookingInputs ={
    firstName: string,
    lastName: string,
    email: string,
    eventLocation: string,
    postcode: string,
    date: string,
    time: string,
    service: "Photography" | "Videography" | "Both",
    occasion: "Commercial" | "Real Estate" | "Event"

}

const defaultBookingData : NewBookingInputs={
    firstName: '',
    lastName: '',
    email: '',
    eventLocation: '',
    postcode: '',
    date: '',
    time: '',
    service: "" as "Photography" | "Videography" | "Both",
    occasion: "" as "Commercial" | "Real Estate" | "Event"
}