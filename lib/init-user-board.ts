import { Columns } from "lucide-react";
import connectDB from "./db";
import { Board, Column} from "./models";

const DEFAULT_COLUMNS = [
  { name: "Wishlist", order: 0 },
  { name: "Applied", order: 1 },
  { name: "Interview", order: 2 },
  { name: "Offer", order: 3 },
  { name: "Rejected", order: 4 },
]

export default async function initializeUserBoard(userId: string) {
  try {
    await connectDB();

    const existingBoard = await Board.findOne({ userId, name: "Job Hunt" });

    if (existingBoard) {
      return existingBoard;
    }

    const board = await Board.create({
      name: "Job Hunt",
      userId,
      columns: [],
    });

    const columns = await Promise.all(
      DEFAULT_COLUMNS.map((col) => Column.create ({
        name: col.name,
        boardId: board._id,
        order: col.order,
        jobApplications: [],
      }))
    );

    board.columns = columns.map((col) => col._id);
    await board.save();

    return board;

  } catch (error) {
    throw error;
  }

}