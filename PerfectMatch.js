const potentialMatch = [
  {
    id: 1,
    Fname: "Ranjana",
    Lname: "Tamang",
    age: 19,
    gender: "Female",
    maritalStatus: "single",
    location: {
      permanentLocation: { city: "Kavre", country: "Nepal" },
      currentLocation: { city: "Bhaktapur", country: "Nepal" },
    },
  },
  {
    id: 2,
    Fname: "Rajina",
    Lname: "Gurung",
    age: 17,
    gender: "Female",
    maritalStatus: "single",
    location: {
      permanentLocation: { city: "Dhading", country: "Nepal" },
      currentLocation: { city: "Kathmandu", country: "Nepal" },
    },
  },
  {
    id: 3,
    Fname: "Sumit",
    Lname: "Magar",
    age: 22,
    gender: "male",
    maritalStatus: "married",
    partnerName: "Sushmita",
    location: {
      permanentLocation: { city: "Jhapa", country: "Nepal" },
      currentLocation: { city: "Butal", country: "Nepal" },
    },
  },
  {
    id: 3,
    Fname: "John",
    Lname: "Magar",
    age: 22,
    gender: "male",
    maritalStatus: "single",
    location: {
      permanentLocation: { city: "Khotang", country: "Nepal" },
      currentLocation: { city: "Butal", country: "USA" },
    },
  },
];
const shadiResponse = {
  statusCode: 200,
  message: "Potential matches fetched successfully",
  data: potentialMatch,
};

// const getPerfectMatch=()=>{
//     if (shadiResponse.statusCode ===200){
//         shadiResponse.data.map((potentialMatch)=>{
//              if(potentialMatch.gender === "male" && potentialMatch.age >=20 && potentialMatch.maritalStatus=="single" && potentialMatch.currentLocation.country=="USA"){
//         })
//         shadiResponse.data.forEach((potentialMatch)=>{
//         })

//     }
// }
const getPerfectMatch = () => {
  if (shadiResponse.statusCode === 200) {
    shadiResponse.data.map((candidate) => {
      const { gender, age, maritalStatus, location } = candidate; // Destructure the candidate object
      const Myrequirements =
        (gender === "male" && age >= 20) || maritalStatus === "single";
      if (Myrequirements) {    //boolean value
        if (location.currentLocation.country === "USA") {
          console.log(
            `Perfect Match Found: ${candidate.Fname} ${candidate.Lname}, Age: ${candidate.age}, Location: ${location.currentLocation.city}, ${location.currentLocation.country}`
          );
        }
      }
    });
  }
};
getPerfectMatch();
if (Myrequirements){
  location.currentLocation.country === "USA" ? console.log{
    `Perfect Match Found: ${candidate.Fname} ${candidate.Lname}, Age: ${candidate.age}, Location: ${location.currentLocation.city}, ${location.currentLocation.country}`
  }
}