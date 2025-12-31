const userData = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  phone: "9876543210",
  skills: "HTML, CSS, JavaScript, React"
};

const fields = document.querySelectorAll("input, textarea");

fields.forEach((field) => {
  const attributes = (
    field.placeholder +
    field.name +
    field.id
  ).toLowerCase();

  if (attributes.includes("name")) {
    field.value = userData.name;
  } 
  else if (attributes.includes("email")) {
    field.value = userData.email;
  } 
  else if (attributes.includes("phone") || attributes.includes("mobile")) {
    field.value = userData.phone;
  } 
  else if (
    field.tagName === "TEXTAREA" ||
    attributes.includes("skill") ||
    attributes.includes("experience")
  ) {
    field.value = userData.skills;
  }
});
