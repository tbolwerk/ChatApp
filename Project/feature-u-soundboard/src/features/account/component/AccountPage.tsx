/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Container, Grid, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { useFassets } from 'feature-u';
import { useTheme } from '@mui/material/styles';

const AccountPage = () => {
  const { user } = useAuth0();
  const SoundForm = useFassets('upload.form');
  const VoiceForm = useFassets('voice.form');
  const TTSForm = useFassets('tts.form');
  const SoundContainer = useFassets('play.soundContainer');

  const userInformation = [
    {
      key: 'Nickname',
      value: user.nickname,
    },
    {
      key: 'Email',
      value: user.email,
    },
    {
      key: 'Given name',
      value: user.given_name,
    },
    {
      key: 'Last name',
      value: user.family_name,
    },
  ];

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <h1>Account info</h1>
          {user.picture && <img src={user.picture} />}
          <Table>
            <TableBody>
              {userInformation.map((row) => (
                <TableRow key={row.key}>
                  <TableCell component="th" scope="row">
                    {`${row.key}: `}
                  </TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={7}>
          <h1>Forms</h1>
          {SoundForm && <SoundForm />}
          {TTSForm && <TTSForm />}
          {VoiceForm && <VoiceForm />}
        </Grid>
        <h1>Uploads</h1>
        {SoundContainer && <SoundContainer />}
      </Grid>
    </Container>
  );
};

const AccountPageWithProtection = withAuthenticationRequired(AccountPage, {});

export default AccountPageWithProtection;
