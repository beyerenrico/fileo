import { Plus } from 'lucide-react';
import { notFound } from 'next/navigation';

import { auth } from '@/app/api/auth/[...nextauth]/auth-options';
import { Heading1, Heading2 } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const DocumentPageHeader = () => {
  return (
    <div className="pb-2">
      <Heading1>Documents</Heading1>
      <p className="opacity-50">Here are some documents</p>
    </div>
  );
};

const SearchDocuments = () => {
  return (
    <div className="py-4">
      <Input placeholder="Search documents" />
    </div>
  );
};

const DocumentsRowScrollable = () => {
  return (
    <div className="py-4">
      <Heading2>Recently added</Heading2>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="mb-4 flex h-48 w-max space-x-4">
          <div className="bg-muted/50 aspect-square rounded-xl" />
          <div className="bg-muted/50 aspect-square rounded-xl" />
          <div className="bg-muted/50 aspect-square rounded-xl" />
          <div className="bg-muted/50 aspect-square rounded-xl" />
          <div className="bg-muted/50 aspect-square rounded-xl" />
          <div className="bg-muted/50 aspect-square rounded-xl" />
          <div className="bg-muted/50 aspect-square rounded-xl" />
          <div className="bg-muted/50 aspect-square rounded-xl" />
          <div className="bg-muted/50 aspect-square rounded-xl" />
          <div className="bg-muted/50 aspect-square rounded-xl" />
          <div className="bg-muted/50 aspect-square rounded-xl" />
          <div className="bg-muted/50 aspect-square rounded-xl" />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="flex">
        <Button variant="secondary">View all</Button>
      </div>
    </div>
  );
};

const DocumentAddButton = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" className="mt-4">
            <Plus />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Add a new document</SheetTitle>
            <SheetDescription>
              Take a picture of the document or upload a file
            </SheetDescription>
          </SheetHeader>
          <div className="my-4 border border-dashed p-4">
            <p>
              I would like to show a QR code here, if the user is not on a
              phone, so he or she can scan it with their mobile device, take a
              photo and send it back to the application AND ALSO a button to
              directly upload from the device
            </p>
            <br />
            <p>
              Furthermore the form should have multiple steps and not be visible
              all at once (like a wizard)
            </p>
            <br />
            Steps
            <ol className="list-decimal pl-5">
              <li>
                Upload a file or take a picture of the document with your phone
              </li>
              <li>Crop, resize, rotate the document</li>
              <li>Add a title, description and tags to the document</li>
              <li>
                Show a summary and a button to finish the creation process
              </li>
            </ol>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Finish</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const DocumentsPage = async () => {
  const session = await auth();

  if (!session) {
    return notFound();
  }

  return (
    <section>
      <DocumentPageHeader />
      <SearchDocuments />
      <DocumentsRowScrollable />
      <DocumentAddButton />
    </section>
  );
};

export default DocumentsPage;
