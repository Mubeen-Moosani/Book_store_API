import { Router } from "express";
import {
  createBook,
  deleteBook,
  getAllBook,
  getSingleBook,
  updateBook,
} from "../controllers/book.conroller.js";
const router = Router();
router.route("/create-book").post(createBook);
router.route("/").get(getAllBook);
router.route("/:id").get(getSingleBook);
router.route("/edit/:id").put(updateBook);
router.route("/:id").delete(deleteBook);

export default router;
