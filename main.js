console.log("works");

const toggleAccordion = (element) => {
  console.log("hello");
  console.log(element.parentElement.querySelector(".accordion").style.height);
  if (
    element.parentElement.querySelector(".accordion").style.height == "auto"
  ) {
    element.parentElement.querySelector(".accordion").style.height = 0;
  } else {
    element.parentElement.querySelector(".accordion").style.height = "auto";
  }
};

const toggleAbout = (element) => {
  console.log("hello");
  console.log(element.parentElement.querySelector(".about").style.height);
  if (element.parentElement.querySelector(".about").style.height == "auto") {
    element.parentElement.querySelector(".about").style.height = 0;
  } else {
    element.parentElement.querySelector(".about").style.height = "auto";
  }
};

const toggleContact = (element) => {
  console.log("hello");
  console.log(element.parentElement.querySelector(".contact").style.height);
  if (element.parentElement.querySelector(".contact").style.height == "auto") {
    element.parentElement.querySelector(".contact").style.height = 0;
  } else {
    element.parentElement.querySelector(".contact").style.height = "auto";
  }
};

const toggleWork = (element) => {
  console.log("hello");
  console.log(element.parentElement.querySelector(".work").style.height);
  if (element.parentElement.querySelector(".work").style.height == "auto") {
    element.parentElement.querySelector(".work").style.height = 0;
  } else {
    element.parentElement.querySelector(".work").style.height = "auto";
  }
};
