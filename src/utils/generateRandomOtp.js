
export const GenerateOTP = () => {
  // Generate a random 5-digit OTP
  const otp = Math.floor(10000 + Math.random() * 90000).toString();
  return otp;
};