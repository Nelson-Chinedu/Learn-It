import { ChangeEvent, FunctionComponent, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { Card, Button } from 'src/components';

import { columns, rows } from 'src/constant/subscription';

const Subscription: FunctionComponent<Record<never, string>> = () => {
  const [isRenewSubscription, setIsRenewSubscription] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const _handleRenewSubscription = (event: ChangeEvent<HTMLInputElement>) => {
    setIsRenewSubscription(event.target.checked);
  };

  return (
    <Box mt={'2em'}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle2">Enable auto renew</Typography>
        <Switch
          onChange={_handleRenewSubscription}
          inputProps={{ 'aria-label': 'controlled' }}
          value={isRenewSubscription}
        />
      </Stack>
      <Typography variant="subtitle1">
        This option; if checked, will renew your productive subscription from
        your wallet balance, if your subscribed plan expires.
      </Typography>
      <Card width={'100%'} borderRadius="10px" border="1px solid #d0dce6">
        <Box sx={{ padding: '2em' }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4">Balance Available</Typography>
              <Typography>NGN 0</Typography>
            </Box>
            <Box
              sx={{
                pointerEvents: !isRenewSubscription ? 'none' : 'unset',
              }}
            >
              <Button
                fullWidth={false}
                sx={{
                  background: !isRenewSubscription && '#A7A9BC',
                }}
              >
                Top balance
              </Button>
            </Box>
          </Stack>
        </Box>
      </Card>
      <Typography variant="subtitle2" sx={{ margin: '2em 0px 1em' }}>
        Billing History
      </Typography>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? (
                            <NumericFormat
                              value={value.toFixed(2)}
                              thousandSeparator=","
                              displayType="text"
                            />
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={10}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default Subscription;
