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
        <Button variant="outline" size="sm" 
          className="w-full mb-4 justify-start text-muted-foreground border-dashed border-2">
          <Plus className="mr-2 h-4 w-4"/> 
          Add Job
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Add Job Application</DialogTitle>
          <DialogDescription>
            Fill in the details of your job application.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="company" className="mt-2 block text-sm font-medium text-gray-700">
                  Company *
                </label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  className="mt-2 p-2 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="position" className="mt-2 block text-sm font-medium text-gray-700">
                  Position *
                </label>
                <input 
                  type="text" 
                  id="position" 
                  name="position" 
                  className="mt-2 p-2 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="location" className="mt-2 block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input 
                  type="text" 
                  id="location" 
                  name="location" 
                  className="mt-2 p-2 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="salary" className="mt-2 block text-sm font-medium text-gray-700">
                  Salary
                </label>
                <input 
                  type="text" 
                  id="salary" 
                  name="salary"
                  placeholder="annual: $80000, $250000" 
                  className="mt-2 p-2 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}