import dotenv from "dotenv";

export const config = {
  //execution_env="local",  //remote, lambdatest

  appUrl: process.env.BASE_URL || "https://automationexercise.com/",
  //appUrl = "https://tutorialsninja.com/demo/",
  //appUrl="http://localhost/opencart/upload/"
  //appUrl="https://naveenautomationlabs.com/opencart"

  //valid login credentials
  email: process.env.USER_EMAIL || "test@abc.com",
  password: process.env.USER_PASSWORD || "test@123",

  //product details
  productName: "MacBook",
  productQuantity: "2",
  totalPrice: "$1,204.00",
};
