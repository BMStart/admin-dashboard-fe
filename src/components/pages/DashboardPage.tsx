
import { DashboardTemplates } from '@/components/templates';
import { DashboardBox } from '@/components/features/dashboard';
import { Archive, ArchiveX, File, Inbox, Send, Trash2 } from 'lucide-react';

const DashboardPage = () => {
  return (
    <DashboardTemplates
      title="Dashboard"
      navLinks={
        [
          {
            title: "Inbox",
            label: "128",
            icon: Inbox,
            variant: "default",
          },
          {
            title: "Drafts",
            label: "9",
            icon: File,
            variant: "ghost",
          },
          {
            title: "Sent",
            label: "",
            icon: Send,
            variant: "ghost",
          },
          {
            title: "Junk",
            label: "23",
            icon: ArchiveX,
            variant: "ghost",
          },
          {
            title: "Trash",
            label: "",
            icon: Trash2,
            variant: "ghost",
          },
          {
            title: "Archive",
            label: "",
            icon: Archive,
            variant: "ghost",
          },
        ]
      }
    // header={<DashboardHeader />}
    >
      <DashboardBox />
    </DashboardTemplates>
  )
};

export default DashboardPage;