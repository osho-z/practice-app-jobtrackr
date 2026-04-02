"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";

interface CreateJobApplicationDialogProps {
  columnId: string;
  boardId: string;
}

export default function CreateJobApplicationDialog({columnId, boardId}: CreateJobApplicationDialogProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="outline" size="sm" 
          className="w-full mb-4 justify-start text-muted-foreground border-dashed border-2">
          <Plus className="mr-2 h-4 w-4"/> 
          Add Job
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm ">
        
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Add Job Application</DialogTitle>
          <DialogDescription>
            Fill in the details of your job application.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-90 w-full rounded-md p-4">
          <form className="space-y-4 pr-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="company" className="mt-2 block text-sm font-medium text-gray-700">
                    Company *
                  </label>
                  <input 
                    type="text" 
                    id="company"
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
                    placeholder="annual: $80000, $250000" 
                    className="mt-2 p-2 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                  <label htmlFor="jobUrl" className="mt-2 block text-sm font-medium text-gray-700">
                    Job Url
                  </label>
                  <input 
                    type="text" 
                    id="jobUrl"
                    placeholder="https://example.com/job" 
                    className="mt-2 p-2 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
              </div>
              <div className="space-y-2">
                  <label htmlFor="tags" className="mt-2 block text-sm font-medium text-gray-700">
                    Tags (comma separated)
                  </label>
                  <input 
                    type="text" 
                    id="tags"
                    placeholder="frontend, react, javascript" 
                    className="mt-2 p-2 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
              </div>
              <div className="space-y-2">
                  <label htmlFor="jobDescription" className="mt-2 block text-sm font-medium text-gray-700">
                    Job Description
                  </label>
                  <Textarea 
                    id="jobDescription"
                    placeholder="Enter job description"
                    rows={3} 
                    className="mt-2 p-2 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
              </div>
              <div className="space-y-2">
                  <label htmlFor="notes" className="mt-2 block text-sm font-medium text-gray-700">
                    Notes
                  </label>
                  <Textarea
                    id="notes"
                    placeholder="Enter notes"
                    rows={4}
                    className="mt-2 p-2 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
              </div>
            </div>
          </form>
        </ScrollArea>
        <DialogFooter>
          <Button variant="outline" className="mr-2" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="submit">Add Job</Button>
        </DialogFooter>  
      </DialogContent>
    </Dialog>
  );
}