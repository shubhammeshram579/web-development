import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import asyncHandler from "../utils/asynceHendler.js";
import { Product } from "../models/products.model.js";

const createProduct = async (req, res) => {
  try {
    const { productname, price, brands } = req.body;

    // console.log(req.body)

    if (!productname || !price || !brands) {
      throw new ApiError(401, "all filed is required");
    }

    const allreadycreate = await Product.findOne({ productname: productname });

    if (allreadycreate) {
      throw new ApiError(401, "product allready exited");
    }

    const createP = await Product.create({
      productname,
      price,
      brands,
    });

    if (!createP) {
      throw new ApiError(401, "something problem product not created");
    }

    return res.status(201).json(new ApiResponse(200, { createP }, "succes"));
  } catch (error) {
    throw new ApiError(500, "something went wroge", error);
  }
};

const getPrdoucts = async (req, res) => {
  try {
    const prouctlist = await Product.find({});

    return res.status(200).json(new ApiResponse(200, { prouctlist }, "succes"));
  } catch (error) {
    throw new ApiError(500, "something went wroge", error);
  }
};

const getProductslist = async (req, res) => {
  try {
    const { productName } = req.query;

    const whare = {};

    if (productName) {
      whare.productname = productName;
    }

    const products = await Product.aggregate([
      { $match: whare },
      { $sort: { price: 1 } },
    ]);

    // const products = await Product.find(whare)

    return res.status(201).json(new ApiResponse(200, { products }, "success"));
  } catch (error) {
    throw new ApiError(500, "something went wroge", error);
  }
};


const updatePrdoucts = async (req, res) => {
  try {
    const { id } = req.params;

    console.log(id);

    const { productname, price, brands } = req.body;

    console.log(req.body);

    if (!productname || !price || !brands) {
      throw new ApiError(401, "all filed is required");
    }

    const updateProdut = await Product.findByIdAndUpdate(
      id,
      {
        $set: {
          productname: productname,
          price: price,
          brands: brands,
        },
      },
      {
        new: true,
      },
    );

    return res
      .status(200)
      .json(new ApiResponse(200, { updateProdut }, "succes"));
  } catch (error) {
    throw new ApiError(500, "something went wroge", error);
  }
};

const deletePrdoucts = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteProduct = await Product.findByIdAndDelete(id);

    return res
      .status(200)
      .json(new ApiResponse(200, { deleteProduct }, "succes delete"));
  } catch (error) {
    throw new ApiError(500, "something went wroge", error);
  }
};



// real world used 
// export const getProducts = async (req, res) => {
//   try {
//     const {
//       page = 1,
//       limit = 10,
//       search,
//       category,
//       brand,
//       minPrice,
//       maxPrice,
//       rating,
//       featured,
//       sortBy = "createdAt",
//       order = "desc",
//     } = req.query;

//     const filter = {
//       isPublished: true,
//     };

//     if (search) {
//       filter.$or = [
//         {
//           title: {
//             $regex: search,
//             $options: "i",
//           },
//         },
//         {
//           description: {
//             $regex: search,
//             $options: "i",
//           },
//         },
//       ];
//     }

//     if (category) {
//       filter.category = category;
//     }

//     if (brand) {
//       filter.brand = brand;
//     }

//     if (featured) {
//       filter.isFeatured = featured === "true";
//     }

//     if (rating) {
//       filter.rating = {
//         $gte: Number(rating),
//       };
//     }

//     if (minPrice || maxPrice) {
//       filter.price = {};

//       if (minPrice) {
//         filter.price.$gte = Number(minPrice);
//       }

//       if (maxPrice) {
//         filter.price.$lte = Number(maxPrice);
//       }
//     }

//     const skip = (page - 1) * limit;

//     const sort = {
//       [sortBy]: order === "asc" ? 1 : -1,
//     };

//     const [products, total] = await Promise.all([
//       Product.find(filter).sort(sort).skip(skip).limit(Number(limit)),

//       Product.countDocuments(filter),
//     ]);

//     res.status(200).json({
//       success: true,

//       page: Number(page),

//       limit: Number(limit),

//       total,

//       totalPages: Math.ceil(total / limit),

//       products,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,

//       message: error.message,
//     });
//   }
// };

export {
  createProduct,
  getPrdoucts,
  updatePrdoucts,
  deletePrdoucts,
  getProductslist,
};
