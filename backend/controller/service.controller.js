import { serviceSchema_validation } from "../Schema_validation/serviceSchema.validation.js";
import { serviceModel } from "../model/service.model.js";

export const addService = async (req, res) => {
    // first we need to validate the data before saving it in DB
    console.log("inside service controller")
  const { error } = serviceSchema_validation(req.body);
  if (error) return res.send(error.details[0].message);

  console.log(req.body);
  const { userId, zipCode, service_info, attachment } = req.body;
 
  try {
      const createService = new serviceModel({
          userId: userId,
          zipCode: zipCode,
          service_info: service_info,
          attachment: attachment
      });
      await createService.save();
      res.status(200).json({ success: true, message: "service added successfully", service:createService });

  } catch (err) {
    res.status(500).json({
      status: 500,
      success: false,
      message: err,
    });
  }
};
