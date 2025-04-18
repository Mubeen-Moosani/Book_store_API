import { Book } from "../books/book.model.js";
import { ApiError } from "../utlis/ApiError.js";
import { ApiResponse } from "../utlis/ApiResponse.js";
import { asyncHandlers } from "../utlis/asynchandler.js";

const createBook = asyncHandlers(async (req, res) => {
  try {
    const newBook = await Book({ ...req.body }).save();
    return res
      .status(201)
      .json(new ApiResponse(201, newBook, "Book Created Successfully"));
  } catch (error) {
    throw new ApiError(500, "Failed to Create Book", error);
  }
});

const getAllBook = asyncHandlers(async (req, res) => {
  try {
    const allBooks = await Book.find().sort({ createdAt: -1 });
    return res.status(200).json(allBooks);
  } catch (error) {
    throw new ApiError(500, "Someting went Wrong while fetching the books");
  }
});
const getSingleBook = asyncHandlers(async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      throw new ApiError(401, "Book Not Found");
    }
    return res
      .status(200)
      .json(new ApiResponse(200, book, "Book Fetched Successfully"));
  } catch (error) {
    throw new ApiError(400, "Book Not Not");
  }
});
const updateBook = asyncHandlers(async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      throw new ApiError(401, "Book Not Found");
    }
    return res
      .status(200)
      .json(new ApiResponse(200, updatedBook, "Book updated Successfully"));
  } catch (error) {
    throw new ApiError(
      400,
      "Someting Went Wrong while Updating the Book",
      error
    );
  }
});
const deleteBook = asyncHandlers(async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      throw new ApiError(400, "Book Not Found");
    }
    return res
      .status(200)
      .json(new ApiResponse(200, deletedBook, "Book Deleted SuccessFully"));
  } catch (error) {
    throw new ApiError(500, "Book Not Found");
  }
});

export { createBook, getAllBook, getSingleBook, updateBook, deleteBook };
