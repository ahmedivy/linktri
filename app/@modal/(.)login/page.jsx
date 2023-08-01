import LoginModal from "@/components/login-modal";
import {
  Dialog,
  InterceptedDialogContent as DialogContent,
} from "@/components/ui/dialog";

function Page() {
  return (
    <Dialog open>
      <DialogContent className="sm:max-w-[425px]">
        <LoginModal />
      </DialogContent>
    </Dialog>
  );
}

export default Page;
