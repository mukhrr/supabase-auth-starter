import { ScrollArea } from '@/components/scroll-area'
import { PageTitle } from '@/components/page-title'

export function NotFound() {
  return (
    <ScrollArea useScrollAreaId>
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Not found" />
          <p>This link might be broken, deleted, or moved. Nevertheless, there’s nothing to see here...</p>
        </div>
      </div>
    </ScrollArea>
  )
}
