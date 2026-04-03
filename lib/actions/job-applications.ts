"use server";

import { getSession } from "../auth/auth";
import connectDB from "../db";
import { Board, JobApplication } from "../models";

interface JobApplicationData {
  company: string;
  position: string;
  location?: string;
  notes?: string;
  salary?: string;
  jobUrl?: string;
  tags?: string[];
  jobDescription?: string;
  columnId: string;
  boardId: string;
}

export async function createJobApplication(data: JobApplicationData) {
  const session = await getSession();
  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  await connectDB();

  const {
    company,
    position,
    location,
    notes,
    salary,
    jobUrl,
    tags,
    jobDescription,
    columnId,
    boardId,
  } = data;

  if (!company || !position || !columnId || !boardId) {
    return { error: "Missing required fields" };
  }

  const board = await Board.findOne({
    _id: boardId,
    userId: session.user.id,
  });

  if (!board) {
    return { error: "Board not found" };
  }

  const column = await Board.findOne({
    _id: columnId,
    boardId: boardId,
  });

  if (!column) {
    return { error: "Column not found" };
  }

  const maxorder = (await JobApplication.findOne({ columnId }).sort({ order: -1 }).select("order").lean()) as { order: number } | null;

  const jobApplication = await JobApplication.create({
    company,
    position,
    location,
    notes,
    salary,
    jobUrl,
    tags: tags || [],
    jobDescription,
    columnId,
    boardId,
    status: "applied",
    order: maxorder ? maxorder.order + 1 : 0,
  });
}