import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from '@/lib/i18n';
import * as m from '@/paraglide/messages';

const NotFound = () => {
  return (
    <div className="-mt-16 grid h-screen place-items-center">
      <div className="grid grid-cols-1 gap-4">
        <h1 className="flex items-center gap-2">
          <span className="text-2xl font-semibold">404</span>
          <Separator orientation="vertical" className="bg-accent h-8" />{' '}
          {m.page_not_found()}
        </h1>
        <Button asChild>
          <Link href="/">{m.go_home()}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
