import { UnorderedList, Box } from "@chakra-ui/react"
import ListItemDetail from "../components/ListItemDetail"

const LatestBlock = (props) => {
  const blocks = []
  const blockItems = blocks.map((block) => {
    return <ListItemDetail
              key={block.id || 1}
              p={5}
              border="2px"
              abbreviation={block.abbreviation}
              identifier={block.identifier}
              timeAgo={block.timeAgo}
              transactionCount={block.transactionCount}
              totalValue={block.totalValue}
            />
    })
  // const blockItems = [{key: 1}]
  return (
    <UnorderedList p={4}>
      { blockItems }
    </UnorderedList>
  );
}

export default LatestBlock;
