import { FunctionComponent } from 'react';
import { Plus } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';

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

const DocumentPageHeader = async () => {
  const t = await getTranslations('DocumentsPage');

  return (
    <div className="pb-2">
      <Heading1>{t('title')}</Heading1>
      <p className="opacity-50">{t('description')}</p>
    </div>
  );
};

const SearchDocuments = async () => {
  const t = await getTranslations('DocumentsPage');

  return (
    <div className="py-4">
      <Input placeholder={t('search')} />
    </div>
  );
};

type DocumentsRowScrollableProps = {
  children: React.ReactNode;
  heading: string;
};

const DocumentsRowScrollable: FunctionComponent<
  DocumentsRowScrollableProps
> = async ({ children, heading }) => {
  const t = await getTranslations('DocumentsPage');

  return (
    <div className="py-4">
      <Heading2>{heading}</Heading2>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="mb-4 flex h-48 w-max space-x-4">{children}</div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="flex">
        <Button variant="secondary">{t('view_all')}</Button>
      </div>
    </div>
  );
};

const RecentlyAddedDocumentsRow = async () => {
  const t = await getTranslations('DocumentsPage');

  // Mockup
  const mockDocuments = Array.from({ length: 10 });

  return (
    <DocumentsRowScrollable heading={t('recently_added')}>
      {mockDocuments.map((_, index) => (
        <div key={index} className="bg-muted/50 aspect-square rounded-xl" />
      ))}
    </DocumentsRowScrollable>
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
        <SheetContent className="w-full sm:w-[540px]">
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

type PageProps = {
  params: Promise<Record<string, string>>;
};

const DocumentsPage: FunctionComponent<PageProps> = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const session = await auth();

  if (!session) {
    return notFound();
  }

  return (
    <section>
      <DocumentPageHeader />
      <SearchDocuments />
      <RecentlyAddedDocumentsRow />
      <DocumentAddButton />
    </section>
  );
};

export default DocumentsPage;
