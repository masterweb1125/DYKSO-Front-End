
export const GenerateOTP = () => {
  // Generate a random 5-digit OTP
  const otp = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(5, "0");
  return otp;
};