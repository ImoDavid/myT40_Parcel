import * as Yup from "yup";

const validate = Yup.object({
  sender_first_name: Yup.string()
    .required("firstname is a required field")
    .label("sender first name"),
  sender_last_name: Yup.string()
    .required("lastname is a required field")
    .label("sender last name"),
  sender_address: Yup.string()
    .required("address is a required field")
    .label("sender address"),
  sender_email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is Required"),
  sender_phone_number: Yup.number()
    .min(11, "invalid phone number format")
    .required("Phone Number is a required field"),

  dropoff_location_id: Yup.string()
    .required("pick a dropoff location")
    .label("reciever firstname"),
  reciever_first_name: Yup.string()
    .required("Firstname is a required field")
    .label("reciever firstname"),
  reciever_last_name: Yup.string()
    .required("lastname is a required field")
    .label("reciever lastname"),
  reciever_phone_number: Yup.number()
    .min(11, "invalid phone number format")
    .required("Phone Number is a required field"),
  reciever_email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is Required"),
  reciever_address: Yup.string()
    .required("address is a required field")
    .label("reciever address"),
  size_id: Yup.string()
    .required("parcel size is a required field")
    .label("parcel size"),
  type_id: Yup.string()
    .required("parcel type is a required field")
    .label("parcel type"),
  value: Yup.string()
    .required("parcel value is a required field")
    .label("parcel value"),
});
export default validate;