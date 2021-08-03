import { Grid, GridItem } from "@chakra-ui/react"

const ListItemDetail = ({ abbreviation, identifier, nonce, confirmations, totalValue, ...rest }) => {
  return (
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      {...rest}
    >
      <GridItem rowSpan={2} colSpan={1} >
        { abbreviation }
      </GridItem>
      <GridItem colSpan={2}>
        { identifier }
      </GridItem>
      <GridItem colSpan={2}>
        Nonce: { nonce }
      </GridItem>
      <GridItem colSpan={2}>
        Confirmations: { confirmations }
      </GridItem>
      <GridItem rowSpan={2} colSpan={1}>
        value: { totalValue }
      </GridItem>
    </Grid>
  );
}

export default ListItemDetail;
