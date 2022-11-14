import { Box, Collapse, Alert, IconButton, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { SxProps } from '@mui/system';

export interface BannerProps {
  open: boolean;
  onClick: () => void;
  height?: number;
  sx?: SxProps;
}

export const MaintenanceBanner = (props: BannerProps) => {
  const { open, onClick, height, sx } = props;

  return (
    <Box sx={{ width: '100%', ...sx }}>
      <Collapse in={open}>
        <Alert
          id="maintenance-banner"
          action={
            <IconButton aria-label="close" color="inherit" size="small" onClick={onClick}>
              <CloseIcon fontSize="inherit" cursor="pointer" />
            </IconButton>
          }
          severity="success"
          icon={false}
          sx={{
            width: '100%',
            backgroundColor: (t) => t.palette.nym.highlight,
            borderRadius: 0,
            color: (t) => t.palette.nym.networkExplorer.nav.text,
            height: height || 'auto',
          }}
        >
          <Box display="flex">
            <Typography variant="body1" fontWeight={700}>
              SCHEDULED MAINTENANCE
            </Typography>
            <Divider orientation="vertical" flexItem sx={{ mx: '16px', borderRightWidth: 2 }} />
            <Typography variant="body2">
              On Tuesday 15th of November 10AM GMT, the migration to the new mixnet contract begins. This means all Nym
              apps and services{' '}
              <Box sx={{ fontWeight: 700 }} display="inline">
                will be temporarily on hold while the upgrade takes place.
              </Box>{' '}
              Bonding/unbonding, delegating/delegating{' '}
              <Box sx={{ fontWeight: 700 }} display="inline">
                will be frozen for up to 36 hours.
              </Box>{' '}
              You will still be able to transfer tokens between accounts, and use IBC.
            </Typography>
          </Box>
        </Alert>
      </Collapse>
    </Box>
  );
};
