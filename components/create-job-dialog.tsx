import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

interface CreateJobApplicationDialogProps {
  columnId: string;
  boardId: string;
}

export default function CreateJobApplicationDialog({columnId, boardId}: CreateJobApplicationDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline" size="sm" className="w-full">
          <Plus /> 
          Add Job
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Add Job Application</DialogTitle>
          <DialogDescription>
            Fill in the details of your job application.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
          <div>
            <div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company *
                </label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  className="mt-1 p-2 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />

                <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                  Position *
                </label>
                <input 
                  type="text" 
                  id="position" 
                  name="position" 
                  className="mt-1 p-2 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}